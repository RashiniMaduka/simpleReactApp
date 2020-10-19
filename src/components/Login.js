import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");
  function handleUserNameChange(e) {
    setUsername(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       "https://d7tbmlp4xb.execute-api.us-west-2.amazonaws.com/dev/logintest"
  //     );
  //     setStatus(result.success);
  //   };
  //   fetchData();
  // }, []);

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
      history.push("/Welcome" );
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
      <button type="button" onClick={activeWelcome}>
        Login
      </button>
    </section>
  );
}
