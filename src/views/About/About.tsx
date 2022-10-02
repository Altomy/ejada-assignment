/**
 * About Component
 *
 */

// Libraries
import React from 'react';
import tw from 'twrnc';
// Components
import { Text } from 'react-native-paper';
import { ScrollView, View } from 'react-native';
import { AnimateMultiComponents, Base } from 'components';
import { customHooks, providers, usedLibrary } from './Data';

// View
export default () => {
  return (
    <Base>
      <View style={tw`flex-1 p-2`}>
        <ScrollView>
          <AnimateMultiComponents>
            <Text style={tw`font-bold mb-4`} variant="headlineSmall">
              React Native Code Assignment
            </Text>
            <Text variant="labelLarge" style={tw`mb-2 text-white font-bold`}>
              Ejada Assignment
            </Text>
            <Text variant="bodySmall" style={tw`text-white mb-4`}>
              Code must be uploaded to a public github repository & a working
              apk file must be produced and shared
            </Text>
            <Text variant="labelLarge" style={tw`mb-2 text-white font-bold`}>
              Used libraries
            </Text>
            <View style={tw`bg-white rounded-md shadow-md px-2 py-1`}>
              {usedLibrary.map((trg, index) => (
                <Text key={index}>{trg}</Text>
              ))}
            </View>
            <Text
              variant="labelLarge"
              style={tw`mb-2 mt-4 text-white font-bold`}>
              Custom hooks
            </Text>
            <View style={tw`bg-white rounded-md shadow-md px-2 py-1`}>
              {customHooks.map((trg, index) => (
                <Text key={index}>{trg}</Text>
              ))}
            </View>
            <Text
              variant="labelLarge"
              style={tw`mb-2 mt-4 text-white font-bold`}>
              Context
            </Text>
            <View style={tw`bg-white rounded-md shadow-md px-2 py-1`}>
              {providers.map((trg, index) => (
                <Text key={index}>{trg}</Text>
              ))}
            </View>
          </AnimateMultiComponents>
        </ScrollView>
      </View>
    </Base>
  );
};
