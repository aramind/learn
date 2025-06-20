import React from "react";
import "./App.css";

import Box from "./components/context/Box";
import ThemeContextProvider from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import User from "./components/context/User";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <User />
      </div>
    </UserContextProvider>
  );
}

export default App;
