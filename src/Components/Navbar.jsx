import { CircleHelp, Shell, Signpost } from "lucide-react";
import "../Styles/navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="content navbar-container">
      <div className="navbar-left">
        <Link to="/">
          <Signpost className="navbar-icon" />
        </Link>
      </div>
      {/* <div className="navbar-middle">
        <h1>
          <i>lutheria</i>
        </h1>
      </div> */}

      <div className="navbar-right">
        <Link to="/about">
          <CircleHelp className="navbar-icon" />
        </Link>
      </div>
    </div>
  );
}
