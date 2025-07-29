/**
 * AuthContext for TaskPilot
 * Provides user authentication state and helpers (login/logout)
 */

import React, { createContext, useContext, useState } from "react";

// PUBLIC_INTERFACE
export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

// PUBLIC_INTERFACE
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // In real: send credentials to backend
  const login = async (email, password) => {
    // placeholder logic
    // e.g. await api.post('/auth/login', { email, password });
    setUser({
      email,
      role: email === "admin@team.com" ? "admin" : "user",
      name: "Demo User",
    });
    localStorage.setItem("access_token", "demo-token");
    return true;
  };

  // PUBLIC_INTERFACE
  const logout = () => {
    setUser(null);
    localStorage.removeItem("access_token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
