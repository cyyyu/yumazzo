import React from 'react';
import SearchBar from './components/SearchBar';
import Toolbar from './components/Toolbar';

const Popup = () => {
  return (
    <div className="w-full h-screen min-h-fit bg-[#0D1119] p-6">
      <SearchBar />
      <Toolbar />
    </div>
  );
};

export default Popup;
