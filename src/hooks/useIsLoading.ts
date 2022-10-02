/*
 * useIsLoading.ts
 * Created on Tue Jun 14 2022
 *
 * Copyright (c) 2022 Altomy Dev
 */

import { useCallback, useState } from 'react';

/**
 * It returns an object with three functions and a boolean
 * @param [initialState=false] - The initial state of the isLoading variable.
 * @returns An object with the following properties:
 * - isLoading: boolean
 * - startIsLoading: function
 * - stopIsLoading: function
 * - toggleIsLoading: function
 */
export function useIsLoading(initialState = false) {
  /* Destructuring the array returned by `useState` and assigning the first element to `isLoading` and
  the second element to `setIsLoading`. */
  const [isLoading, setIsLoading] = useState<boolean>(initialState);

  /* A React hook that returns a memoized version of the callback function that only changes if one of
  the dependencies has changed. This is useful when passing callbacks to optimized child components
  that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate). */
  const startIsLoading = useCallback(() => {
    /* Setting the value of `isLoading` to `true`. */
    setIsLoading(true);
  }, []);

  /* A React hook that returns a memoized version of the callback function that only changes if one of
  the dependencies has changed. This is useful when passing callbacks to optimized child components
  that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate). */
  const stopIsLoading = useCallback(() => {
    /* Setting the value of `isLoading` to `false`. */
    setIsLoading(false);
  }, []);

  /* A React hook that returns a memoized version of the callback function that only changes if one of
   the dependencies has changed. This is useful when passing callbacks to optimized child components
   that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate). */
  const toggleIsLoading = useCallback(() => {
    /* Using the previous value of `isLoading` to set the new value of `isLoading`. */
    setIsLoading(oldValue => !oldValue);
  }, []);

  /* Returning an object with the following properties:
 - isLoading: boolean
 - startIsLoading: function
 - stopIsLoading: function
 - toggleIsLoading: function */
  return {
    isLoading,
    startIsLoading,
    stopIsLoading,
    toggleIsLoading,
  };
}
