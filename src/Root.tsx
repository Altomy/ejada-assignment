import React from 'react';
import {View, Text} from 'react-native';
import tw from 'twrnc';
import {Loading} from 'views';

export default () => {
  const [isLoading] = React.useState(true);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <View style={[tw`flex flex-1 bg-blue-400 justify-center items-center`]}>
      <Text>Root</Text>
    </View>
  );
};
