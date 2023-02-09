import React from "react";
import { Outlet } from "react-router-dom";

import Github from "../icons/Github";
import LinkButton from "../links/LinkButton";
import ToggleTheme from "../buttons/ToggleTheme";

const Layout = () => {
  return (
    <div className=" lg:w-[1000px] font-rubik flex flex-col gap-8 items-center justify-start mx-auto">
      <header className=" w-full border-b-2 dark:border-b-slate-600 flex gap-2 justify-end pr-4 py-2">
        <ToggleTheme />
        <LinkButton
          href="https://github.com/RameshNeupane/signup-mern"
          title="Github"
        >
          <Github />
        </LinkButton>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
