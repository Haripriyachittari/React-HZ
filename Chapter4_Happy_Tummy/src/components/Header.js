import { AiOutlineShoppingCart, AiFillStar } from "react-icons/ai";

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
  return (
    <div className="header">
      <Logo />
      <div className="nav-items">
        <ul className="nav-links">
          <li className="nav-link mobile">
            <a href="/" className="hover">
              Home
            </a>
          </li>
          <li className="nav-link mobile">
            <a href="/" className="hover">
              About
            </a>
          </li>
          <li className="nav-link mobile">
            <a href="/" className="hover">
              Contact
            </a>
          </li>
          <li className="nav-link">
            <a href="/">Cart</a>
          </li>
          <li className="nav-link">
            <a href="/">Log in</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
