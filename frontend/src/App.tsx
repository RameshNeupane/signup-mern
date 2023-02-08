import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login";
import Account from "./pages/account";
import Register from "./pages/register";
import VerifyOTP from "./pages/verify-otp";
import VerifyEmail from "./pages/verify-email";
import Layout from "./components/layout/Layout";
import UpdateAccount from "./pages/update-account";
import ResetPassword from "./pages/reset-password";
import ChangePassword from "./pages/change-password";

const App = () => {
  return (
    <div className=" min-w-full min-h-screen dark:bg-gray-800 bg-slate-200 dark:text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="verify-otp" element={<VerifyOTP />} />
            <Route path="verify-email" element={<VerifyEmail />} />
            <Route path="account">
              <Route path=":username" element={<Account />} />
              <Route path=":username/edit" element={<UpdateAccount />} />
              <Route
                path=":username/change-password"
                element={<ChangePassword />}
              />
              <Route
                path=":username/reset-password"
                element={<ResetPassword />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
