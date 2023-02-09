import React from "react";
import { useNavigate } from "react-router-dom";

import Info from "../icons/Info";
import Button from "../form-inputs/Button";
import LinkHover from "../links/LinkHover";
import InputText from "../form-inputs/InputText";
import GoogleButton from "../buttons/GoogleButton";
import RememberMe from "../form-inputs/RememberMe";
import { data } from "@/assets/data/account-detail";
import InputPassword from "../form-inputs/InputPassword";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(`/account/${data.username}`);
  };

  return (
    <div className=" flex flex-col items-center gap-8">
      <h1 className=" text-h1 font-bold">Login</h1>
      <div className="flex gap-1 items-center">
        <Info />
        <div>
          <span className="mr-1">Don't have an account?</span>
          <LinkHover path="/register">Register</LinkHover>
        </div>
      </div>
      <form
        method="post"
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <InputText name="username" placeholder="aaryn098" />
        <InputPassword name="password" placeholder="********" />
        <div className="w-full flex flex-col gap-2">
          <div className=" flex items-center justify-between">
            <RememberMe />
            <LinkHover path="/verify-email">Forgot Password?</LinkHover>
          </div>
          <Button>Login</Button>
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

export default LoginForm;
