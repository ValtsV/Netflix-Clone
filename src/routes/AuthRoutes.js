import React from "react";
import { Route, Redirect } from "react-router-dom";

export function IsUserRedirect({
  user,
  loggedInPath,
  children,
  ...otherProps
}) {
  return (
    <Route
      {...otherProps}
      render={() => {
        return !user ? children : <Redirect to={{ pathname: loggedInPath }} />;
      }}
    />
  );
}
