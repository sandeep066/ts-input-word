import React from "react";
import { ERROR } from "../../../utils/constants";

interface ErrorComponentProps {
  message: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => {
  return <p>{`${ERROR} ${message}`}</p>;
};

export default ErrorComponent;
