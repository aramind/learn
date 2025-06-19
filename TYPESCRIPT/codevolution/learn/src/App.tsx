import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";

const personName = {
  first: "Bruce",
  last: "Wayne",
};

const nameList = [
  { first: "Bruce", last: "Wayne" },
  { first: "Clark", last: "Kent" },
  { first: "Spider", last: "Man" },
];
function App() {
  return (
    <div className="App">
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Greet name="Robin" isLoggedIn={true} />
    </div>
  );
}

export default App;
