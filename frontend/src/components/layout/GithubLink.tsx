import React from "react";

import Github from "../icons/Github";

const GithubLink = () => {
  return (
    <a
      href="https://github.com/RameshNeupane/signup-mern"
      target="_blank"
      className=" w-10 h-10 p-2 border border-slate-600 rounded hover:bg-slate-600"
      title="Github"
    >
      <Github />
    </a>
  );
};

export default GithubLink;
