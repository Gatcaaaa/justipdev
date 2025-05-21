import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteStackParamList} from '../../App';

const HomeScreen = () => {
  const navigate = useNavigation<StackNavigationProp<RouteStackParamList>>();

  const handlePress = () => {
    navigate.navigate('SigninScreen');
  };
  return (
    <View style={styles.debug}>
      <TouchableOpacity onPress={handlePress}>
        <Text>#1D7A8C</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  debug: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    fontSize: 26,
  },
});

export default HomeScreen;
