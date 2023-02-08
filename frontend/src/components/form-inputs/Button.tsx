import React from "react";

type ButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
  children: string;
};

const Button: React.FC<ButtonProps> = ({
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      disabled={disabled}
      className="w-full capitalize dark:bg-cyan-800 dark:hover:bg-cyan-600 text-center py-2 rounded font-medium text-b1 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};

export default Button;
