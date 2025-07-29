import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

/**
 * PUBLIC_INTERFACE
 * Login form for user authentication
 */
export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setErr("");
      await login(email, password);
      // navigation happens in top level (will redirect)
    } catch (e) {
      setErr("Login failed");
    }
  }

  return (
    <div className="login__wrapper">
      <form className="login__form" onSubmit={handleSubmit}>
        <h2 className="login__title">TaskPilot Login</h2>
        <input
          className="login__input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          className="login__input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className="login__btn" type="submit">
          Login
        </button>
        {err && <span className="login__err">{err}</span>}
      </form>
    </div>
  );
}
