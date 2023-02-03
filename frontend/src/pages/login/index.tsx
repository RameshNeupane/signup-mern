import { useEffect } from "react";

import LoginForm from "../../components/LoginForm";

const Login = () => {
  useEffect(() => {
    document.title = "Account - Login";
  }, []);

  return <LoginForm />;
};

export default Login;
