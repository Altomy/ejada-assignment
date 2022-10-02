/*
 * useToggle.ts
 * Created on Tue Jun 14 2022
 *
 * Copyright (c) 2022 Altomy Dev
 */

import { useCallback, useState } from 'react';

/**
 * It returns a boolean and a function that toggles the boolean
 * @param [initialState=false] - The initial state of the toggle.
 * @returns A function that toggles the state.
 */
export function useToggle(initialState = false) {
  /* Destructuring the array returned by `useState` into two variables: `state` and `setState`. */
  const [state, setState] = useState<boolean>(initialState);

  /* A function that toggles the state. */
  const toggle = useCallback(() => {
    setState(oldValue => !oldValue);
  }, []);

  /* Returning an array with two elements: `state` and `toggle`. */
  return [state, toggle];
}
