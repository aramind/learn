import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

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
      <Greet name="Robin" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
