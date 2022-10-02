/**
 * UserCardFooter Component
 *
 */

// Libraries
import React from 'react';
import tw from 'twrnc';
// Components
import { IconButton, Text } from 'react-native-paper';
import { View } from 'react-native';

// View
export default () => {
  return (
    <View style={tw`p-1 flex flex-row`}>
      <View style={tw`flex flex-1 items-center justify-center`}>
        <IconButton icon="thumb-up-outline" iconColor="#1860ff" />
      </View>
      <View style={tw`flex flex-1 items-center justify-center`}>
        <Text variant="headlineMedium" style={tw`text-blue-600`}>
          0
        </Text>
        <Text variant="labelMedium">VOTES</Text>
      </View>
      <View style={tw`flex flex-1 items-center justify-center`}>
        <IconButton icon="thumb-down-outline" iconColor="#1860ff" />
      </View>
    </View>
  );
};
