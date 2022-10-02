/**
 * React native - Ejada Assignment
 *
 * Created By Ahmed Altomy
 */

// Libraries
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { enableFreeze, enableScreens } from 'react-native-screens';

// Views
import tw from 'twrnc';
import Root from 'Root';
import ProvidersRoot from 'context/ProvidersRoot';

// enable freeze and screens functions to optimize navigation
enableFreeze(true);
enableScreens(true);

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={tw`flex flex-1`}>
        <StatusBar barStyle={'light-content'} />
        <ProvidersRoot>
          <Root />
        </ProvidersRoot>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
