/**
 * Header Component
 *
 */

// Libraries
import React from 'react';
import tw from 'twrnc';
// Components
import { IconButton } from 'react-native-paper';
import { View } from 'react-native';

// View
export default () => {
  return (
    <View style={tw`flex flex-row py-2 justify-between items-center`}>
      <IconButton icon="menu" size={30} />
      <IconButton icon="account-search" size={30} />
    </View>
  );
};
