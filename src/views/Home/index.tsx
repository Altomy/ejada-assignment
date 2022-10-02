/**
 * Home Component
 *
 */

// Libraries
import React from 'react';
import tw from 'twrnc';
// Components
import { View } from 'react-native';
import { Base, UserCard } from 'components';
import { Header } from './components';

// View
export default () => {
  return (
    <Base>
      <View style={tw`flex-1`}>
        <Header />
        <UserCard />
      </View>
    </Base>
  );
};
