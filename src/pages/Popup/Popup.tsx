import React from 'react';
import SearchBar from './components/SearchBar';
import Toolbar from './components/Toolbar';
import RecipeDescription from './components/RecipeDescription';
import RecipeDetails from './components/RecipeDetails';
import AddRecipe from './components/AddRecipe';
import { useAtomValue } from 'jotai';
import { viewAtom } from './store';

const Popup = () => {
  const view = useAtomValue(viewAtom);

  return (
    <div className="w-full h-full bg-[#0D1119] p-6 overflow-auto">
      {view === 'recipe-details' ? (
        <>
          <SearchBar />
          <Toolbar />
          <RecipeDescription />
          <RecipeDetails />
        </>
      ) : (
        <AddRecipe />
      )}
    </div>
  );
};

export default Popup;
