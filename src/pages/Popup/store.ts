import { atom } from 'jotai';
import { loadable } from 'jotai/utils';
import { getRecipes } from './api';
import { IRecipe, View } from './type';

export const viewAtom = atom<View>('recipe-details');

export const recipesAtom = loadable(
  atom<Promise<IRecipe[]>>(async () => {
    return getRecipes().then((res) => res.message);
  })
);

export const selectedRecipeAtom = atom<IRecipe | undefined>((get) => {
  const recipesAtomValue = get(recipesAtom);
  if (
    recipesAtomValue.state !== 'hasData' ||
    recipesAtomValue.data.length === 0
  ) {
    return undefined;
  }
  return recipesAtomValue.data[0];
});
