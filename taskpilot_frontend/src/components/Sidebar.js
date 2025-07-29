import React from "react";
import { NavLink } from "react-router-dom";
import { COLORS } from "../theme";
import "./Sidebar.css";

/**
 * PUBLIC_INTERFACE
 * Sidebar component with navigation links
 */
export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar__logo">TaskPilot</div>
      <ul className="sidebar__nav">
        <li>
          <NavLink to="/dashboard" activeclassname="active">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/tasks" activeclassname="active">Tasks</NavLink>
        </li>
        <li>
          <NavLink to="/team" activeclassname="active">Team</NavLink>
        </li>
        <li>
          <NavLink to="/notifications" activeclassname="active">Notifications</NavLink>
        </li>
      </ul>
    </nav>
  );
}
