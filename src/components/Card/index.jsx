import { CardWrapper, CardImage, CardBottom } from "./styles";

const Card = ({ src = "noImage", title, bodyText }) => {
  return (
    <CardWrapper>
      <CardImage bgImage={src}>
        {src === "noImage" ? "" : <img src={src} alt={title} />}
      </CardImage>
      <h1>{title}</h1>
      <p>{bodyText}</p>
      <CardBottom />
    </CardWrapper>
  );
};

export default Card;
