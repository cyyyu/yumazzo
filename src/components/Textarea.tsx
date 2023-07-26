import React from "react"

interface ITextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
}

export default function Textarea({ label, ...rest }: ITextareaProps) {
  return (
    <div className="text-base">
      <label className="text-white font-semibold">{label}</label>
      <textarea
        className="w-full text-[#e9eaf6] outline-none py-[8px] px-[11px] rounded-md bg-[#181f38] shadow-[0px_0px_0px_1px_#5b6178] mt-2.5"
        rows={2}
        {...rest}
      />
      <p className="text-sm text-[#43495e] mt-2.5">
        {typeof rest.value === "string" ? rest.value.length : "0"}/200
        Characters
      </p>
    </div>
  )
}
