import React, { Dispatch, SetStateAction, useState } from "react";

type InputTextProps = {
  name: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder?: string;
};

const InputText: React.FC<InputTextProps> = ({
  name,
  value,
  setValue,
  placeholder = "",
}) => {
  // const [inputValue, setInputValue] = useState(value);

  return (
    <div className="w-full flex flex-col">
      <label htmlFor={name} className=" capitalize">
        {name}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="dark:bg-slate-600 rounded-md h-12 outline-none border-2 border-transparent focus-within:border-white pl-2 text-base"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputText;
