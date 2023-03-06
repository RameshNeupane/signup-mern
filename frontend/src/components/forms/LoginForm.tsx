import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { yupResolver } from "@hookform/resolvers/yup";

import Info from "../icons/Info";
import Button from "../form-inputs/Button";
import LinkHover from "../links/LinkHover";
import InputText from "../form-inputs/InputText";
import GoogleButton from "../buttons/GoogleButton";
import RememberMe from "../form-inputs/RememberMe";
import InputPassword from "../form-inputs/InputPassword";
import { loginSchema } from "@form-validation/login-schema";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import ErrorInputMessage from "@components/ErrorInputMessage";
import { googleLoginUser, loginUser } from "@redux/user/action";

type loginInfo = {
  username: string;
  password: string;
  rememmber: boolean;
};

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const usersState = useAppSelector((state) => state.users);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<loginInfo>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: loginInfo) => {
    // event.preventDefault();
    // if (username && password) {
    //   dispatch(loginUser({ username, password }));
    //   navigate(`/account/${username}`);
    // }
    console.log(data);
    navigate(`/account/${data?.username}`);
  };

  console.log(errors);
  // google login
  const googleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      console.log(code);
      dispatch(googleLoginUser(code));
    },
    flow: "auth-code",
  });

  return (
    <div className=" flex flex-col items-center gap-8">
      <h1 className=" text-h1 font-bold">Login</h1>
      <div className="flex gap-1 items-center">
        <Info />
        <div>
          <span className="mr-1">Don't have an account?</span>
          <LinkHover path="/register">Register</LinkHover>
        </div>
      </div>
      <form
        method="post"
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
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

        <div className="w-full flex flex-col gap-2">
          <div className=" flex items-center justify-between">
            <RememberMe name="remember" control={control} />
            <LinkHover path="/verify-email">Forgot Password?</LinkHover>
          </div>
          <Button>Login</Button>
        </div>
      </form>
      <div className="w-full flex flex-col items-center gap-2">
        <div className="flex items-center justify-center gap-1 w-full">
          <hr className=" block w-full h-1 dark:bg-slate-600 bg-black border dark:border-slate-600 border-black rounded-full" />
          <span className="block text-h6 font-normal">OR</span>
          <hr className=" block w-full h-1 dark:bg-slate-600 bg-black border dark:border-slate-600 border-black rounded-full" />
        </div>
        <GoogleButton onClick={googleLogin} />
      </div>
    </div>
  );
};

export default LoginForm;
