import { useAtomValue, useSetAtom } from "jotai";
import React from "react";

import ArrowLeftIcon from "../../assets/img/ArrowLeft.svg";
import { addRecipe } from "../api";
import { useFocusAtom } from "../hooks/useFocusAtom";
import {
  clearNewRecipeAtom,
  newRecipeAtom,
  recipesAtom,
  selectedRecipeAtom,
  viewAtom,
} from "../store";
import { validateRecipe } from "../utils";
import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";

export default function AddRecipe() {
  const setView = useSetAtom(viewAtom);

  const setRecipes = useSetAtom(recipesAtom);
  const newRecipe = useAtomValue(newRecipeAtom);
  const setSelectedRecipe = useSetAtom(selectedRecipeAtom);
  const clearNewRecipe = useSetAtom(clearNewRecipeAtom);

  const setName = useFocusAtom(newRecipeAtom, "name");
  const setOrigin = useFocusAtom(newRecipeAtom, "origin");
  const setDescription = useFocusAtom(newRecipeAtom, "description");
  const setDifficulty = useFocusAtom(newRecipeAtom, "difficulty");
  const setProtein = useFocusAtom(newRecipeAtom, "protein");
  const setProduce = useFocusAtom(newRecipeAtom, "produce");
  const setSpice = useFocusAtom(newRecipeAtom, "spice");
  const setCookingOil = useFocusAtom(newRecipeAtom, "cookingOil");
  const setVolume = useFocusAtom(newRecipeAtom, "volume");
  const setServes = useFocusAtom(newRecipeAtom, "serves");
  const setAuthenticity = useFocusAtom(newRecipeAtom, "authenticity");
  const setStock = useFocusAtom(newRecipeAtom, "stock");

  const onAddRecipe = () => {
    addRecipe(newRecipe).then(() => {
      if (validateRecipe(newRecipe)) {
        setRecipes(async (recipes) => {
          return [...(await recipes), newRecipe];
        });
        setSelectedRecipe(async () => newRecipe);
        setView("recipe-details");
        clearNewRecipe();
      } else {
        alert("Please fill all fields.");
      }
    });
  };

  return (
    <div>
      <header className="flex items-center mb-4">
        <button onClick={() => setView("recipe-details")}>
          <img
            src={ArrowLeftIcon}
            alt="Arrow Left"
            className="w-6 h-6 mr-2.5"
          />
        </button>
        <h1 className="text-white font-bold text-lg">Add Recipe</h1>
      </header>

      <hr className="mb-6 border-[#2e3347]" />

      <div className="grid grid-cols-2 gap-2.5 mb-6">
        <Input
          label="Name"
          type="text"
          value={newRecipe?.name}
          onChange={(e) => setName(e.target.value)}
        />
        <Select
          label="Origin"
          placeholder="Country origin"
          defaultValue={newRecipe?.origin}
          options={[
            { label: "Afghanistan", value: "af" },
            { label: "Albania", value: "al" },
            { label: "Algeria", value: "dz" },
            { label: "Andorra", value: "ad" },
            { label: "Angola", value: "ao" },
          ]}
          onChange={(e) => setOrigin(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <Textarea
          label="Description"
          value={newRecipe?.description}
          placeholder="Describe your recipe..."
          onChange={(e) => setDescription(e.target.value)}
          maxLength={200}
        />
      </div>
      <div className="grid grid-cols-2 gap-2.5 mb-6">
        <Select
          label="Difficulty"
          defaultValue={newRecipe?.difficulty}
          options={[
            { label: "Easy", value: 1 },
            { label: "Medium", value: 2 },
            { label: "Hard", value: 3 },
          ]}
          onChange={(e) => setDifficulty(e.target.value)}
        />
        <Input
          label="Protein"
          type="text"
          value={newRecipe?.protein}
          onChange={(e) => setProtein(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2.5 mb-6">
        <Input
          label="Produce"
          type="text"
          value={newRecipe?.produce}
          onChange={(e) => setProduce(e.target.value)}
        />
        <Input
          label="Spice"
          type="text"
          value={newRecipe?.spice}
          onChange={(e) => setSpice(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2.5 mb-6">
        <Input
          label="Cooking Oil?"
          type="text"
          value={newRecipe?.cookingOil}
          onChange={(e) => setCookingOil(e.target.value)}
        />
        <Input
          label="Volume"
          type="number"
          surfix="grams"
          value={newRecipe?.volume}
          onChange={(e) => setVolume(parseInt(e.target.value, 10))}
        />
      </div>
      <div className="grid grid-cols-2 gap-2.5 mb-6">
        <Input
          label="Serves"
          type="number"
          surfix="people"
          value={newRecipe?.serves}
          onChange={(e) => setServes(parseInt(e.target.value, 10))}
        />
        <Select
          label="Authenticity"
          defaultValue={newRecipe?.authenticity}
          options={[
            { label: "Unverified", value: "Unverified" },
            { label: "Verified", value: "Verified" },
          ]}
          onChange={(e) => setAuthenticity(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <Input
          label="Stock"
          type="text"
          value={newRecipe?.stock}
          onChange={(e) => setStock(e.target.value)}
        />
      </div>
      <div>
        <button
          className="rounded-md w-full bg-[#764af4] px-[14px] py-2.5 text-white text-base font-semibold"
          onClick={onAddRecipe}
        >
          Add Recipe
        </button>
      </div>
    </div>
  );
}
