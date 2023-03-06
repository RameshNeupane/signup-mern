import ErrorInputMessage from "@components/ErrorInputMessage";
import { resetPasswordSchema } from "@form-validation/reset-password-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Button from "../form-inputs/Button";
import InputPassword from "../form-inputs/InputPassword";

type resetPasswordInfo = {
  newPassword: string;
  confirmNewPassword: string;
};

const ResetPasswordForm = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<resetPasswordInfo>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const onSubmit = (data: resetPasswordInfo) => {
    console.log(data);
    navigate("/");
  };

  return (
    <div className=" flex flex-col items-center gap-8">
      <h1 className=" text-h1 font-bold">Reset Password</h1>
      <form
        method="post"
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* new password */}
        <div>
          <InputPassword
            label="new password"
            name="newPassword"
            placeholder="********"
            control={control}
          />
          {errors?.newPassword ? (
            <ErrorInputMessage message={errors.newPassword.message as string} />
          ) : null}
        </div>

        {/* confirm new password */}
        <div>
          <InputPassword
            label="confirm new password"
            name="confirmNewPassword"
            placeholder="********"
            control={control}
          />
          {errors?.confirmNewPassword ? (
            <ErrorInputMessage
              message={errors.confirmNewPassword.message as string}
            />
          ) : null}
        </div>
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
