import { CardWrapper, CardImage, CardBottom } from "./styles";

const Card = ({ title, bodyText }) => {
  return (
    <CardWrapper>
      <CardImage />
      <h1>{title}</h1>
      <p>{bodyText}</p>
      <CardBottom />
    </CardWrapper>
  );
};

export default Card;
