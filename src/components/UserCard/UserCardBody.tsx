/**
 * UserCardBody Component
 *
 */

// Libraries
import React from 'react';
import tw from 'twrnc';
// Components
import { View } from 'react-native';
import UserCardBodyItem from './UserCardBodyItem';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native-paper';

// View
export default () => {
  return (
    <View style={tw`flex pt-10 px-2 pb-2`}>
      <Text variant="titleLarge" style={tw`text-center`}>
        Name
      </Text>
      <UserCardBodyItem
        title="Test text"
        icon={<Icon name="mail-outline" size={18} />}
      />
      <UserCardBodyItem
        title="Test text"
        icon={<Icon name="phone-portrait-outline" size={18} />}
      />
      <UserCardBodyItem
        title="Test text"
        icon={<Icon name="calendar-outline" size={18} />}
      />
    </View>
  );
};
