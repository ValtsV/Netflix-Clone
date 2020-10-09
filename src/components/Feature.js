import React from "react";
import { Container, Title, Subtitle, Text } from "./Feature.styles";

export default function Feature({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...otherProps }) {
  return <Title {...otherProps}>{children}</Title>;
};

Feature.Subtitle = function FeatureSubtitle({ children, ...otherProps }) {
  return <Subtitle {...otherProps}>{children}</Subtitle>;
};

Feature.Text = function FeatureText({ children, ...otherProps }) {
  return <Text {...otherProps}>{children}</Text>;
};
