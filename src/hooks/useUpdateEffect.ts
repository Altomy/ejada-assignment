/*
 * useUpdateEffect.ts
 * Created on Tue Jun 14 2022
 *
 * Copyright (c) 2022 Altomy Dev
 */

import { useEffect } from 'react';
import { useFirstMountState } from './useFirstMountState';

export const useUpdateEffect: typeof useEffect = (effect, deps) => {
  const isFirstMount = useFirstMountState();

  useEffect(() => {
    if (!isFirstMount) {
      return effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
