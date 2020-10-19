import React from "react";
import { useLocation } from "react-router";

export default function Welcome() {
  function user() {
    let username = new URLSearchParams(useLocation).get("username");
    console.log("username");
    return username;
  }

  return (
    <section>
      <h1>Welcome </h1>
      <user/> 
    </section>
  );
}
