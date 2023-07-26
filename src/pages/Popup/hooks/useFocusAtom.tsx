import { PrimitiveAtom, useSetAtom } from 'jotai';
import { focusAtom } from 'jotai-optics';
import { useCallback } from 'react';
import type { OpticFor } from 'optics-ts';
import { IRecipe } from '../type';

export const useFocusAtom = (
  anAtom: PrimitiveAtom<IRecipe>,
  key: keyof IRecipe
) => {
  return useSetAtom(
    focusAtom(
      anAtom,
      useCallback((optic: OpticFor<IRecipe>) => optic.prop(key), [key])
    )
  );
};
