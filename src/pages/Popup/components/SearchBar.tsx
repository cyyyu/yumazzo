import React from 'react';
import SearchIcon from '../../../assets/img/Search.png';

export default function SearchBar() {
  return (
    <div className="w-full py-[8px] px-[11px] rounded-md bg-[#131823] flex shadow-[0px_0px_0px_1px_#5b6178] mb-6">
      <img src={SearchIcon} className="w-5 h-5 mr-2.5" />
      <input
        type="text"
        placeholder="Search cuisine"
        className="text-white bg-[#131823] outline-none grow"
      />
    </div>
  );
}
