import { Link, NavLink } from "react-router-dom";
import {
  useAddSuperHeroData,
  useSuperHeroesData,
} from "../hooks/useSuperHeroesData";
import { useState } from "react";

const onSuccess = (data) => {
  console.log("Perform side effect after fetching", data);
};

const onError = (error) => {
  console.log("Preform side effect after encountering error", error);
};

const select = (data) => {
  return data.data.map((h) => `${h.id}.${h.name} is ${h.alterEgo}`);
};

const RQSuperHeroes = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  const { isLoading, data, isError, error, refetch } = useSuperHeroesData(
    onSuccess,
    onError
  );

  const { mutate: addHero } = useAddSuperHeroData();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const handleAddHeroClick = () => {
    console.log({ name, alterEgo });
    const hero = { name, alterEgo };
    addHero(hero);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          placeholder="alter ego"
          onChange={(e) => setAlterEgo(e.target.value)}
        />
      </div>

      <br></br>
      <button onClick={handleAddHeroClick}>Add Hero</button>

      <button onClick={refetch}>Fetch Heroes</button>
      <h2>RQ Superheroes Page</h2>
      {data?.data.map((h) => {
        return (
          <p>
            <NavLink to={`/rq-super-heroes/${h.id}`}>{h.name}</NavLink>
          </p>
        );
      })}
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
};

export default RQSuperHeroes;
