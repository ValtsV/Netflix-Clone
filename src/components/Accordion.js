import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Title,
  Item,
  Inner,
  Header,
  Body,
  Frame,
} from "./Accordion.styles";

const ToggleContext = createContext();

export const Accordion = ({ children, ...otherProps }) => {
  return (
    <Container {...otherProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Accordion.Title = function AccordionTitle({ children, ...otherProps }) {
  return <Title {...otherProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...otherProps }) {
  return <Frame {...otherProps}> {children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...otherProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...otherProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...otherProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    //   setToggleShow checks for prev state
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...otherProps}
    >
      {children}

      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...otherProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow && <Body {...otherProps}>{children}</Body>;
};
