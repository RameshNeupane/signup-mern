import { useNavigate } from "react-router-dom";

import Button from "../form-inputs/Button";
import InputPassword from "../form-inputs/InputPassword";

const ResetPasswordForm = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <div className=" flex flex-col items-center gap-8">
      <h1 className=" text-h1 font-bold">Reset Password</h1>
      <form
        method="post"
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <InputPassword name="new password" placeholder="********" />
        <InputPassword name="confirm new password" placeholder="********" />
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
