import React from "react";

import Button from "./form-inputs/Button";
import InputText from "./form-inputs/InputText";
import RememberMe from "./form-inputs/RememberMe";
import GoogleButton from "./form-inputs/GoogleButton";
import InputPassword from "./form-inputs/InputPassword";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className=" w-[600px] flex flex-col items-center gap-8 p-8 border-2 rounded-lg border-slate-600 dark:bg-slate-800">
      <h1 className=" text-h1 font-bold">Login</h1>
      <form method="post" className="w-full flex flex-col gap-4">
        <InputText name="username" placeholder="e.g. aaryn098" />
        <InputPassword name="password" placeholder="********" />
        <div className="w-full flex flex-col gap-2">
          <RememberMe />
          <Button label="login" />
        </div>
      </form>
      <div className="w-full flex flex-col items-center gap-2">
        <div className="flex items-center justify-center gap-1 w-full">
          <hr className=" block w-full h-1 dark:bg-slate-600 bg-black border dark:border-slate-600 border-black rounded-full" />
          <span className="block text-h6 font-normal">OR</span>
          <hr className=" block w-full h-1 dark:bg-slate-600 bg-black border dark:border-slate-600 border-black rounded-full" />
        </div>
        <GoogleButton />
      </div>
      <div>
        <span>Don't have an account?</span>
        <Link
          to={`/register`}
          className="ml-1 border-b hover:text-cyan-600 hover:border-cyan-600"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
