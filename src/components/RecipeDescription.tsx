import { useAtomValue } from "jotai"
import React from "react"

import PaellaIcon from "../../assets/img/Paella.svg"
import { selectedRecipeAtom } from "../store"
import { mapDifficulty } from "../utils"

export default function RecipeDescription() {
  const selectedRecipe = useAtomValue(selectedRecipeAtom)
  return (
    <div className="rounded-md bg-[#131823] mb-6 p-2.5">
      <div className="rounded-md bg-[#17cfc4] text-black px-5 py-2.5">
        <div className="flex mb-4 items-center font-bold text-lg">
          <img src={PaellaIcon} className="w-8 h-8 mr-5" alt="Paella" />
          Difficulty: {mapDifficulty(selectedRecipe?.difficulty || 0)}
        </div>
        <p className="text-lg">{selectedRecipe?.description}</p>
      </div>
    </div>
  )
}
