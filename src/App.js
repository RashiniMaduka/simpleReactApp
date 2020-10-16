import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Welcome from "./components/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Login />} />
        <Route exact path="/Welcome:username" component={() => <Welcome />} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
