import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Secret from "../components/Secret";

import NoNav from "../components/NoNav";
import WithNav from "../components/WithNav";

import "../firebase/firebase";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path={"/secret"} component={Secret} exact={true} />
        <Route component={WithNav} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
