import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Loading } from 'views';
import { BottomTab } from './BottomTab';

const Stack = createNativeStackNavigator<RootStackTypes>();
export const Tab = createBottomTabNavigator<BottomTabNavigationTypes>();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="BottomTab">
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
