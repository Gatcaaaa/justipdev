import {View, Text} from 'react-native';
import React from 'react';
import {onboardingData} from '../data/onboard';
import {SharedValue} from 'react-native-reanimated';
import Dot from './Dot';

type Props = {
  data: onboardingData[];
  x: SharedValue<number>;
};
const PaginationOnboard = ({data, x}: Props) => {
  return (
    <View className="flex-row h-[40px] justify-center items-center">
      {data.map((_, index) => {
        return <Dot index={index} x={x} key={index} />;
      })}
    </View>
  );
};

export default PaginationOnboard;
