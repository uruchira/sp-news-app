import { CardWrapper, CardImage, CardBottom } from "./styles";

const Card = ({ children }) => <CardWrapper>{children}</CardWrapper>;
Card.Image = () => <CardImage />;
Card.Title = () => (
  <h1>White House has 'no regrets' about tear-gassing peaceful</h1>
);
Card.Body = () => (
  <p>
    Republican senators on Capitol Hill have expressed their dismay at a Donald
    Trump.
  </p>
);
Card.Bottom = () => <CardBottom />;

const Base = () => (
  <Card>
    <Card.Image />
    <Card.Title />
    <Card.Body />
    <Card.Bottom />
  </Card>
);

export default Base;
