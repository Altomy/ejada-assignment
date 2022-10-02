import { useEffectOnce } from 'hooks/useEffectOnce';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withDelay,
} from 'react-native-reanimated';

type propsTypes = {
  children: JSX.Element;
  index: number;
};

export default ({ children, index }: propsTypes) => {
  const { width } = useWindowDimensions();
  const sharedValue = useSharedValue(width);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: sharedValue.value * -1 }],
    };
  });

  useEffectOnce(() => {
    sharedValue.value = withDelay(200 * (index + 1), withTiming(0));
  });
  return <Animated.View style={animatedStyles}>{children}</Animated.View>;
};
