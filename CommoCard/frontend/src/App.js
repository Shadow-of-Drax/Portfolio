import React, { useState } from "react";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <h1>Welcome to Signal Clone</h1>
      <Chat />
    </div>
  );
}

export default App;
