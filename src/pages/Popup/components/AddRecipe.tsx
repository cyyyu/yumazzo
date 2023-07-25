import React from 'react';
import ArrowLeftIcon from '../../../assets/img/ArrowLeft.svg';
import { useSetAtom } from 'jotai';
import { viewAtom } from '../store';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';

export default function AddRecipe() {
  const setView = useSetAtom(viewAtom);

  return (
    <div>
      <header className="flex items-center mb-4">
        <button onClick={() => setView('recipe-details')}>
          <img
            src={ArrowLeftIcon}
            alt="Arrow Left"
            className="w-6 h-6 mr-2.5"
          />
        </button>
        <h1 className="text-white font-bold text-lg">Add Recipe</h1>
      </header>

      <hr className="mb-6 border-[#2e3347]" />

      <form>
        <div className="grid grid-cols-2 gap-2.5 mb-6">
          <Input label="Name" type="text" />
          <Select label="Origin" placeholder="Country origin" />
        </div>
        <div className="mb-6">
          <Textarea label="Description" />
        </div>
        <div className="grid grid-cols-2 gap-2.5 mb-6">
          <Select label="Difficulty" />
          <Input label="Protein" type="text" />
        </div>
        <div className="grid grid-cols-2 gap-2.5 mb-6">
          <Input label="Produce" type="text" />
          <Input label="Spice" type="text" />
        </div>
        <div className="grid grid-cols-2 gap-2.5 mb-6">
          <Input label="Cooking Oil?" type="text" />
          <Input label="Volume" type="number" surfix="grams" />
        </div>
        <div className="grid grid-cols-2 gap-2.5 mb-6">
          <Input label="Serves" type="number" surfix="people" />
          <Select label="Authenticity" />
        </div>
        <div className="mb-6">
          <Input label="Stock" type="text" />
        </div>
        <div>
          <button className="rounded-md w-full bg-[#764af4] px-[14px] py-2.5 text-white text-base font-semibold">
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
}
