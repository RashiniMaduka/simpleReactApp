import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login({ username, setUsername }) {
  let history = useHistory();
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  function handleUserNameChange(e) {
    setUsername(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function activeWelcome() {
    fetch("https://jsonplaceholder.typicode.com/todos/" + username)
      .then((res) => res.json())
      .then(
        (result) => {
          setTitle(result.title);
          console.log(title);
        },
        (error) => {
          console.log(error);
        }
      );

    if (title === password) {
      window.open("/Welcome");
    } else {
      console.log("no route");
    }
  }

  return (
    <section>
      <label>
        UserName:
        <input value={username} onChange={handleUserNameChange} />
      </label>

      <label>
        Password:
        <input value={password} onChange={handlePasswordChange} />
      </label>
      <button onClick={activeWelcome}>Login</button>
    </section>
  );
}
