import React from 'react';
import PaellaIcon from '../../../assets/img/Paella.svg';

export default function RecipeDescription() {
  return (
    <div className="rounded-md bg-[#131823] mb-6 p-2.5">
      <div className="rounded-md bg-[#17cfc4] text-black px-5 py-2.5">
        <div className="flex mb-4 items-center font-bold text-lg">
          <img src={PaellaIcon} className="w-8 h-8 mr-5" alt="Paella" />
          Difficulty: Medium
        </div>
        <p className="text-lg">
          Spanish paella is a traditional rice dish that originated in the
          Valencia region of Spain. It was originally made with ingredients such
          as saffron, rabbit, and snails, which were common in the area.
        </p>
      </div>
    </div>
  );
}
