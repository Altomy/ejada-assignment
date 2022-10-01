/**
 * Loading Component
 *
 */

// Libraries
import React from 'react';
import tw from 'twrnc';

// Components
import { ActivityIndicator, Text, MD3Colors } from 'react-native-paper';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import assets from 'assets';

// View
export default () => {
  return (
    <View style={tw`flex-1 bg-blue-700 justify-center items-center`}>
      <View style={tw`absolute w-full h-full opacity-30`}>
        <FastImage source={assets.bg.loading} style={tw`w-full h-full`} />
      </View>
      <ActivityIndicator animating={true} color={MD3Colors.secondary90} />
      <Text variant="labelSmall" style={tw`text-white mt-4 text-center`}>
        Load Content
      </Text>
    </View>
  );
};
