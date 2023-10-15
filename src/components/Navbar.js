import { Link } from "react-router-dom";
import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/experience">Experiences</Link> |{" "}
        <Link to="/interest">Interests</Link> | <Link to="/skills">Skills</Link>{" "}
        | <Link to="/awards">Awards</Link>
      </nav>
    );
  }
}
export default Navbar;
