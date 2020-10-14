import React, { createContext, useContext, useState } from "react";
import {
  Container,
  Group,
  Title,
  Subtitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  FeatureGroup,
  Maturity,
  Content,
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

//

Card.Entities = function CardEntities({ children, ...otherProps }) {
  return <Entities {...otherProps}>{children}</Entities>;
};

Card.Feature = function CardFeature({ category, children, ...otherProps }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(
    FeatureContext
  );

  return showFeature ? (
    <Feature
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
      {...otherProps}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose
          onClick={() => setShowFeature((setShowFeature) => !setShowFeature)}
        >
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <FeatureGroup>
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? "PG" : `${itemFeature.maturity}＋`}
          </Maturity>
          <FeatureText>
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </FeatureGroup>
        {children}
      </Content>
    </Feature>
  ) : null;
};
