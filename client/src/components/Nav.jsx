import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">
        <h4 className="navcontent">Home </h4>
      </Link>
      <Link to="/relationships">
        <h4 className="navcontent"> Relationships </h4>
      </Link>
      <Link to="/hospitality">
        <h4 className="navcontent"> Business/Hospitality </h4>
      </Link>
      <Link to="/road-rage">
        <h4 className="navcontent"> RoadRage</h4>
      </Link>
    </nav>
  );
}

export default Nav;
