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

type propsTypes = {
  name: string;
  mail: string;
  phone: string;
  birthday: string;
};
// View
export default ({ name, mail, phone, birthday }: propsTypes) => {
  return (
    <View style={tw`flex pt-10 px-2 pb-2`}>
      <Text variant="titleLarge" style={tw`text-center`}>
        {name}
      </Text>
      <UserCardBodyItem
        title={mail}
        icon={<Icon name="mail-outline" size={18} />}
      />
      <UserCardBodyItem
        title={phone}
        icon={<Icon name="phone-portrait-outline" size={18} />}
      />
      <UserCardBodyItem
        title={birthday}
        icon={<Icon name="calendar-outline" size={18} />}
      />
    </View>
  );
};
