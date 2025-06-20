import React from "react";
import "./App.css";

import Box from "./components/context/Box";
import ThemeContextProvider from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import User from "./components/context/User";
import Private from "./components/component-prop/Private";
import Profile from "./components/component-prop/Profile";

function App() {
  return (
    <div>
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default App;
