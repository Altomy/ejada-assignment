/**
 * Home Component
 *
 */

// Libraries
import React from 'react';
import tw from 'twrnc';
// Components
import { View } from 'react-native';
import { Base } from 'components';
import { Controller, Header } from './components';

// View
export default () => {
  return (
    <Base>
      <View style={tw`flex-1`}>
        <Header />
        <Controller />
      </View>
    </Base>
  );
};
