import React, { useContext, useState, useEffect } from "react";
import Fuse from "fuse.js";
import { SelectProfileContainer } from "./SelectProfileContainer";
import { FirebaseContext } from "../context/Firebase";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Search from "../components/Search";
import FooterContainer from "./FooterContainer";
import * as ROUTES from "../routes/Routes";
import logo from "../fixtures/logo.svg";
import Card, { FeatureContext } from "../components/Card";
import Player from "../components/Player";
import CardFeature from "../components/CardFeature";

export function BrowseContainer({ slides }) {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  const [category, setCategory] = useState("series");
  const [slideRows, setSlideRows] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [profile.displayName]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.description", "data.title", "data.genre"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else setSlideRows(slides[category]);
    // eslint-disable-next-line
  }, [searchTerm]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1" noShowOnSmall>
        <Header.Frame fadeDown={true}>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink
              active={category === "series" && "true"}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "films" && "true"}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
          <Player>
            <Player.Button />
            <Player.Video src="/videos/bunny.mp4" />
          </Player>
        </Header.Feature>
        <Header.Frame fadeDown={false} />
      </Header>

      {!loading && (
        <Card.Group>
          {slideRows.map((slideItem) => (
            <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
              <Card.Title>{slideItem.title}</Card.Title>
              <Card.Entities>
                {slideItem.data.map((item) => (
                  <Card.Item key={item.docId} item={item}>
                    <Card.Image
                      src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                    />
                    <Card.Meta>
                      <Card.Subtitle>{item.title}</Card.Subtitle>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Meta>
                  </Card.Item>
                ))}
              </Card.Entities>

              <CardFeature category={category} context={FeatureContext}>
                <Player>
                  <Player.Button />
                  <Player.Video src="/videos/bunny.mp4" />
                </Player>
              </CardFeature>
            </Card>
          ))}
        </Card.Group>
      )}
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
