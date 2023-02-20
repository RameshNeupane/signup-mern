import React, { useState } from "react";

type TextareaProps = {
  name: string;
  value?: string;
  placeholder?: string;
};

const Textarea: React.FC<TextareaProps> = ({
  name,
  value = "",
  placeholder = "",
}) => {
  const [inputValue, setInputValue] = useState(value);

  return (
    <div className="w-full flex flex-col">
      <label htmlFor={name} className=" capitalize">
        {name}
      </label>
      <textarea
        rows={5}
        id={name}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder={placeholder}
        className="dark:bg-slate-600 rounded-md outline-none border-2 border-transparent focus-within:border-white pl-2 text-base"
      />
    </div>
  );
};

export default Textarea;
