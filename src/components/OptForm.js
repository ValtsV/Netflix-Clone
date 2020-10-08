import React from "react";
import { Container, Input, Button, Text, Frame } from "./OptForm.styles";

export const OptForm = ({ children, ...otherProps }) => {
  return <Container {...otherProps}>{children}</Container>;
};

OptForm.Input = function OptFormInput({ ...otherProps }) {
  return <Input {...otherProps} />;
};

OptForm.Button = function OptFormButton({ children, ...otherProps }) {
  return (
    <Button {...otherProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...otherProps }) {
  return <Text {...otherProps}>{children}</Text>;
};

OptForm.Frame = function OptFormFrame({ children, ...otherProps }) {
  return <Frame {...otherProps}>{children}</Frame>;
};
