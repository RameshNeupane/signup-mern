import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <div className=" min-w-full min-h-screen dark:bg-gray-800 bg-white dark:text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
