import React from 'react';
import SearchIcon from '../../../assets/img/Search.png';
import { searchingValueAtom, showMenuAtom } from '../store';
import { useSetAtom } from 'jotai';

export default function SearchBar() {
  const setShowMenu = useSetAtom(showMenuAtom);
  const setSearchingValue = useSetAtom(searchingValueAtom);

  return (
    <div className="w-full py-[8px] px-[11px] rounded-md bg-[#131823] flex shadow-[0px_0px_0px_1px_#5b6178] relative">
      <img src={SearchIcon} alt="Search" className="w-5 h-5 mr-2.5" />
      <input
        type="text"
        placeholder="Search cuisine"
        className="text-white bg-[#131823] outline-none grow"
        onChange={(e) => setSearchingValue(e.target.value)}
        onFocus={() => {
          setShowMenu(true);
        }}
        onBlur={() => {
          setShowMenu(false);
        }}
      />
    </div>
  );
}
