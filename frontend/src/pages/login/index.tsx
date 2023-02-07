import { useEffect } from "react";

import LoginForm from "@/components/forms/LoginForm";
import FormLayout from "@/components/forms/FormLayout";

const Login = () => {
  useEffect(() => {
    document.title = "Account - Login";
  }, []);

  return (
    <FormLayout>
      <LoginForm />
    </FormLayout>
  );
};

export default Login;
