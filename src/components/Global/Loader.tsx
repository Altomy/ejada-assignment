/**
 * Loader Component
 *
 */

// Libraries
import React from 'react';
import tw from 'twrnc';
// Components
import { ActivityIndicator, MD3Colors } from 'react-native-paper';
import { View } from 'react-native';

type PropsTypes = {
  withBlur?: boolean;
};

// View
export default (props: PropsTypes) => {
  return (
    <View
      style={tw`flex flex-1 justify-center items-center ${
        props.withBlur ? 'bg-blue-700 opacity-30' : ''
      }`}>
      <ActivityIndicator color={MD3Colors.primary90} />
    </View>
  );
};
