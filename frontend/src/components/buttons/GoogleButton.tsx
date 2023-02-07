import React from "react";

import Google from "../icons/Google";

const GoogleButton = () => {
  return (
    <button className="w-max h-max border-2 dark:border-slate-600 px-8 py-2 rounded dark:hover:bg-slate-900">
      <Google />
    </button>
  );
};

export default GoogleButton;
