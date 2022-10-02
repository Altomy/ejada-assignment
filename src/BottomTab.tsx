import React from 'react';
import { Home } from 'views';
import About from 'views/About/About';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { Tab } from './Root';

export function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon(props) {
            return <IonIcons name="home" {...props} />;
          },
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon(props) {
            return <IonIcons name="information-circle" {...props} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
