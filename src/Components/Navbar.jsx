import { Origami } from "lucide-react";
import "../Styles/navbar.css";
export default function Navbar() {
  return (
    <div className="content navbar-container">
      <div className="navbar-left">
        <a href="/">
          <Origami />
        </a>
      </div>
      <div className="navbar-right">
        <a href="/">About</a>
      </div>
    </div>
  );
}
