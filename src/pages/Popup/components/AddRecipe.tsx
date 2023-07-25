import React from 'react';
import ArrowLeftIcon from '../../../assets/img/ArrowLeft.svg';
import { useSetAtom } from 'jotai';
import { viewAtom } from '../store';

export default function AddRecipe() {
  const setView = useSetAtom(viewAtom);

  return (
    <div>
      <header className="flex items-center mb-2.5">
        <button onClick={() => setView('recipe-details')}>
          <img
            src={ArrowLeftIcon}
            alt="Arrow Left"
            className="w-6 h-6 mr-2.5"
          />
        </button>
        <h1 className="text-white font-bold text-lg">Add Recipe</h1>
      </header>

      <hr className="mb-2.5 border-[#2e3347]" />

      <form></form>
    </div>
  );
}
