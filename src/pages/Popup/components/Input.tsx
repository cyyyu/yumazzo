import React from 'react';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  surfix?: string;
}

export default function Input({ label, type, surfix }: IInputProps) {
  return (
    <div className="text-base">
      <label className="text-white font-semibold">{label}</label>
      <div className="flex items-center w-full rounded-md bg-[#181f38] flex shadow-[0px_0px_0px_1px_#5b6178] mt-2.5">
        <div>
          <input
            type={type}
            className="w-full text-[#e9eaf6] bg-transparent outline-none py-[8px] px-[11px]"
          />
        </div>
        {surfix && <span className="text-[#e9eaf6] mr-2.5">{surfix}</span>}
      </div>
    </div>
  );
}
