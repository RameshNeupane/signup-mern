import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../form-inputs/Button";
import LinkHover from "../links/LinkHover";
import InputPassword from "../form-inputs/InputPassword";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordSchema } from "@form-validation/change-password-schema";
import ErrorInputMessage from "@components/ErrorInputMessage";

type changePasswordInfo = {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

const ChangePasswordForm = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<changePasswordInfo>({
    resolver: yupResolver(changePasswordSchema),
  });

  const onSubmit = (data: changePasswordInfo) => {
    console.log(data);
    navigate("/");
  };

  return (
    <div className=" flex flex-col items-center gap-8">
      <h1 className=" text-h1 font-bold">Change Password</h1>
      <form
        method="post"
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* old password */}
        <div>
          <InputPassword
            label="old password"
            name="oldPassword"
            placeholder="********"
            control={control}
          />
          {errors?.oldPassword ? (
            <ErrorInputMessage message={errors.oldPassword.message as string} />
          ) : null}
        </div>

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
      <LinkHover path="/verify-email">Forgot Password?</LinkHover>
    </div>
  );
};

export default ChangePasswordForm;
