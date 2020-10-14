import React from "react";
import { BrowseContainer } from "../containers/BrowseContainer";
import useContent from "../hooks/use-content";
import selectionFilter from "../utils/selection-filter";

export default function Browse() {
  const { series } = useContent("series");
  console.log(series);
  const { films } = useContent("films");
  const slides = selectionFilter({ series, films });

  console.log(slides);

  return <BrowseContainer slides={slides} />;
}
