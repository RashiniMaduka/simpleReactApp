import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Welcome from "./components/Welcome";

function App() {
  const [username, setUsername] = useState("");
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Login setUsername={setUsername} username={username} />
          )}
        />
        <Route
          exact
          path="/Welcome"
          component={() => <Welcome username={username} />}
        />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
