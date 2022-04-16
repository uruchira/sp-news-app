import styled from "@emotion/styled";
import placeholderOne from "../../assets/the.png";
import placeholderTwo from "../../assets/peaks.png";

export const CardWrapper = styled.div`
  color: white;
  width: 350px;
  height: 350px;
  &:hover {
    color: white;
  }
  & h1,
  & p {
    padding: 10px 18px;
    background-color: rgba(9, 53, 123, 1);
  }

  & p {
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 20px;
    min-height: 38px;
  }
`;

export const CardImage = styled.div`
  align-items: center;
  background-color: rgba(13, 71, 161, 1);
  background-image: url(${placeholderOne}), url(${placeholderTwo});
  background-position: 117px 70px, 60px 100px;
  background-repeat: no-repeat, no-repeat;
  height: 216px;
  display: flex;
  justify-content: center;
`;

export const CardBottom = styled.div`
  background-color: #d32f2f;
  height: 3px;
`;
