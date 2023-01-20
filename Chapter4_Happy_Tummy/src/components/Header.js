import { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";

import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src="https://graphicdesigntucson.com/wp-content/uploads/2015/03/feast_display.jpg"
        alt="logo"
        className="logo"
      />
    </Link>
  );
};

const Header = () => {
  const [userLog, setUserLog] = useState(false);

  const handleLog = () => {
    setUserLog(!userLog);
  };
  return (
    <div className="header">
      <Logo />
      <div className="nav-items">
        <ul className="nav-links">
          <li className="nav-link hidden">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link hidden ">
            <Link to="/about" href="/">
              About
            </Link>
          </li>
          <li className="nav-link hidden">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav-link">
            <Link to="/">
              <FaShoppingCart size={28} />
            </Link>
          </li>

          {userLog ? (
            <button onClick={handleLog} className="log logOut">
              Log out <FaUserAlt size={15} />
            </button>
          ) : (
            <button onClick={handleLog} className="log logIn">
              Log in
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Header;
