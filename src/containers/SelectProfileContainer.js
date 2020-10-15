import React from "react";
import Header from "../components/Header";
import * as ROUTES from "../routes/Routes";
import logo from "../fixtures/logo.svg";
import Profiles from "../components/Profiles";

export function SelectProfileContainer({ user, setProfile, setLoading }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame fadeDown={true}>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>¿Quién eres? Elige tu perfil</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() => {
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              });
            }}
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>

        {/* ADMINISTRAR PERFILES */}
      </Profiles>
    </>
  );
}
