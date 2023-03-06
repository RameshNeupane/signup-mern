import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../form-inputs/Button";
import LinkHover from "../links/LinkHover";
import InputEmail from "../form-inputs/InputEmail";
import { data } from "@assets/data/account-detail";
import ErrorInputMessage from "@components/ErrorInputMessage";
import { verifyEmailSchema } from "@form-validation/verify-email-schema";

type verifyEmailInfo = {
  email: string;
};

const VerifyEmailForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<verifyEmailInfo>({
    resolver: yupResolver(verifyEmailSchema),
  });

  const [showInfo, setShowInfo] = useState(false);

  const onSubmit = (data: verifyEmailInfo) => {
    console.log(data);
    setShowInfo(true);
  };

  if (showInfo) {
    return (
      <div className="text-center">
        <p>Password Reset link was sent to your email. Please check!!!</p>
        <LinkHover path={`/account/${data.username}/reset-password`}>
          Reset Password
        </LinkHover>
      </div>
    );
  } else {
    return (
      <div className=" flex flex-col items-center gap-8">
        <h1 className=" text-h1 font-bold">Verify Account</h1>
        <p>Enter the valid email account registered to this account</p>
        <form
          action="#"
          method="post"
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <InputEmail
              label="email"
              name="email"
              placeholder="test@example.com"
              control={control}
            />
            {errors?.email ? (
              <ErrorInputMessage message={errors.email.message as string} />
            ) : null}
          </div>
          <Button>Submit</Button>
        </form>
      </div>
    );
  }
};

export default VerifyEmailForm;
