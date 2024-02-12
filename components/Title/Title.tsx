import { ReactNode } from "react";

import styles from "./Title.module.css";

type TitleProps = {
  size?: "small" | "medium" | "large";
  children: ReactNode;
};

const Title = ({ size = "medium", children }: TitleProps) => (
  <h2 className={`${styles[size]} uppercase font-semibold italic`}>
    {children}
  </h2>
);

export default Title;
