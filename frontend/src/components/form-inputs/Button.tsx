import React from "react";

type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  label,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      disabled={disabled}
      className="w-full capitalize dark:bg-cyan-800 dark:hover:bg-cyan-600 text-center py-2 rounded font-medium text-b1 disabled:cursor-not-allowed"
    >
      {label}
    </button>
  );
};

export default Button;
