import { CircleHelp, Shell, Signpost } from "lucide-react";
import "../Styles/navbar.css";
export default function Navbar() {
  return (
    <div className="content navbar-container">
      <div className="navbar-left">
        <a href="/">
          <Signpost className="navbar-icon" />
        </a>
      </div>
      {/* <div className="navbar-middle">
        <h1>
          <i>lutheria</i>
        </h1>
      </div> */}
      <div className="navbar-right">
        <a href="/about">
          <CircleHelp className="navbar-icon" />
        </a>
      </div>
    </div>
  );
}
