import React, { useEffect } from "react";

import FormLayout from "../../components/form-inputs/FormLayout";
import VerifyEmailForm from "../../components/forms/VerifyEmailForm";

const VerifyEmail = () => {
  useEffect(() => {
    document.title = "Account - Verify Email";
  }, []);

  return (
    <FormLayout>
      <VerifyEmailForm />
    </FormLayout>
  );
};

export default VerifyEmail;
