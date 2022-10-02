import ImagePicker from 'react-native-image-crop-picker';
import useStorageOrms from './useStorageOrms';

type UseImageChangeProps = (uuid: string) => {
  selectNewImage: (callBack: (path: string) => void) => void;
  getAllLocalImages: () => Promise<
    | {
        ID: any;
        uuid: string;
        path: string;
      }[]
    | undefined
  >;
  findLocalImage: () => Promise<
    | {
        ID: any;
        uuid: string;
        path: string;
      }
    | undefined
  >;
};

const useImageChanger: UseImageChangeProps = (uuid: string) => {
  // Get storages functions
  const { createValue, getAllValues, findValue } = useStorageOrms();

  // Save the image to local storage with
  const saveToLocalStorage = (path: string) => {
    const data = {
      uuid,
      path,
    };
    createValue(data, 'LocalImages');
  };

  // get all local images
  const getAllLocalImages = async () => {
    const values = await getAllValues<{ ID: any; uuid: string; path: string }>(
      'LocalImages',
    );
    return values;
  };

  // Find local image
  const findLocalImage = async () => {
    const value = await findValue<{ ID: any; uuid: string; path: string }>(
      'LocalImages',
      {
        key: 'uuid',
        value: uuid,
      },
    );
    return value;
  };

  // Select New image
  const selectNewImage = (callBack: (path: string) => void) => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      saveToLocalStorage(image.path);
      callBack(image.path);
    });
  };

  return {
    selectNewImage,
    getAllLocalImages,
    findLocalImage,
  };
};

export default useImageChanger;
