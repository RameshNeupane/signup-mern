import React, { useState } from "react";

type InputEmailProps = {
  name: string;
  value?: string;
  placeholder: string;
};

const InputEmail: React.FC<InputEmailProps> = ({
  name,
  value = "",
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState(value);

  return (
    <div className="w-full flex flex-col">
      <label htmlFor={name} className=" capitalize">
        {name}
      </label>
      <input
        type="email"
        name={name}
        id={name}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        className="dark:bg-slate-600 rounded-md h-12 outline-none border-2 border-transparent focus-within:border-white pl-2 text-base"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputEmail;
