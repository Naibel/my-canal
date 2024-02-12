import Button, { ButtonProps } from "./Button";

const LinkButton = ({
  linkTo,
  color,
  children,
}: ButtonProps & {
  linkTo: string;
}) => (
  <a target="_blank" className="flex" href={linkTo}>
    <Button color={color}>{children}</Button>
  </a>
);

export default LinkButton;
