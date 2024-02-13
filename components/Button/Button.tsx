import { ReactNode } from "react";

import styles from "./Button.module.css";

export type ButtonProps = {
  children: ReactNode;
  color?: "grey" | "yellow";
  onClick?: () => void;
};

const Button = ({ children, color = "grey", onClick }: ButtonProps) => (
  <button
    className={`flex flex-1 justify-center items-center duration-600 ${styles[color]} rounded-lg`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
