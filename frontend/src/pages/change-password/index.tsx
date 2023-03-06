import React, { useEffect } from "react";

import FormLayout from "@components/forms/FormLayout";
import ChangePasswordForm from "@components/forms/ChangePasswordForm";

const ChangePassword = () => {
  useEffect(() => {
    document.title = "Account - Change Password";
  });

  return (
    <div>
      <FormLayout>
        <ChangePasswordForm />
      </FormLayout>
    </div>
  );
};

export default ChangePassword;
