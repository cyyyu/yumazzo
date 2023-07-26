import React from 'react';
import SearchBar from './components/SearchBar';
import Toolbar from './components/Toolbar';
import RecipeDescription from './components/RecipeDescription';
import RecipeDetails from './components/RecipeDetails';
import AddRecipe from './components/AddRecipe';
import SearchMenu from './components/SearchMenu';
import { useAtomValue, useSetAtom } from 'jotai';
import { showMenuAtom, viewAtom } from './store';

const Popup = () => {
  const view = useAtomValue(viewAtom);
  const setShowMenu = useSetAtom(showMenuAtom);

  return (
    <div
      className="w-full h-full bg-[#0D1119] p-6 overflow-auto"
      onClick={() => setShowMenu(false)}
    >
      {view === 'recipe-details' ? (
        <>
          <SearchBar />
          <div className="pt-6 relative w-full">
            <SearchMenu />
            <Toolbar />
            <RecipeDescription />
            <RecipeDetails />
          </div>
        </>
      ) : (
        <AddRecipe />
      )}
    </div>
  );
};

export default Popup;
