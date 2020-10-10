import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./routes/Routes";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Browse from "./pages/Browse";
import { IsUserRedirect } from "./routes/AuthRoutes";

function App() {
  const user = false;
  console.log(user);

  return (
    <Router>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        exact
        path={ROUTES.SIGN_IN}
      >
        <Signin />
      </IsUserRedirect>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.SIGN_IN} component={Signin} />
      <Route exact path={ROUTES.SIGN_UP} component={Signup} />
      <Route exact path={ROUTES.BROWSE} component={Browse} />
    </Router>
  );
}

export default App;
