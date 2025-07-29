import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Team from "./pages/Team";
import Notifications from "./pages/Notifications";
import Login from "./pages/Login";
import PrivateRoute from "./routing/PrivateRoute";
import "./App.css";
import "./components/Sidebar.css";
import "./components/TopBar.css";

// PUBLIC_INTERFACE
function AppShell() {
  // Theme toggle for completeness (light only for MVP)
  const [theme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Authenticated route wrapper
  const { isAuthenticated } = useAuth();

  return (
    <div className="tp-root">
      {/* Sidebar layout for main app */}
      {isAuthenticated && <Sidebar />}
      <main className="tp-main">
        {isAuthenticated && <TopBar />}
        <div className="tp-content">
          <Routes>
            {/* PUBLIC pages */}
            <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
            {/* PRIVATE section */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/tasks"
              element={
                <PrivateRoute>
                  <Tasks />
                </PrivateRoute>
              }
            />
            <Route
              path="/team"
              element={
                <PrivateRoute>
                  <Team />
                </PrivateRoute>
              }
            />
            <Route
              path="/notifications"
              element={
                <PrivateRoute>
                  <Notifications />
                </PrivateRoute>
              }
            />
            {/* Default: redirect based on auth */}
            <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

// PUBLIC_INTERFACE
function App() {
  return (
    <AuthProvider>
      <Router>
        <AppShell />
      </Router>
    </AuthProvider>
  );
}

export default App;
