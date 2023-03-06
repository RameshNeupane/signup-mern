import React from "react";

import Google from "../icons/Google";

type GoogleButtonProps = {
  onClick?: () => void;
};

const GoogleButton: React.FC<GoogleButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-max h-max border-2 dark:border-slate-600 px-8 py-2 rounded dark:hover:bg-slate-700"
    >
      <Google />
    </button>
  );
};

export default GoogleButton;
