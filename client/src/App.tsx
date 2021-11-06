import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return <div className="App">{isLoggedIn ? <Dashboard /> : <SignUp />}</div>;
}

export default App;
