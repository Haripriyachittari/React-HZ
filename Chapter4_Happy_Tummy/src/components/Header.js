import { useState, useContext } from "react";

import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [userLog, setUserLog] = useState(false);
  const { user, setUser } = useContext(UserContext);

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
            <Link to="/about">ABOUT US</Link>
          </li>

          <li className="hover:bg-orange-600 hover:text-white p-2 duration-300">
            <Link to="/instamart">INSTAMART </Link>
          </li>
          <li className="hover:bg-orange-600 hover:text-white p-2 duration-300">
            <Link to="/">{user.name}</Link>
          </li>
          <li className=" border border-orange-600 p-2 duration-300">
            <input
              value={user.name}
              onChange={(e) =>
                setUser({
                  ...user,
                  name: e.target.value,
                })
              }
            ></input>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 items-center group/cart ">
        <Link to="/cart" className=" cursor-pointer ">
          <FaShoppingCart size={28} />
        </Link>
        <div className="invisible group-hover/cart:visible  absolute right-6 top-20   w-[250px] bg-white  shadow shadow-orange-500  rounded p-4 ">
          <h1 className="text-3xl text-gray-500">Cart is empty!!!</h1>
          <p className="my-2 text-gray-500 font-thin font-raleway text-sm ">
            Good food is always cooking! Go ahead, order some yummy items from
            the menu.
          </p>
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
