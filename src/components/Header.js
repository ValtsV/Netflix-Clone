import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Background,
  Container,
  ButtonLink,
  Logo,
  Feature,
  Text,
  FeatureTitle,
  TextLink,
  Group,
  Picture,
  Profile,
  Dropdown,
} from "./Header.styles";

export default function Header({ bg = true, children, ...otherProps }) {
  return bg ? <Background {...otherProps}>{children}</Background> : children;
}

Header.Feature = function HeaderFeature({ children, ...otherProps }) {
  return <Feature {...otherProps}>{children}</Feature>;
};

Header.Frame = function HeaderFrame({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
};

Header.Group = function Header({ children, ...otherProps }) {
  return <Group {...otherProps}>{children}</Group>;
};

Header.Text = function HeaderText({ children, ...otherProps }) {
  return <Text {...otherProps}>{children}</Text>;
};

Header.FeatureTitle = function HeaderFeatureTitle({ children, ...otherProps }) {
  return <FeatureTitle {...otherProps}>{children}</FeatureTitle>;
};

Header.TextLink = function HeaderTextLink({ children, ...otherProps }) {
  return <TextLink {...otherProps}>{children}</TextLink>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...otherProps }) {
  return <ButtonLink {...otherProps}>{children}</ButtonLink>;
};

Header.Logo = function HeaderLogo({ to, ...otherProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...otherProps} />
    </ReactRouterLink>
  );
};

Header.Picture = function HeaderPicture({ src, ...otherProps }) {
  return <Picture {...otherProps} src={`/images/users/${src}.png`} />;
};

Header.Profile = function HeaderProfile({ children, ...otherProps }) {
  return <Profile {...otherProps}>{children}</Profile>;
};

Header.Dropdown = function HeaderDropdown({ children, ...otherProps }) {
  return <Dropdown {...otherProps}>{children}</Dropdown>;
};
