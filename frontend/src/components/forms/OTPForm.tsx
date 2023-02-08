import React, { useState } from "react";
import OtpInput from "react18-input-otp";
import { useNavigate } from "react-router-dom";

import Button from "../form-inputs/Button";
import ArrowLeft from "../icons/ArrowLeft";

const OTPForm = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleSubmit = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  };

  return (
    <div className=" flex flex-col items-center gap-8">
      <h1 className=" text-h1 font-bold">Verify OTP</h1>
      <p>Enter the OTP that recently sent to your email</p>
      <OtpInput
        value={otp}
        onChange={(enteredOtp: string) => setOtp(enteredOtp)}
        numInputs={4}
        isInputNum={true}
        shouldAutoFocus={true}
        containerStyle=" flex flex-row items-center justify-center gap-4"
        inputStyle="dark:bg-slate-600 rounded-md h-12 w-otp-input outline-none border-2 border-transparent"
        focusStyle="dark:border-white border-black cus"
        errorStyle="border-red-900"
        onSubmit={handleSubmit}
      />
      <Button onClick={handleSubmit}>Submit</Button>
      <div>
        <span>Didn't get code?</span>
        <button className="ml-1 border-b hover:text-cyan-600 hover:border-cyan-600">
          Resend
        </button>
      </div>
      <button
        className=" w-12 h-12 p-3 rounded-full dark:hover:bg-slate-900"
        title="Go back"
        onClick={handleGoBack}
      >
        <ArrowLeft />
      </button>
    </div>
  );
};

export default OTPForm;
