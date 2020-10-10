import React from "react";
import {
  Container,
  Frame,
  Link,
  Title,
  Text,
  Break,
  Inner,
} from "./Footer.styles";

export const Footer = ({ children, ...otherProps }) => {
  return (
    <Container {...otherProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Footer.Frame = function FooterFrame({ children, ...otherProps }) {
  return <Frame {...otherProps}>{children}</Frame>;
};

Footer.Link = function FooterLink({ children, ...otherProps }) {
  return <Link {...otherProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...otherProps }) {
  return <Title {...otherProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...otherProps }) {
  return <Text {...otherProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ children, ...otherProps }) {
  return <Break {...otherProps}>{children}</Break>;
};
