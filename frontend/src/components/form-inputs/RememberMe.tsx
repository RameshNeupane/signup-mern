import React from "react";
import { Control, Controller } from "react-hook-form";

type RememberMeProps = {
  name: string;
  control: Control<any>;
};

const RememberMe: React.FC<RememberMeProps> = ({ name, control }) => {
  return (
    <div className="flex gap-1 items-center justify-start w-max">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            type="checkbox"
            name={name}
            id={name}
            onChange={field.onChange}
            className=" w-5 h-5 rounded-sm border-none dark:bg-cyan-600"
          />
        )}
      />
      <label htmlFor={name}>Remember Me</label>
    </div>
  );
};

export default RememberMe;
