import React from "react";
import { Route } from "react-router-dom";

export default (
  <Route>
    <Route exact path="/" />
    <Route exact path="/portfolio" />
    <Route exact path="/contact-me" />
    <Route exact path="/portfolio/:project" />
  </Route>
);
