/**
 * Home Component
 *
 */

// Libraries
import React from 'react';
import tw from 'twrnc';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';
// Components
import { ScrollView, View } from 'react-native';
import { ErrorHandler, Loader, UserCard } from 'components';
import { useReadQuery } from 'hooks/useFetch';
import { useContacts } from 'context/ContactsProvider';

// View
export default () => {
  const { data, isLoading, isError } = useReadQuery<{
    results: UserModule.RootObject[];
  }>('/?results=10');

  // use the contacts provider
  const { saveContacts, Contacts } = useContacts();
  const { contacts } = Contacts;

  React.useEffect(() => {
    if (data) {
      saveContacts(data.results);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (isLoading) {
    return (
      <View style={tw`flex-1`}>
        <Loader />
      </View>
    );
  }

  if (isError) {
    <View style={tw`flex-1`}>
      <ErrorHandler />
    </View>;
  }

  if (contacts.length !== 0) {
    return (
      <View style={tw`flex-1`}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {contacts.map((user, index) => (
            <Animated.View
              layout={Layout}
              entering={FadeIn.delay(200 * index)}
              exiting={FadeOut}
              key={user.login.uuid}>
              <UserCard {...user} />
            </Animated.View>
          ))}
        </ScrollView>
      </View>
    );
  }
  return null;
};
