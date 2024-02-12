import { ReactNode } from "react";

import styles from "./Button.module.css";

export type ButtonProps = {
  children: ReactNode;
  color?: "grey" | "yellow";
};

const Button = ({ children, color = "grey" }: ButtonProps) => (
  <button
    className={`flex flex-1 justify-center items-center duration-600 ${styles[color]} rounded-lg`}
  >
    {children}
  </button>
);

export default Button;
