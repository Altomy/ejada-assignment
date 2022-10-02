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
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';

// View
const UserCard: React.FC<UserModule.RootObject> = props => {
  return (
    <Animated.View layout={Layout} entering={FadeIn} exiting={FadeOut}>
      <View style={tw`bg-white mt-2 mx-1 rounded-sm`}>
        <UserCardHeader image={props.picture.large} />
        <UserCardBody
          name={`${props.name.first} ${props.name.last}`}
          mail={props.email}
          birthday={new Date(props.dob.date).toUTCString()}
          phone={props.cell}
        />
        <Divider />
        <UserCardFooter />
      </View>
    </Animated.View>
  );
};

export default React.memo(UserCard);
