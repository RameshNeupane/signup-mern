import React from "react";

type LinkButtonProps = {
  href: string;
  title: string;
  children: JSX.Element;
};

const LinkButton: React.FC<LinkButtonProps> = ({ href, title, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      className=" w-10 h-10 p-2 border border-slate-600 rounded hover:bg-slate-600"
      title={title}
    >
      {children}
    </a>
  );
};

export default LinkButton;
