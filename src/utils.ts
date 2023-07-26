import type { IRecipe } from "./type";

export function mapDifficulty(difficulty: number): string {
  switch (difficulty) {
    case 1:
      return "Easy";
    case 2:
      return "Medium";
    case 3:
      return "Hard";
    default:
      return "Unknown";
  }
}

export function validateRecipe(recipe: IRecipe) {
  // Simple validator
  // Make sure everything is filled
  if (
    !recipe.name ||
    !recipe.origin ||
    !recipe.description ||
    !recipe.produce ||
    !recipe.spice ||
    !recipe.cookingOil ||
    !recipe.authenticity ||
    !recipe.stock
  )
    return false;
  return true;
}
