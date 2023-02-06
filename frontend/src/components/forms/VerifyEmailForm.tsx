import { Link } from "react-router-dom";
import React, { FormEvent, useState } from "react";

import Button from "../form-inputs/Button";
import InputEmail from "../form-inputs/InputEmail";

const VerifyEmailForm = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setShowInfo(true);
  };

  if (showInfo) {
    return (
      <div className="text-center">
        <p>Password Reset link was sent to your email. Please check!!!</p>
        <Link
          to={"/"}
          className="ml-1 border-b hover:text-cyan-600 hover:border-cyan-600"
        >
          Login
        </Link>
      </div>
    );
  } else {
    return (
      <div className=" flex flex-col items-center gap-8">
        <h1 className=" text-h1 font-bold">Verify Account</h1>
        <p>Enter the valid email account registered to this account</p>
        <form
          action="#"
          method="post"
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <InputEmail name="email" placeholder="test@example.com" />
          <Button label="submit" />
        </form>
      </div>
    );
  }
};

export default VerifyEmailForm;
