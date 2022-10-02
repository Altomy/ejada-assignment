/**
 * Header Component
 *
 */

// Libraries
import React, { useRef } from 'react';
import tw from 'twrnc';
// Components
import { IconButton, Searchbar } from 'react-native-paper';
import { useWindowDimensions, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import useDebounce from 'hooks/useDebounce';
import { useContacts } from 'context/ContactsProvider';
import { useUpdateEffect } from 'hooks/useUpdateEffect';
// View
export default () => {
  // Globals
  const { width } = useWindowDimensions();
  const values = useSharedValue(width);
  const { findContacts } = useContacts();

  // search terms
  const searchRef = useRef<any>(undefined);
  const [searchQuery, setSearchQuery] = React.useState('');
  const debouncedSearchTerm = useDebounce(searchQuery, 1000);
  const onChangeSearch = (text: string) => {
    setSearchQuery(text);
  };

  useUpdateEffect(() => {
    findContacts(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  // animation functions
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: values.value * -1 }],
    };
  });

  const toggleSearchBar = () => {
    'worklet';
    if (values.value === width) {
      values.value = withTiming(0);
      // setTimeout(() => {
      //   searchRef.current.focus();
      // }, 300);
      return;
    }
    values.value = withTiming(width);
  };
  return (
    <View>
      <View style={tw`flex flex-row justify-between items-center`}>
        <IconButton icon="menu" size={30} />
        <IconButton
          icon="account-search"
          onPress={() => {
            toggleSearchBar();
            setTimeout(() => {
              searchRef.current.focus();
            }, 300);
          }}
          size={30}
        />
      </View>
      <Animated.View style={[[animatedStyles], tw`p-1  `]}>
        <Searchbar
          ref={searchRef}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </Animated.View>
    </View>
  );
};
