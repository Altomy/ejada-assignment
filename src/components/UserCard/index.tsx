/**
 * UserCard Component
 *
 */

// Libraries
import React from 'react';
import tw from 'twrnc';
// Components
import { View } from 'react-native';
import UserCardHeader from './UserCardHeader';
import UserCardBody from './UserCardBody';
import UserCardFooter from './UserCardFooter';
import { Divider } from 'react-native-paper';

// View
export default () => {
  return (
    <View style={tw`bg-white`}>
      <UserCardHeader />
      <UserCardBody />
      <Divider />
      <UserCardFooter />
    </View>
  );
};
