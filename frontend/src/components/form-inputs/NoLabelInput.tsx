import React, { useState } from "react";

type NoLabelInputProps = {
  name: string;
  value: string;
  placeholder: string;
};

const NoLabelInput: React.FC<NoLabelInputProps> = ({
  name,
  value,
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState(value || "");
  return (
    <input
      type="text"
      name={name}
      id={name}
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
      className="dark:bg-slate-600 rounded-md w-full h-12 outline-none border-2 border-transparent focus-within:border-white pl-2 text-base"
      placeholder={placeholder}
    />
  );
};

export default NoLabelInput;
