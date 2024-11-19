import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <nav>
        <ul>
          <li>
            <Link to="/super-heroes">Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-super-heroes">RQ Super Heroes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
