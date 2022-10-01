/**
 * React native - Ejada Assignment
 *
 * Created By Ahmed Altomy
 */

// Libraries
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import tw from 'twrnc';
// Views
import Root from 'Root';

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={tw`flex flex-1`}>
        <StatusBar barStyle={'light-content'} />
        <Root />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
