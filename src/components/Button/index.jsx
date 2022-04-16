import { BaseButton } from "./styles";

const Button = ({ variant = "primary", children, onClick }) => {
  return (
    <BaseButton variant={variant} onClick={onClick}>
      {children}
    </BaseButton>
  );
};

export default Button;
