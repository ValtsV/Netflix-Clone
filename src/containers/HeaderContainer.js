import React from "react";
import Header from "../components/Header";
import * as ROUTES from "../routes/Routes";
import logo from "../fixtures/logo.svg";

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame fadeDown={true}>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>
          Iniciar sesión
        </Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
