import React from 'react';
import TwitterIcon from '../../../assets/img/Twitter.svg';
import TelegramIcon from '../../../assets/img/Telegram.svg';
import MediumIcon from '../../../assets/img/Medium.svg';

export default function Toolbar() {
  return (
    <div className="text-white mb-6 flex items-center">
      <SelectedRecipe />
      <SocialMediaButtons />
      <AddRecipeButton />
    </div>
  );
}

const flags = {
  spain: '🇪🇸',
};

function SelectedRecipe() {
  return (
    <div className="text-white text-sm">
      <span className="mr-2.5">{flags['spain']}</span>
      Spanish Paella
    </div>
  );
}

function SocialMediaButtons() {
  return (
    <>
      <button className="mr-2.5 rounded-full bg-[#171f2f] w-6 h-6 flex items-center justify-center ml-auto mr-[5px]">
        <img src={TwitterIcon} className="w-2.5 h-2.5" alt="Twitter" />
      </button>
      <button className="mr-2.5 rounded-full bg-[#171f2f] w-6 h-6 flex items-center justify-center mr-[5px]">
        <img src={TelegramIcon} className="w-2.5 h-2.5" alt="Twitter" />
      </button>
      <button className="mr-2.5 rounded-full bg-[#171f2f] w-6 h-6 flex items-center justify-center mr-[5px]">
        <img src={MediumIcon} className="w-2.5 h-2.5" alt="Twitter" />
      </button>
    </>
  );
}

function AddRecipeButton() {
  return (
    <button className="rounded-md bg-[#171f2f] px-[7px] h-6 text-white text-sm">
      + Add recipe
    </button>
  );
}