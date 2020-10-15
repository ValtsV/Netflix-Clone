import React, { useState, useContext, createContext } from "react";
import ReactDOM from "react-dom";
import { Container, Button, Overlay, Inner, Close } from "./Player.styles";

export const PlayerContext = createContext();

export default function Player({ children, ...otherProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...otherProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...otherProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    showPlayer &&
    ReactDOM.createPortal(
      <Overlay onClick={() => setShowPlayer(false)}>
        <Inner>
          <video id="netflix-player" controls>
            <source src={src} type="video/mp4" />
          </video>
          <Close />
        </Inner>
      </Overlay>,
      document.body
    )
  );
};

Player.Button = function PlayerButton({ ...otherProps }) {
  const { setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)}>
      <svg viewBox="0 0 24 24">
        <path d="M6 4l15 8-15 8z" fill="currentColor"></path>
      </svg>
      Reproducir
    </Button>
  );
};
