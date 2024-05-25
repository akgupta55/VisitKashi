import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchBar, setSearchBar] = useState(false);

  const addSearchBar = () => {
    if (window.scrollY >= 242) {
      setSearchBar(true);
    } else {
      setSearchBar(false);
    }
  };

  window.addEventListener("scroll", addSearchBar);

  return (
    <>
      <div className="navbar">
        <img className="logo" src={assets.logo} alt="" />
        <div className={searchBar ? "search" : "searchNone"}>
          <input type="search" placeholder="🔍 Search" />
        </div>
        <ul className="nav-center">
          <li className="nav-1">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-2">
            <Link to="/aboutUs">About-Us</Link>
          </li>
          <li className="nav-3">
            <Link to="/reviews">Reviews</Link>
          </li>
          <li className="nav-4">
            <Link to="/map">Map</Link>
          </li>
        </ul>
        <div className="nav-right">
          <button>
            <Link to="/login">Sign in</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
