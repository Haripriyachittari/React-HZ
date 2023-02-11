import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_LINK } from "../config";
import { removeItem } from "../utils/CartSlice";

const Cart = () => {
  const cartitems = useSelector((store) => store.cart.items);
  console.log(cartitems.length);
  const dispatch = useDispatch();
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className=" flex flex-col justify-center items-center w-screen h-screen mt-[100px] ">
      {cartitems.length != 0 ? (
        <div className=" flex flex-col justify-center items-center  ">
          <h1 className="font-bold text-3xl text-orange-600 mb-10">
            Cart items
          </h1>
          {cartitems.map((cartItem, index) => {
            return (
              <div
                key={index}
                className="flex  justify-between items-center w-[400px]  rounded shadow-lg m-2 p-4"
              >
                <div>
                  <p className="font-bold text-2xl">{cartItem.name}</p>
                  {cartItem?.defaultPrice ? (
                    <p className="text-black font-bold font-monteserrat">
                      ₹{cartItem?.defaultPrice / 100}
                    </p>
                  ) : (
                    <p className="text-black font-bold font-monteserrat">
                      ₹{cartItem?.price / 100}
                    </p>
                  )}
                </div>
                <div>
                  {cartItem.cloudinaryImageId && (
                    <img
                      src={IMG_CDN_LINK + cartItem.cloudinaryImageId}
                      alt={cartItem.name}
                      className="w-20"
                    />
                  )}
                  <button className=" w-[100px] p-1 bg-green-600 text-white font-bold rounded border">
                    Add
                  </button>
                  <button
                    onClick={() => handleRemoveItem(cartItem)}
                    className=" w-[100px] p-1 bg-red-600 text-white font-bold rounded border"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center p-6">
          <h1 className="text-4xl text-gray-500 font-bold">Cart is empty!!!</h1>
          <p className="my-2 text-gray-500 font-thin font-raleway text-sm ">
            Good food is always cooking! Go ahead, order some yummy items from
            the menu.
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
