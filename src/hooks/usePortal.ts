/*
 * usePortal.ts
 * Created on Tue Jun 14 2022
 *
 * Copyright (c) 2022 Altomy Dev
 */

import { useState, useCallback } from 'react';

/**
 * It returns an object with a boolean value, and four functions to manipulate that value
 * @param {boolean} [initialState=false] - boolean = false
 * @returns An object with the following properties:
 * - isOpen: boolean
 * - open: function
 * - close: function
 * - set: function
 * - toggle: function
 */
export function usePortal(initialState: boolean = false) {
  /* Destructuring the return value of `useState` into two variables: `isOpen` and `setIsOpen`. */
  const [isOpen, setIsOpen] = useState(initialState);

  /* A React hook that returns a memoized version of the callback function that only changes if one of
 the dependencies has changed. This is useful when passing callbacks to optimized child components
 that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate). */
  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  /* A React hook that returns a memoized version of the callback function that only changes if one of
  the dependencies has changed. This is useful when passing callbacks to optimized child components
  that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate). */
  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  /* A React hook that returns a memoized version of the callback function that only changes if one of
    the dependencies has changed. This is useful when passing callbacks to optimized child
  components
    that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate). */
  const set = useCallback((state: boolean) => {
    setIsOpen(state);
  }, []);

  /* A React hook that returns a memoized version of the callback function that only changes if one of
  the dependencies has changed. This is useful when passing callbacks to optimized child components
  that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate). */
  const toggle = useCallback(() => {
    setIsOpen(oldValue => !oldValue);
  }, []);

  /* Returning an object with the following properties:
- isOpen: boolean
- open: function
- close: function
- set: function
- toggle: function */
  return {
    isOpen,
    open,
    close,
    set,
    toggle,
  };
}
