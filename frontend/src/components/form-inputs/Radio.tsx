import React, { Dispatch, SetStateAction, useState } from "react";

type RadioProps = {
  name: string;
  value: string;
  radioChecked: string;
  setRadioChecked: Dispatch<SetStateAction<string>>;
};

const Radio: React.FC<RadioProps> = ({
  name,
  value,
  radioChecked,
  setRadioChecked,
}) => {
  // const [inputValue, setInputValue] = useState(checked);
  return (
    <div className=" w-max flex flex-row items-center justify-center gap-1">
      <input
        type="radio"
        name={name}
        id={value}
        checked={radioChecked === value}
        onChange={(event) => setRadioChecked(value)}
        className=" w-4 h-4"
      />
      <label htmlFor={value} className=" capitalize">
        {value}
      </label>
    </div>
  );
};

export default Radio;
