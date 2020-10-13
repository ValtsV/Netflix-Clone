import React, { useContext, useState } from "react";
import { SelectProfileContainer } from "./SelectProfileContainer";
import { FirebaseContext } from "../context/Firebase";
import Loading from "../components/Loading";
import Header from "../components/Header";
import * as ROUTES from "../routes/Routes";
import logo from "../fixtures/logo.svg";

export function BrowseContainer({ slides }) {
  const { firebase } = useContext(FirebaseContext);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const user = firebase.auth().currentUser || {};

  console.log(loading);
  console.log(profile.displayName);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1" noShowOnSmall>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink>Series</Header.TextLink>
            <Header.TextLink>Films</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureTitle>Ver Joker Ahora</Header.FeatureTitle>
          <Header.Text>
            Arthur Fleck, un hombre con un problema neurológico, es ignorado y
            maltratado por la ciudad de Gotham. Una serie de trágicos
            acontecimientos hacen crecer su ira contra la sociedad
          </Header.Text>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer
      user={user}
      setProfile={setProfile}
      setLoading={setLoading}
    />
  );
}
