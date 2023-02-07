import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Info from "../icons/Info";
import Button from "../form-inputs/Button";
import InputText from "../form-inputs/InputText";
import InputEmail from "../form-inputs/InputEmail";
import RememberMe from "../form-inputs/RememberMe";
import GoogleButton from "../buttons/GoogleButton";
import InputPassword from "../form-inputs/InputPassword";

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/verify-otp");
  };

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <h1 className=" text-h1 font-bold">Register</h1>
      <div className="flex gap-1 items-center">
        <Info />
        <div>
          <span>Already have an account?</span>
          <Link
            to={`/`}
            className="ml-1 border-b hover:text-cyan-600 hover:border-cyan-600"
          >
            Login
          </Link>
        </div>
      </div>
      <form
        method="post"
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <InputText name="fullname" placeholder="Ramesh Neupane" />
        <InputText name="username" placeholder="aaryn098" />
        <InputEmail name="email" placeholder="test@example.com" />
        <InputPassword name="password" placeholder="********" />
        <div className="w-full flex flex-col gap-2">
          <RememberMe />
          <Button label="register" />
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
    </div>
  );
};

export default RegisterForm;
