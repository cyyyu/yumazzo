import React from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import {
  searchingValueAtom,
  searchResultAtom,
  selectedRecipeAtom,
  showMenuAtom,
} from '../store';
import { IRecipe } from '../type';
import SpainFlagIcon from '../../../assets/img/SpainFlag.svg';
import DifficultyHardIcon from '../../../assets/img/DifficultyHard.svg';
import DifficultyMediumIcon from '../../../assets/img/DifficultyMedium.svg';
import DifficultyEasyIcon from '../../../assets/img/DifficultyEasy.svg';
import { mapDifficulty } from '../utils';

export default function SearchMenu() {
  const showMenu = useAtomValue(showMenuAtom);
  const searchResult = useAtomValue(searchResultAtom);

  if (!showMenu || searchResult.length === 0) {
    return <></>;
  }

  return (
    <div className="w-full absolute bg-[#121826] text-white top-2.5 rounded-md p-2 shadow-[0px_10px_30px_3px_rgba(0,0,0,0.40)]">
      <div className="grid grid-cols-1 gap-y-[5px]">
        {searchResult.length > 0 &&
          searchResult.map((recipe, idx) => (
            <SearchResultItem key={idx} recipe={recipe} />
          ))}
      </div>
    </div>
  );
}

function SearchResultItem({ recipe }: { recipe: IRecipe }) {
  const setShowMenu = useSetAtom(showMenuAtom);
  const setSearchingValue = useSetAtom(searchingValueAtom);
  const setSelectedRecipe = useSetAtom(selectedRecipeAtom);

  return (
    <div
      className="p-2 flex items-center bg-[#181f30]"
      onClick={() => {
        setSearchingValue('');
        setShowMenu(false);
        setSelectedRecipe(async () => recipe);
      }}
    >
      <img src={SpainFlagIcon} className="w-6 mr-1.5" alt="Spain Flag" />
      <span className="text-base font-medium mr-auto">{recipe.name}</span>
      {recipe.difficulty === 1 && (
        <img src={DifficultyEasyIcon} className="w-3 mr-1.5" alt="Easy" />
      )}
      {recipe.difficulty === 2 && (
        <img src={DifficultyMediumIcon} className="w-3 mr-1.5" alt="Medium" />
      )}
      {recipe.difficulty === 3 && (
        <img src={DifficultyHardIcon} className="w-3 mr-1.5" alt="Hard" />
      )}
      <span className="text-sm font-bold mr-2.5">
        {mapDifficulty(recipe.difficulty)}
      </span>
      <span className="text-[#1f2a44] mr-2.5">|</span>
      <span className="text-[#aeb5c1] text-sm">{recipe.volume}min</span>
    </div>
  );
}