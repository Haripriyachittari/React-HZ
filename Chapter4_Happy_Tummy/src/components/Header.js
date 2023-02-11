import { useState, useContext } from "react";

import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [userLog, setUserLog] = useState(false);
  const { toggle, toggleFunction } = useContext(UserContext);

  const handleLog = () => {
    setUserLog(!userLog);
  };

  return (
    <div
      className={
        toggle
          ? "flex justify-between p-5 text-orange-600 bg-black  font-bold h-[80px] items-center shadow-lg w-full fixed top-0 z-20"
          : "flex justify-between p-5 text-orange-600 bg-white  font-bold h-[80px] items-center shadow-lg w-full fixed top-0 z-20"
      }
    >
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
            <Link to="/about">ABOUT US</Link>
          </li>
          <li className="hover:bg-orange-600 hover:text-white p-2 duration-300">
            <Link to="/instamart">INSTAMART </Link>
          </li>

          <li className=" p-2 duration-300 rounded">
            <button onClick={() => toggleFunction()}>
              {toggle ? <CiLight size={25} /> : <MdDarkMode size={25} />}
            </button>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 items-center group/cart ">
        <Link to="/cart" className=" cursor-pointer ">
          <FaShoppingCart size={28} />
        </Link>
        <div className="  absolute right-28 top-1 w-[20px] bg-orange-600   rounded-full">
          <span className="text-white font-bold p-1">{cartItems.length}</span>
        </div>
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
