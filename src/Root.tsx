import React from 'react';
import {View, Text} from 'react-native';
import tw from 'twrnc';

export default () => {
  return (
    <View style={[tw`flex flex-1 bg-blue-400`]}>
      <Text>Root</Text>
    </View>
  );
};
