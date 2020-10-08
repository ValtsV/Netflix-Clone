import React from "react";
import { FaqContainer } from "../containers/FaqContainer";
import { FooterContainer } from "../containers/FooterContainer";
import { JumbotronContainer } from "../containers/JumbotronContainer";

export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}
