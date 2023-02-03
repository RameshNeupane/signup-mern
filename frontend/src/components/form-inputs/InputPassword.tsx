import React from "react";

type InputPasswordProps = {
  name: string;
  placeholder: string;
};

const InputPassword: React.FC<InputPasswordProps> = ({ name, placeholder }) => {
  return (
    <div className="w-full flex flex-col">
      <label htmlFor={name} className=" capitalize">
        {name}
      </label>
      <input
        type="password"
        name={name}
        id={name}
        className="dark:bg-slate-600 rounded-md h-12 outline-none border-2 border-transparent focus-within:border-white pl-2 text-base"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputPassword;
