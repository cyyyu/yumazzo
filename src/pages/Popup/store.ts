import { atom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';
import { getRecipes } from './api';
import { IRecipe, View } from './type';

export const viewAtom = atom<View>('add-recipe');

export const recipesAtom = atomWithDefault<Promise<IRecipe[]>>(async () => {
  const res = await getRecipes();
  return res.message;
});
export const recipesLenAtom = atom(async (get) => {
  const recipes = await get(recipesAtom);
  return recipes.length;
});

export const selectedRecipeIdxAtom = atom<number>(0);
export const selectedRecipeAtom = atom(
  async (get) => {
    const recipes = await get(recipesAtom);
    return recipes[get(selectedRecipeIdxAtom)];
  },
  (_, set, newValue: IRecipe) => {
    set(selectedRecipeAtom, newValue);
  }
);

export const newRecipeAtom = atom<IRecipe>({
  name: '',
  origin: '',
  description: '',
  difficulty: 1,
  protein: '',
  produce: '',
  spice: '',
  cookingOil: '',
  volume: 0,
  serves: 0,
  authenticity: 'Unverified',
  stock: '',
});
