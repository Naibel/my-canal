import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  color: string;
};

export const LinkButton = ({
  linkTo,
  color,
  children,
}: ButtonProps & {
  linkTo: string;
}) => (
  <a target="_blank" href={linkTo}>
    <Button color={color}>{children}</Button>
  </a>
);

const Button = ({ children, color }: ButtonProps) => (
  <button
    className={`flex justify-center items-center duration-600 bg-${color} hover:bg-${color} active:bg-${color} rounded-xl`}
  >
    {children}
  </button>
);

export default Button;
