import { useAtomValue, useSetAtom } from "jotai"
import React from "react"

import MediumIcon from "../../assets/img/Medium.svg"
import SpainFlagIcon from "../../assets/img/SpainFlag.svg"
import TelegramIcon from "../../assets/img/Telegram.svg"
import TwitterIcon from "../../assets/img/Twitter.svg"
import { selectedRecipeAtom, viewAtom } from "../store"

export default function Toolbar() {
  return (
    <div className="text-white mb-6 flex items-center">
      <SelectedRecipe />
      <SocialMediaButtons />
      <AddRecipeButton />
    </div>
  )
}

function SelectedRecipe() {
  const selectedRecipe = useAtomValue(selectedRecipeAtom)
  return (
    <div className="text-white text-sm flex items-center">
      <img src={SpainFlagIcon} className="w-6 mr-2.5" alt="Spain Flag" />
      {selectedRecipe?.name || ""}
    </div>
  )
}

function SocialMediaButtons() {
  return (
    <>
      <button className="mr-2.5 rounded-full bg-[#171f2f] w-6 h-6 flex items-center justify-center ml-auto mr-[5px]">
        <img src={TwitterIcon} className="w-2.5 h-2.5" alt="Twitter" />
      </button>
      <button className="mr-2.5 rounded-full bg-[#171f2f] w-6 h-6 flex items-center justify-center mr-[5px]">
        <img src={TelegramIcon} className="w-2.5 h-2.5" alt="Twitter" />
      </button>
      <button className="mr-2.5 rounded-full bg-[#171f2f] w-6 h-6 flex items-center justify-center mr-[5px]">
        <img src={MediumIcon} className="w-2.5 h-2.5" alt="Twitter" />
      </button>
    </>
  )
}

function AddRecipeButton() {
  const setView = useSetAtom(viewAtom)

  return (
    <button
      className="rounded-md bg-[#171f2f] px-[7px] h-6 text-white text-sm"
      onClick={() => setView("add-recipe")}>
      + Add recipe
    </button>
  )
}
