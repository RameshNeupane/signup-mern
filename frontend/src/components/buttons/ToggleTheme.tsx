import React, { useState } from "react";

import Sun from "../icons/Sun";
import Moon from "../icons/Moon";

const ToggleTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const html = document.querySelector("html");

  const toggleTheme = () => {
    html?.classList.toggle("dark");
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <button
      className=" w-10 h-10 p-2 flex items-center justify-center border border-slate-600 rounded hover:bg-slate-600"
      title="Toggle theme"
      onClick={toggleTheme}
    >
      {isDarkTheme ? <Sun /> : <Moon />}
    </button>
  );
};

export default ToggleTheme;
