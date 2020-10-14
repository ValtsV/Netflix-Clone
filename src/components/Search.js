import React, { useState } from "react";
import { Container, SearchIcon, SearchInput } from "./Search.styles";

export default function Search({ searchTerm, setSearchTerm, ...otherProps }) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Container {...otherProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Titulos, personas, géneros"
        active={searchActive}
      />
    </Container>
  );
}
