import React, { useState } from "react";
import { Control, Controller } from "react-hook-form";

import Eye from "../icons/Eye";
import EyeSlash from "../icons/EyeSlash";

type InputPasswordProps = {
  label: string;
  name: string;
  control: Control<any>;
  placeholder?: string;
};

const InputPassword: React.FC<InputPasswordProps> = ({
  label,
  name,
  placeholder,
  control,
}) => {
  const [passwordType, setPasswordType] = useState("password");

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
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <div className="w-full relative">
            <input
              type={passwordType}
              name={name}
              id={name}
              onChange={field.onChange}
              placeholder={placeholder}
              className={`w-full dark:bg-gray-700 dark:text-white rounded-md h-12 outline-none border-2 pl-2 text-base ${
                fieldState.error
                  ? "border-red-700 focus-within:border-red-700"
                  : "border-transparent focus-within:border-white"
              }`}
            />
            {/* show/hide password input */}
            {field.value && (
              <div
                className=" w-10 h-10 p-2 absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full dark:hover:bg-slate-700 hover:cursor-pointer"
                onClick={showHidePassword}
              >
                {passwordType === "password" ? <EyeSlash /> : <Eye />}
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default InputPassword;
