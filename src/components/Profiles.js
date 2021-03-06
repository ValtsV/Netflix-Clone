import React from "react";
import { Container, Title, List, Item, Picture, Name } from "./Profiles.styles";

export default function Profiles({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
}

Profiles.Title = function ProfilesTitle({ children, ...otherProps }) {
  return <Title {...otherProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({ children, ...otherProps }) {
  return <List {...otherProps}>{children}</List>;
};

Profiles.User = function ProfilesItem({ children, ...otherProps }) {
  return <Item {...otherProps}>{children}</Item>;
};

Profiles.Picture = function ProfilesPicture({ src, ...otherProps }) {
  return (
    <Picture
      {...otherProps}
      src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}
    />
  );
};

Profiles.Name = function ProfilesName({ children, ...otherProps }) {
  return <Name {...otherProps}>{children}</Name>;
};
