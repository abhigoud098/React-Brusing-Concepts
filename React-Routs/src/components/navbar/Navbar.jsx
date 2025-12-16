import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Blog App</h2>
      <div className="links">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
}

export default Navbar;
