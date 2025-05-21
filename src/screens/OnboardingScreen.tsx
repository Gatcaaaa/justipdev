import {View, Text, FlatList, ViewToken} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteStackParamList} from '../../App';
import {setItem} from '../utils/asyncStorage';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import onboarding, {onboardingData} from '../data/onboard';
import RenderItem from '../components/RenderItem';
import PaginationOnboard from '../components/PaginationOnboard';
import CustomButtonOnboard from '../components/CustomButtonOnboard';

const OnboardingScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RouteStackParamList>>();

  const flatListRef = useAnimatedRef<FlatList<onboardingData>>();
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);

  const onViewAbleItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems[0].index !== null) {
      flatListIndex.value = viewableItems[0].index;
    }
  };

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });

  
  return (
    <View className="flex-1">
      <Animated.FlatList
        ref={flatListRef}
        onScroll={onScroll}
        data={onboarding}
        renderItem={({item, index}) => {
          return <RenderItem item={item} index={index} x={x} />;
        }}
        keyExtractor={item => item.id.toString()}
        scrollEventThrottle={16}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewAbleItemsChanged}
        viewabilityConfig={{
          minimumViewTime: 300,
          viewAreaCoveragePercentThreshold: 10,
        }}
      />
      <View className="absolute left-0 right-0 bottom-[20px] flex-row justify-between items-center mx-[30px] py-[30px]">
        <PaginationOnboard data={onboarding} x={x} />
        <CustomButtonOnboard
          flatListRef={flatListRef}
          flatListIndex={flatListIndex}
          dataLength={onboarding.length}
          x={x}
        />
      </View>
    </View>
  );
};

export default OnboardingScreen;
