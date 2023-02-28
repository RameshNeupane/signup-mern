import React, { useEffect } from "react";

import FormLayout from "@components/forms/FormLayout";
import ResetPasswordForm from "@components/forms/ResetPasswordForm";

const ResetPassword = () => {
  useEffect(() => {
    document.title = "Account - Reset Password";
  }, []);

  return (
    <FormLayout>
      <ResetPasswordForm />
    </FormLayout>
  );
};

export default ResetPassword;
