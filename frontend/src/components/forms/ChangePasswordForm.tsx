import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../form-inputs/Button";
import InputPassword from "../form-inputs/InputPassword";

const ChangePasswordForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Account - Change Password";
  });

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <div className=" flex flex-col items-center gap-8">
      <h1 className=" text-h1 font-bold">Change Password</h1>
      <form
        method="post"
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <InputPassword name="old password" placeholder="********" />
        <InputPassword name="new password" placeholder="********" />
        <InputPassword name="confirm new password" placeholder="********" />
        <Button>Submit</Button>
      </form>
      <Link
        to={`/verify-email`}
        className="border-b hover:text-cyan-600 hover:border-cyan-600"
      >
        Forgot password?
      </Link>
    </div>
  );
};

export default ChangePasswordForm;
