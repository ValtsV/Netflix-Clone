import React from "react";
import {
  Container,
  Inner,
  Pane,
  Title,
  Subtitle,
  Image,
  Item,
} from "./Jumbotron.styles";

export const Jumbotron = ({ children, direction = "row", ...otherProps }) => {
  return (
    <Item direction={direction}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
};

Jumbotron.Container = function JumbotronContainer({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...otherProps }) {
  return <Pane {...otherProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...otherProps }) {
  return <Title {...otherProps}>{children}</Title>;
};

Jumbotron.Subtitle = function JumbotronSubtitle({ children, ...otherProps }) {
  return <Subtitle {...otherProps}>{children}</Subtitle>;
};

Jumbotron.Image = function JumbotronImage({ ...otherProps }) {
  return <Image {...otherProps} />;
};
