import React from "react";
import InputText from "./form-inputs/InputText";

const LoginForm = () => {
  return (
    <div className=" w-[600px] flex flex-col items-center gap-8 p-8 border-2 rounded-lg border-slate-600 dark:bg-slate-800">
      <h1 className=" text-h1 font-bold">Login</h1>
      <div className="w-full flex flex-col gap-3">
        <InputText name="username" placeholder="e.g. aaryn098" />
      </div>
    </div>
  );
};

export default LoginForm;
