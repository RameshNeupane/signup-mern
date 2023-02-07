import React, { useEffect } from "react";

import OTPForm from "@/components/forms/OTPForm";
import FormLayout from "@/components/forms/FormLayout";

const VerifyOTP = () => {
  useEffect(() => {
    document.title = "Account - Verify OTP";
  }, []);

  return (
    <FormLayout>
      <OTPForm />
    </FormLayout>
  );
};

export default VerifyOTP;
