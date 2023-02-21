import React, { ReactNode, useState } from "react";

type IconLabelInputProps = {
  name: string;
  labelIcon: ReactNode;
  url: string;
};

const IconLabelInput: React.FC<IconLabelInputProps> = ({
  name,
  labelIcon,
  url,
}) => {
  const [inputValue, setInputValue] = useState(url || "");
  return (
    <div className="w-full flex dark:bg-slate-600 rounded-md h-12">
      <label
        htmlFor={name}
        className="w-12 h-12 p-2 border-r-2 border-r-slate-800 flex items-center justify-center"
      >
        {labelIcon}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        className="dark:bg-slate-600 rounded-md w-full h-12 outline-none border-2 border-transparent focus-within:border-white pl-2 text-base"
      />
    </div>
  );
};

export default IconLabelInput;
