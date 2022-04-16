import { BaseButton } from "../styles/elements";

const Button = ({ variant = "primary", children, onClick }) => {
  return (
    <BaseButton variant={variant} onClick={onClick}>
      {children}
    </BaseButton>
  );
};

export default Button;
