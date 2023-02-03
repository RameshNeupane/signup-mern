import React, { useState } from "react";
import Moon from "../icons/Moon";
import Sun from "../icons/Sun";

const ToggleTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const html = document.querySelector("html");

  const toggleTheme = () => {
    html?.classList.toggle("dark");
    setIsDarkTheme((prev) => !prev);
  };
  return (
    <button
      className=" w-10 h-10 p-2 border border-slate-600 rounded hover:bg-slate-600"
      title="Toggle theme"
      onClick={toggleTheme}
    >
      {isDarkTheme ? <Sun /> : <Moon />}
    </button>
  );
};

export default ToggleTheme;
