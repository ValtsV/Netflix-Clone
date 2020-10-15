import React, { createContext, useContext, useState } from "react";
import {
  Container,
  Group,
  Title,
  Subtitle,
  Text,
  Meta,
  Entities,
  Item,
  Image,
} from "./Card.styles";

export const FeatureContext = createContext();

export default function Card({ children, ...otherProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...otherProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...otherProps }) {
  return <Group {...otherProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...otherProps }) {
  return <Title {...otherProps}>{children}</Title>;
};

Card.Subtitle = function CardSubtitle({ children, ...otherProps }) {
  return <Subtitle {...otherProps}>{children}</Subtitle>;
};

Card.Text = function CardText({ children, ...otherProps }) {
  return <Text {...otherProps}>{children}</Text>;
};

Card.Meta = function CardMeta({ children, ...otherProps }) {
  return <Meta {...otherProps}>{children}</Meta>;
};

Card.Item = function CardItem({ item, children, ...otherProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...otherProps}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ ...otherProps }) {
  return <Image {...otherProps} />;
};

Card.Entities = function CardEntities({ children, ...otherProps }) {
  return <Entities {...otherProps}>{children}</Entities>;
};
