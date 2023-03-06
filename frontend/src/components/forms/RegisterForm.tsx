import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import Info from "../icons/Info";
import Button from "../form-inputs/Button";
import LinkHover from "../links/LinkHover";
import InputText from "../form-inputs/InputText";
import InputEmail from "../form-inputs/InputEmail";
import InputPassword from "../form-inputs/InputPassword";
import ErrorInputMessage from "@components/ErrorInputMessage";
import { registerSchema } from "@form-validation/register-schema";

type registerInfo = {
  fullname: string;
  username: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<registerInfo>({
    resolver: yupResolver(registerSchema),
  });

  const handleRegisterSubmit = (data: registerInfo) => {
    console.log(data);
    navigate("/verify-otp");
  };

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <h1 className=" text-h1 font-bold">Register</h1>
      <div className="flex gap-1 items-center">
        <Info />
        <div>
          <span className="mr-1">Already have an account?</span>
          <LinkHover path="/">Login</LinkHover>
        </div>
      </div>
      <form
        method="post"
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit(handleRegisterSubmit)}
      >
        {/* fullname */}
        <div>
          <InputText
            label="fullname"
            name="fullname"
            placeholder="Ramesh Neupane"
            control={control}
          />
          {errors?.fullname ? (
            <ErrorInputMessage message={errors.fullname.message as string} />
          ) : null}
        </div>

        {/* username */}
        <div>
          <InputText
            label="username"
            name="username"
            placeholder="aaryn098"
            control={control}
          />
          {errors?.username ? (
            <ErrorInputMessage message={errors.username.message as string} />
          ) : null}
        </div>

        {/* email */}
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

        {/* password */}
        <div>
          <InputPassword
            label="password"
            name="password"
            placeholder="********"
            control={control}
          />
          {errors?.password ? (
            <ErrorInputMessage message={errors.password.message as string} />
          ) : null}
        </div>
        <Button>Register</Button>
      </form>
    </div>
  );
};

export default RegisterForm;
