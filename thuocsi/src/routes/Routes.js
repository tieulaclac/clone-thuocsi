import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Cart, Products, Login, Register } from "../pages";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/products" component={Products} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}
