import type { IRecipe } from "./type"

const ENTRY_URL = "https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site"

export async function getRecipes() {
  return await fetch(`${ENTRY_URL}/yumazoo/recipes`)
    .then((res) => res.json())
    .catch(generalErrorHandler)
}

export async function addRecipe(recipe: IRecipe) {
  return await fetch(`${ENTRY_URL}/yumazoo/recipes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(recipe)
  })
    .then((res) => res.json())
    .catch(generalErrorHandler)
}

function generalErrorHandler(error: any) {
  // Simply log the error
  console.log(error)
}
