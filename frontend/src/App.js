import "./App.css";
import React, { useState } from "react";
import Login from "./auth/Login";
import Dashboard from './components/Dashboard'
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return <div>
    {!loggedIn ? (
      <Login onLogin={(status) => setLoggedIn(status)} />
    ) : (
      <Dashboard />
    )}
  </div>;
}

export default App;
