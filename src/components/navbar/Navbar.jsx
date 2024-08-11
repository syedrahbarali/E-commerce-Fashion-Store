import { useState } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation().pathname;
  console.log(location);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header">
      <div className="navbar container">
        {/* Logo */}
        <div className="logo">
          <Link to={"/"}>
            <img src="../../../public/assets/logo.png" alt="" />
          </Link>
        </div>

        {/* NavList */}
        <ul className={`nav-list ${showMenu ? "nav-list--active" : ""}`}>
          <li className="nav-item">
            {/* <a href="/">Home</a> */}
            <Link to={"/"}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us">Contact us</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
        </ul>

        <div className="auth">
          {loggedIn ? (
            <Link className="btn--primary" to="/sign-out">
              Sign out
            </Link>
          ) : (
            <Link
              className="btn--primary"
              to={`${
                location === "/auth/sign-in" ? "/auth/sign-up" : "/auth/sign-in"
              }`}
            >
              {location === "/auth/sign-in" ? "Sign up" : "Sign in"}
            </Link>
          )}

          {/* Menu */}
          <div className="menu">
            {showMenu ? (
              <IoClose onClick={toggleMenu} size={24} />
            ) : (
              <LuMenu onClick={toggleMenu} size={24} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
