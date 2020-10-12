import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as ROUTES from "./routes/Routes";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Browse from "./pages/Browse";
import { IfUserRedirect, ProtectedRoute } from "./routes/AuthRoutes";
import useAuthListener from "./hooks/use-auth-listener";

function App() {
  const { user } = useAuthListener();

  console.log(user);

  return (
    <Router>
      <Switch>
        <IfUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          exact
          path={ROUTES.SIGN_IN}
        >
          <Signin />
        </IfUserRedirect>
        <IfUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          exact
          path={ROUTES.SIGN_UP}
        >
          <Signup />
        </IfUserRedirect>
        <ProtectedRoute user={user} exact path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IfUserRedirect
          user={user}
          exact
          path={ROUTES.HOME}
          loggedInPath={ROUTES.BROWSE}
        >
          <Home />
        </IfUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
