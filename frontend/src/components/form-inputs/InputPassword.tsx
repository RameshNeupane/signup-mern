import React, { useState } from "react";

import Eye from "../icons/Eye";
import EyeSlash from "../icons/EyeSlash";

type InputPasswordProps = {
  name: string;
  placeholder: string;
};

const InputPassword: React.FC<InputPasswordProps> = ({ name, placeholder }) => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");

  const showHidePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
    <div className="w-full flex flex-col">
      <label htmlFor={name} className=" capitalize">
        {name}
      </label>
      <div className="w-full relative">
        <input
          type={passwordType}
          name={name}
          id={name}
          value={passwordInput}
          onChange={(event) => setPasswordInput(event.target.value)}
          className="w-full dark:bg-slate-600 rounded-md h-12 outline-none border-2 border-transparent focus-within:border-white pl-2 text-base"
          placeholder={placeholder}
        />
        {/* show/hide password input */}
        {passwordInput && (
          <div
            className=" w-10 h-10 p-2 absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full dark:hover:bg-slate-700 hover:cursor-pointer"
            onClick={showHidePassword}
          >
            {passwordType === "password" ? <Eye /> : <EyeSlash />}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputPassword;
