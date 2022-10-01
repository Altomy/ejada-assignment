import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

/* A function that takes a screen name and returns the navigation object for that screen. */
export default (screen: keyof RootStackTypes) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackTypes, typeof screen>>();

  return navigation;
};
