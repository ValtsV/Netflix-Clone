import React from "react";
import { Route, Redirect } from "react-router-dom";

export function IfUserRedirect({
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

export function ProtectedRoute({ user, children, ...otherProps }) {
  return (
    <Route
      {...otherProps}
      render={({ location }) => {
        return user ? (
          children
        ) : (
          <Redirect to={{ pathname: "signin", state: { from: location } }} />
        );
      }}
    />
  );
}
