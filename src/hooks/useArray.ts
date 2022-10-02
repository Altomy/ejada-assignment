/*
 * useArray.ts
 * Created on Tue Jun 14 2022
 *
 * Copyright (c) 2022 Altomy Dev
 */

import { useCallback, useState } from 'react';

/**
 * TODO: Set new actions
 * TODO: ~1 removeById
 * TODO: ~2 findById
 *
 * try to set new functions
 */

type ActionsType<T> = {
  set: (data: T[]) => void;
  append: (data: T) => void;
  reset: () => void;
  appendArray: (newArray: T[]) => void;
};

/**
 * It's a hook that returns an array and an object of functions that allow you to manipulate the array
 * @param {T[]} initialState - The initial state of the array.
 * @returns An array with two elements. The first element is the state, the second element is an object
 * with all the actions.
 */
export function useArray<T>(
  initialState: T[],
): [state: T[], actions: ActionsType<T>] {
  /* It's a hook that returns an array and an object of functions that allow you to manipulate the
  array */
  const [state, setState] = useState<T[]>(initialState);

  /* It's a hook that returns an array and an object of functions that allow you to manipulate the array */
  const actions: ActionsType<T> = {
    set: useCallback((data: T[]) => {
      setState(data);
    }, []),

    append: useCallback(
      (data: T) => {
        setState([...state, data]);
      },
      [state],
    ),

    reset: useCallback(() => {
      setState([]);
    }, []),
    appendArray: useCallback(
      (newArray: T[]) => {
        setState([...state, ...newArray]);
      },
      [state],
    ),
  };

  /* It's returning an array with two elements. The first element is the state, the second element is an
 object with all the actions. */
  return [state, actions];
}
