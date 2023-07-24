import React from 'react';
import SearchBar from './components/SearchBar';
import Toolbar from './components/Toolbar';
import RecipeDescription from './components/RecipeDescription';

const Popup = () => {
  return (
    <div className="w-full h-screen min-h-fit bg-[#0D1119] p-6">
      <SearchBar />
      <Toolbar />
      <RecipeDescription />
    </div>
  );
};

export default Popup;
