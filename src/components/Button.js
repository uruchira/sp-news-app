import { BaseButton } from "../styles/elements";

const Button = ({
  type = "button",
  variant = "primary",
  children,
  onClick,
}) => {
  return (
    <BaseButton type={type} variant={variant} onClick={onClick}>
      {children}
    </BaseButton>
  );
};

export default Button;
