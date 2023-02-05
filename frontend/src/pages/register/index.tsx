import React, { useEffect } from "react";

import FormLayout from "../../components/form-inputs/FormLayout";
import RegisterForm from "../../components/forms/RegisterForm";

const Register = () => {
  useEffect(() => {
    document.title = "Account - Register";
  }, []);

  return (
    <FormLayout>
      <RegisterForm />
    </FormLayout>
  );
};

export default Register;
