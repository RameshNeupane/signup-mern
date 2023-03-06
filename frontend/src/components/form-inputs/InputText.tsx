import React from "react";
import { Control, Controller } from "react-hook-form";

type InputTextProps = {
  label: string;
  name: string;
  control: Control<any>;
  placeholder?: string;
};

const InputText: React.FC<InputTextProps> = ({
  label,
  name,
  control,
  placeholder = "",
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
            type="text"
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

export default InputText;
