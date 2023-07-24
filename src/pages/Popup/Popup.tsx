import React from 'react';
import SearchBar from './components/SearchBar';
import Toolbar from './components/Toolbar';
import RecipeDescription from './components/RecipeDescription';
import RecipeDetails from './components/RecipeDetails';

const Popup = () => {
  return (
    <div className="w-full h-full bg-[#0D1119] p-6 overflow-auto">
      <SearchBar />
      <Toolbar />
      <RecipeDescription />
      <RecipeDetails />
    </div>
  );
};

export default Popup;
