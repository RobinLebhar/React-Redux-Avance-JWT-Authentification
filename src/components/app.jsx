

import { Route, Switch } from "react-router-dom";
import React from "react";
import Ressources from "../containers/ressources"
import SigninForm from "./signin";
import Signout from "./signout"
import requireAuth from '../helpers/require-authentification';
import Home from "./home";
import Header from '../containers/header';
import Signup from "./signup"
require("../style.css");

const App = () => {
  return (
    <div >
      <Header />
      <div className="container body_content">
        <Switch >
          <Route exact path="/" component={Home} />
          <Route path="/ressources" component={requireAuth(Ressources)} />
          <Route exact path="/signin" component={SigninForm} />
          <Route exact path="/signout" component={Signout} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
