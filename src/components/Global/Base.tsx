/**
 * Base Component
 *
 */

// Libraries
import React from 'react';
import tw from 'twrnc';
import FastImage from 'react-native-fast-image';
// Components
import { View } from 'react-native';
// assets
import assets from 'assets';

// types
type PropsTypes = {
  children: any;
};

// View
export default (props: PropsTypes) => {
  return (
    <View style={tw`flex flex-1 bg-blue-800`}>
      <View style={tw`absolute w-full h-full opacity-30`}>
        <FastImage source={assets.bg.loading} style={tw`w-full h-full`} />
      </View>
      {props.children}
    </View>
  );
};
