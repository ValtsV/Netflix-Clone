import React, { useContext, useState, useEffect } from "react";
import { SelectProfileContainer } from "./SelectProfileContainer";
import { FirebaseContext } from "../context/Firebase";
import Loading from "../components/Loading";
import Header from "../components/Header";

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
      <Header src="joker1">hello</Header>
    </>
  ) : (
    <SelectProfileContainer
      user={user}
      setProfile={setProfile}
      setLoading={setLoading}
    />
  );
}
