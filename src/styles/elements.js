import { Link } from "react-router-dom";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

const buttonAndLink = css`
  align-items: center;
  border: 1px solid #09357b;
  border-radius: 4px;
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

export const BaseButton = styled.button`
  background-color: ${(props) =>
    props.variant === "secondary" ? "#FFF" : "#09357b"};
  color: ${(props) => (props.variant === "secondary" ? "#09357b" : "#FFF")};
  ${buttonAndLink}
`;

export const BaseLink = styled(Link)`
  background-color: #09357b;
  color: #fff;
  ${buttonAndLink}
`;

export const BaseSelect = styled.select`
  border: none;
  border-bottom: 1px solid #888;
  width: 190px;
  padding: 6px 3px;
`;

export const BaseHeader = styled.h1`
  font-size: 2rem;
`;

export const BaseSubHeader = styled.h1`
  font-size: 1.5rem;
`;
