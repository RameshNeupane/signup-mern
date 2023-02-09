import React from "react";
import { Link } from "react-router-dom";

type LinkHoverProps = {
  path: string;
  children: string;
};

const LinkHover: React.FC<LinkHoverProps> = ({ path, children }) => {
  return (
    <Link
      to={path}
      className="border-b border-b-black dark:border-b-white hover:text-cyan-600 hover hover:border-b-cyan-600  hover:dark:border-b-cyan-600"
    >
      {children}
    </Link>
  );
};

export default LinkHover;
