/* eslint-disable eqeqeq */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateType } from 'hooks/useStorageOrmsTypes';
import uuid from 'react-native-uuid';

const uuidv4 = uuid.v4;

import {
  getAllValuesType,
  removeModelType,
  useStorageOrmType,
  createModelType,
  removeValueType,
  findValueType,
  updateValueType,
  createValueType,
  whereAllValuesType,
} from './useStorageOrmsTypes';

const createModel: createModelType = async modelName => {
  try {
    const model = await AsyncStorage.getItem(modelName);
    if (model) {
      return 'hasModel';
    }

    await AsyncStorage.setItem(modelName, '[]');
    return 'success';
  } catch (error) {
    return 'error';
  }
};

const removeModel: removeModelType = async modelName => {
  try {
    const model = await AsyncStorage.getItem(modelName);
    if (!model) {
      return 'success';
    }

    await AsyncStorage.removeItem(modelName);
    return 'success';
  } catch (error) {
    return 'error';
  }
};

const createValue: createValueType = async (value, modelName) => {
  try {
    // Check model Values
    const modelValues = await AsyncStorage.getItem(modelName);
    if (!modelValues) {
      // if has error and not found model
      return undefined;
    }

    // get Values with type of value array
    const values: typeof value[] = JSON.parse(modelValues);

    // getID To next prop
    const ID: string | any = uuidv4();

    // setUp the ID To Value
    const newValue = { ...value, ID, CreatedAt: new Date() };

    // pushValues
    values.push(newValue);

    await AsyncStorage.setItem(modelName, JSON.stringify(values));

    return newValue;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const getAllValues: getAllValuesType = async modelName => {
  try {
    const modelValues = await AsyncStorage.getItem(modelName);
    if (!modelValues) {
      return undefined;
    }

    const values = JSON.parse(modelValues);

    return values;
  } catch (error) {
    return undefined;
  }
};

const whereAllValues: whereAllValuesType = async (modelName, where) => {
  try {
    const modelValues = await AsyncStorage.getItem(modelName);
    if (!modelValues) {
      return undefined;
    }

    const values: any[] = JSON.parse(modelValues);

    const correctValues = values.filter(
      _value => _value[where.key] == where.value,
    );

    return correctValues;
  } catch (error) {
    return undefined;
  }
};

const findValue: findValueType = async (modelName, where) => {
  try {
    const modelValues = await AsyncStorage.getItem(modelName);
    if (!modelValues) {
      return undefined;
    }

    const values: any[] = JSON.parse(modelValues);

    const value = values.find(_value => _value[where.key] == where.value);

    return value;
  } catch (error) {
    return undefined;
  }
};

const updateValues: updateValueType = async (modelName, where, toUpdate) => {
  try {
    const modelValues = await AsyncStorage.getItem(modelName);
    if (!modelValues) {
      return undefined;
    }

    const values: any[] = JSON.parse(modelValues);

    const value = values.find(_value => _value[where.key] == where.value);

    toUpdate.forEach(_toUpdate => {
      value[_toUpdate.key] = _toUpdate.value;
    });

    const valueIndex = values.findIndex(
      _value => _value[where.key] == where.value,
    );
    values[valueIndex] = value;

    await AsyncStorage.setItem(modelName, JSON.stringify(values));

    return value;
  } catch (error) {
    return undefined;
  }
};

const removeValue: removeValueType = async (modelName, where) => {
  try {
    const modelValues = await AsyncStorage.getItem(modelName);
    if (!modelValues) {
      return undefined;
    }

    const values: any[] = JSON.parse(modelValues);

    const valueIndex = values.findIndex(
      _value => _value[where.key] == where.value,
    );

    values.splice(valueIndex, 1);
    await AsyncStorage.setItem(modelName, JSON.stringify(values));

    return values;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const update: updateType = async (
  modelName,
  where,
  newValue,
  createOnFail = true,
) => {
  try {
    const modelValues = await AsyncStorage.getItem(modelName);
    if (!modelValues) {
      return undefined;
    }

    const values: any[] = JSON.parse(modelValues);

    const valueIndex = values.findIndex(
      _value => _value[where.key] == where.value,
    );

    if (valueIndex == -1) {
      if (createOnFail) {
        newValue = { ...newValue, ID: uuidv4() };
        values.push(newValue);
      }
    } else {
      values[valueIndex] = newValue;
    }

    await AsyncStorage.setItem(modelName, JSON.stringify(values));

    return { ...newValue };
  } catch (error) {
    return undefined;
  }
};

const useStorageOrms: useStorageOrmType = () => ({
  createModel,
  removeModel,
  createValue,
  getAllValues,
  whereAllValues,
  findValue,
  updateValues,
  removeValue,
  update,
});

export default useStorageOrms;
