import React from "react";

type FormLayoutProps = {
  children: React.ReactNode;
};

const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
  return (
    <div className=" w-[600px] p-8 border-2 rounded-lg border-slate-600 dark:bg-slate-800">
      {children}
    </div>
  );
};

export default FormLayout;
