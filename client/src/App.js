import React from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { Redirect, Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Contacts from "./components/Contancts/Contacts";

const App = () => {
  const token = useSelector((state) => state.user.token);
  return (
    <Switch>
      {token && <Route path="/contacts" component={Contacts} />}
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Redirect to="/login" />
    </Switch>
  );
};

export default App;
