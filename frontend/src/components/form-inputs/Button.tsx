import React from "react";

type ButtonProps = {
  label: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ label, disabled = false }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="w-full capitalize dark:bg-cyan-800 dark:hover:bg-cyan-600 text-center py-2 rounded font-medium text-b1 disabled:cursor-not-allowed"
    >
      {label}
    </button>
  );
};

export default Button;
