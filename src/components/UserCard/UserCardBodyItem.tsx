/**
 * UserCardBodyItem Component
 *
 */

// Libraries
import React from 'react';
import tw from 'twrnc';
// Components
import { Text } from 'react-native-paper';
import { View } from 'react-native';

type propsTypes = {
  icon: any;
  title: string;
};

// View
export default (props: propsTypes) => {
  return (
    <View style={tw`flex flex-row items-center`}>
      {props.icon}
      <Text variant="labelSmall" style={tw`px-1`}>
        {props.title}
      </Text>
    </View>
  );
};
