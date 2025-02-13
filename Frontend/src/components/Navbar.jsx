import { Link } from "react-router-dom";
import { useState } from "react";
import "./css/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="container">
          {/* Logo on the Left */}
          <h1 className="logo">VibeMarket</h1>

          {/* Mobile Menu Toggle */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Navigation Links */}
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <ul className="nav-center">
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" onClick={() => setMenuOpen(false)}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/cart" onClick={() => setMenuOpen(false)}>
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li className="signup">
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
