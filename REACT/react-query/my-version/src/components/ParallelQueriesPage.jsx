import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import SuperHeroes from "./SuperHeroes";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

const ParallelQueriesPage = () => {
  const { data: superHeroes } = useQuery("super-heroes", fetchSuperHeroes);
  const { data: friends } = useQuery("friends", fetchFriends);

  return (
    <div>
      ParallelQueriesPage
      <h2>FRIENDS:</h2>
      {friends?.data.map((f) => (
        <p>{f.name}</p>
      ))}
      <h2>Superheroes</h2>
      {superHeroes?.data.map((sh) => (
        <p>
          {sh.alterEgo} - {sh.name}
        </p>
      ))}
    </div>
  );
};

export default ParallelQueriesPage;
