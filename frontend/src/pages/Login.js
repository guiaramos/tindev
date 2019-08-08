import React from "react";
import logo from "../assets/logo-tindev.svg";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <form>
        <img src={logo} alt="Tindev" />
        <input placeholder="GitHub username" />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
