import { atom } from "jotai";
import { atomWithDefault } from "jotai/utils";

import { getRecipes } from "./api";
import type { IRecipe, View } from "./type";

export const viewAtom = atom<View>("recipe-details");

export const recipesAtom = atomWithDefault<Promise<IRecipe[]>>(async () => {
  const res = await getRecipes();
  return res.message;
});

export const selectedRecipeAtom = atomWithDefault(async (get) => {
  const recipes = await get(recipesAtom);
  return recipes[0];
});

export const newRecipeAtom = atom<IRecipe>({
  name: "",
  origin: "",
  description: "",
  difficulty: 1,
  protein: "",
  produce: "",
  spice: "",
  cookingOil: "",
  volume: 0,
  serves: 0,
  authenticity: "Unverified",
  stock: "",
});
export const clearNewRecipeAtom = atom(null, (_get, set) => {
  set(newRecipeAtom, {
    name: "",
    origin: "",
    description: "",
    difficulty: 1,
    protein: "",
    produce: "",
    spice: "",
    cookingOil: "",
    volume: 0,
    serves: 0,
    authenticity: "Unverified",
    stock: "",
  });
});

export const showMenuAtom = atom(false);
export const searchingValueAtom = atom("");
export const searchResultAtom = atom(async (get) => {
  if (!get(searchingValueAtom)) return [];
  const recipes = await get(recipesAtom);
  return recipes
    .filter((recipe) =>
      recipe.name.toLowerCase().includes(get(searchingValueAtom).toLowerCase())
    )
    .slice(0, 3);
});
