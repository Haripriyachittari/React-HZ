import { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";

import { FaUserAlt, FaShoppingCart } from "react-icons/fa";

const Logo = () => {
  return (
    <a href="/">
      <img
        src="https://graphicdesigntucson.com/wp-content/uploads/2015/03/feast_display.jpg"
        alt="logo"
        className="logo"
      />
    </a>
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
            <a href="/">Home</a>
          </li>
          <li className="nav-link hidden ">
            <a href="/">About</a>
          </li>
          <li className="nav-link hidden">
            <a href="/">Contact</a>
          </li>
          <li className="nav-link">
            <a href="/">
              <FaShoppingCart size={28} />
            </a>
          </li>
          <button onClick={handleLog} className="log">
            {userLog ? (
              <p>
                Log out <FaUserAlt size={15} />
              </p>
            ) : (
              <p>Log in</p>
            )}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
