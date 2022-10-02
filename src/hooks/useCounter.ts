/*
 * useCounter.ts
 * Created on Tue Jun 14 2022
 *
 * Copyright (c) 2022 Altomy Dev
 */

import { useState, useCallback } from 'react';

/**
 * TODO: To do things
 * TODO: ~1 Set min & max
 * TODO: ~2 Set on get min method
 * TODO: ~3 Set on get max method
 */

type ActionsType = {
  set: (_count: any) => void;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

/**
 * It returns a count and an object of actions that can be used to manipulate the count
 * @param [initState=0] - The initial state of the counter.
 * @returns An array with two elements. The first element is the count, the second element is an object
 * with four functions.
 */
export function useCounter(
  initState = 0,
): [count: number, actions: ActionsType] {
  /* Destructuring the array returned by `useState` into two variables: `count` and `setCount`. */
  const [count, setCount] = useState(initState);

  /* Creating an object with four functions. */
  const actions = {
    set: useCallback((_count: number) => {
      setCount(_count);
    }, []),
    increment: useCallback(() => {
      setCount(oldCount => oldCount++);
    }, []),
    decrement: useCallback(() => {
      setCount(oldCount => oldCount--);
    }, []),
    reset: useCallback(() => {
      setCount(initState);
    }, [initState]),
  };

  /* Returning an array with two elements. The first element is the count, the second element is an
 object with four functions. */
  return [count, actions];
}
