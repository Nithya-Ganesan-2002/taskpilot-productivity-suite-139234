import React from "react";
import { useAuth } from "../context/AuthContext";
import { COLORS } from "../theme";
import "./TopBar.css";

/**
 * PUBLIC_INTERFACE
 * Top bar: username, notifications, and logout shortcut.
 */
export default function TopBar() {
  const { user, logout } = useAuth();
  return (
    <div className="topbar">
      <div className="topbar__section" />
      <div className="topbar__section topbar__center"> {/* reserved for breadcrumb/title */}</div>
      <div className="topbar__section topbar__right">
        <span className="topbar__notify" title="Notifications">🔔</span>
        {user && (
          <>
            <span className="topbar__username">{user.name}</span>
            <button className="topbar__logout" onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
}
