import React from "react";
import { Control, Controller } from "react-hook-form";

type InputEmailProps = {
  label: string;
  name: string;
  placeholder: string;
  control: Control<any>;
};

const InputEmail: React.FC<InputEmailProps> = ({
  label,
  name,
  placeholder,
  control,
}) => {
  return (
    <div className="w-full flex flex-col">
      <label htmlFor={name} className=" capitalize">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <input
            type="email"
            name={name}
            id={name}
            onChange={(e) => field.onChange(e.target.value)}
            placeholder={placeholder}
            className={`dark:bg-gray-700 dark:text-white rounded-md h-12 outline-none border-2 pl-2 text-base ${
              fieldState.error
                ? "border-red-700 focus-within:border-red-700"
                : "border-transparent focus-within:border-white"
            }`}
          />
        )}
      />
    </div>
  );
};

export default InputEmail;
