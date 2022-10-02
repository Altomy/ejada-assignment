/**
 * ErrorHandler Component
 *
 */

// Libraries
import React from 'react';
import tw from 'twrnc';
// Components
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// View
export default () => {
  return (
    <View style={tw`flex flex-1 justify-center items-center`}>
      <Icon name="alert-outline" size={32} />
      <Text style={tw`text-center`}>There are error</Text>
    </View>
  );
};
