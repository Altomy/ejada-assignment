/**
 * About Component
 *
 */

// Libraries
import React from 'react';
import tw from 'twrnc';
// Components
import { Text } from 'react-native-paper';
import { View } from 'react-native';

// View
export default () => {
  return (
    <View style={tw`flex flex-1 bg-blue-200 justify-center items-center`}>
      <Text variant="headlineMedium">About</Text>
    </View>
  );
};
