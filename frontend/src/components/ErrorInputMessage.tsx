import React from "react";

type ErrorInputMessageProps = {
  message: string;
};

const ErrorInputMessage: React.FC<ErrorInputMessageProps> = ({ message }) => {
  return <p className=" text-base font-normal text-red-700">{message}</p>;
};

export default ErrorInputMessage;
