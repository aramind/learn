import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import SuperHeroes from "./components/SuperHeroes";
import RQSuperHeroes from "./components/RQSuperHeroes";
import RQSuperHero from "./components/RQSuperHero";
import ParallelQueriesPage from "./components/ParallelQueriesPage";
import DynamicParallel from "./components/DynamicParallel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/super-heroes",
    element: <SuperHeroes />,
  },
  {
    path: "/rq-super-heroes",
    element: <RQSuperHeroes />,
  },
  {
    path: "/rq-super-heroes/:heroId",
    element: <RQSuperHero />,
  },
  {
    path: "/rq-parallel",
    element: <ParallelQueriesPage />,
  },
  {
    path: "/rq-dynamic-parallel",
    element: <DynamicParallel heroId={[1, 3]} />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
