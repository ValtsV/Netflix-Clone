import React from "react";
import { JumbotronContainer } from "./containers/JumbotronContainer";
import { FooterContainer } from "./containers/FooterContainer";
import { FaqContainer } from "./containers/FaqContainer";

function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}

export default App;
