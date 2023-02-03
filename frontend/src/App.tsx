import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <div className=" min-w-full min-h-screen dark:bg-gray-800 bg-white dark:text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
