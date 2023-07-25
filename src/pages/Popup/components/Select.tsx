import React from 'react';
import CaretDownIcon from '../../../assets/img/CaretDown.svg';

interface ISelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

export default function Select({ label, placeholder }: ISelectProps) {
  return (
    <div className="text-base">
      <label className="text-white font-semibold">{label}</label>
      <div className="relative mt-2.5">
        <select className="w-full text-[#e9eaf6] rounded-md shadow-[0px_0px_0px_1px_#5b6178] bg-[#181f38] outline-none h-10 px-[11px] appearance-none">
          {placeholder && (
            <option value={placeholder} selected disabled></option>
          )}
        </select>
        <img
          src={CaretDownIcon}
          className="w-5 h-5 ml-2.5 absolute top-1/2 -translate-y-1/2 right-2.5 pointer-events-none"
          alt="Caret Down"
        />
      </div>
    </div>
  );
}
