/**
 * UserCardHeader Component
 *
 */

// Libraries
import React from 'react';
import tw from 'twrnc';
// Components
import { Avatar } from 'react-native-paper';
import { Pressable, StyleSheet, View } from 'react-native';
import useImageChanger from './../../hooks/useImageChanger';

type propsTypes = {
  image: string;
};

// View
export default ({ image }: propsTypes) => {
  const { selectNewImage, findLocalImage } = useImageChanger(image);
  const [localImage, setLocalImage] = React.useState<string | null>(null);

  // Check if the use image change has local image with correct image
  React.useEffect(() => {
    (async () => {
      const value = await findLocalImage();
      if (value) {
        setLocalImage(value.path);
      }
    })();
  }, [findLocalImage]);
  return (
    <View style={tw`flex items-center justify-center bg-blue-300`}>
      <Pressable
        onPress={() => {
          selectNewImage(path => {
            setLocalImage(path);
          });
        }}
        style={[tw`border-white border-2 rounded-full`, styles.image]}>
        <Avatar.Image size={80} source={{ uri: localImage ?? image }} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    transform: [{ translateY: 40 }],
  },
});
