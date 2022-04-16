import styled from "@emotion/styled";

export const BaseButton = styled.button`
  align-items: center;
  background-color: ${(props) =>
    props.variant === "secondary" ? "#FFF" : "#09357b"};
  border: 1px solid #09357b;
  border-radius: 4px;
  color: ${(props) => (props.variant === "secondary" ? "#09357b" : "#FFF")};
  display: flex;
  font-family: "Roboto", sans-serif;
  font-size: 0.75rem;
  height: 30px;
  justify-content: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 157px;
  & span {
    margin-left: 6px;
  }
`;
