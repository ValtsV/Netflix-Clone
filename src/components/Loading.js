import React from "react";
import { Spinner, LockBody, ReleaseBody, Picture } from "./Loading.styles";

export default function Loading({ src, ...otherProps }) {
  return (
    <Spinner {...otherProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
