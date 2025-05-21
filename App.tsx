import BootSplash from 'react-native-bootsplash';
import React, {useEffect, useState} from 'react';
import './global.css';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import {getItem} from './src/utils/AsyncStorage';
import {ActivityIndicator, View} from 'react-native';

export type RouteStackParamList = {
  OnboardingScreen: undefined;
  HomeScreen: undefined;
};
function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator<RouteStackParamList>();
  const [showOnboarded, setShowOnboarded] = useState<boolean | null>(null);

  useEffect(() => {
    const init = async () => {};

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      checkIfAlreadyOnboarded();
    });
  }, []);

  const checkIfAlreadyOnboarded = async () => {
    const onboarded = await getItem('onboarded');
    if (onboarded === 200) {
      // successfully onboarded, don't show onboarding screen once again
      setShowOnboarded(false);
      console.log(`it's value should be 200:`, onboarded);
    } else {
      // didn't onboard, show onboarding screen
      setShowOnboarded(true);
      console.log(`it's value is:`, onboarded);
    }
  };

  if (showOnboarded === null) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <ActivityIndicator size={'large'} color={'#F3F3F3'} />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={showOnboarded ? 'OnboardingScreen' : 'HomeScreen'}>
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
