import React, { useContext } from "react";

import {
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  FeatureGroup,
  Maturity,
  Content,
} from "./CardFeature.styles";

export default function CardFeature({
  category,
  context,
  children,
  ...otherProps
}) {
  const { showFeature, itemFeature, setShowFeature } = useContext(context);

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
}
