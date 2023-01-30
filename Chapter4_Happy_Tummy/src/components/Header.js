import { useState } from "react";

import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [userLog, setUserLog] = useState(false);

  const handleLog = () => {
    setUserLog(!userLog);
  };
  return (
    <div className="flex justify-between p-5 text-orange-600 bg-white  font-bold h-[80px] items-center shadow-lg w-full fixed top-0 z-20">
      <div>
        <Link to="/" className="text-3xl">
          <h1 className="font-monoton"> Feast</h1>
        </Link>
      </div>
      <div>
        <ul className=" hidden md:flex gap-2 ">
          <li className="hover:bg-orange-600 hover:text-white p-2 duration-300">
            <Link to="/">HOME</Link>
          </li>
          <li className="hover:bg-orange-600 hover:text-white p-2 duration-300">
            <Link to="/about" href="/">
              ABOUT US
            </Link>
          </li>

          <li className="hover:bg-orange-600 hover:text-white p-2 duration-300">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="hover:bg-orange-600 hover:text-white p-2 duration-300">
            <Link to="/contact">INSTAMART</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 items-center">
        <Link to="/">
          <FaShoppingCart size={28} />
        </Link>
        {userLog ? (
          <button
            onClick={handleLog}
            className=" bg-green-600 text-white p-2 w-[90px]  "
          >
            LOG OUT
          </button>
        ) : (
          <button
            onClick={handleLog}
            className="  p-2  bg-orange-600 w-[90px] text-white "
          >
            LOG IN
          </button>
        )}
      </div>
    </div>
  );
};
export default Header;
