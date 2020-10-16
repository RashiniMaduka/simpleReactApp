import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");
  function handleUserNameChange(e) {
    setUsername(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function activeWelcome() {
    fetch(
      "https://d7tbmlp4xb.execute-api.us-west-2.amazonaws.com/dev/logintest",
      {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setStatus(result.success);
          console.log(status);
        },
        (error) => {
          console.log(error);
        }
      );

    if (status === true) {
      window.open("/Welcome/" + username);
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
