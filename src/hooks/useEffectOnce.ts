/*
 * useEffectOnce.ts
 * Created on Tue Jun 14 2022
 *
 * Copyright (c) 2022 Altomy Dev
 */

import { EffectCallback, useEffect } from 'react';

export const useEffectOnce = (effect: EffectCallback) => {
  useEffect(effect, [effect]);
};
