import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const bookingLink =
    "https://secure.helloalma.com/providers/julie-attalla/";

  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        <img
          src={logo}
          alt="Serene Corner Counseling"
          className="navbar-logo"
        />
      </Link>

      <div className="nav-menu">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/#services">Services</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
      </div>

      <a className="book-button" href={bookingLink}>
        Book a Session
      </a>
    </nav>
  );
}

export default Navbar;