/**
 * UserCardHeader Component
 *
 */

// Libraries
import React from 'react';
import tw from 'twrnc';
// Components
import { Avatar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import assets from 'assets';

// View
export default () => {
  return (
    <View style={tw`flex items-center justify-center bg-blue-300`}>
      <View style={[tw`border-white border-2 rounded-full`, styles.image]}>
        <Avatar.Image size={80} source={assets.bg.loading} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    transform: [{ translateY: 40 }],
  },
});
