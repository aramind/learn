import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";

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
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
    </div>
  );
}

export default App;
