import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_LINK } from "../config";
import useRestuarant from "../utils/useRestuarant";
import { AiFillStar } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";
import { BiFoodTag } from "react-icons/bi";
import ShimmerPage from "../components/ShimmerPage";

const RestuarantPage = () => {
  const [offer, setOffer] = useState();
  const { id } = useParams();
  const restaurant = useRestuarant(id);

  console.log(restaurant);

  useEffect(() => {
    setOffer(restaurant?.offerMeta);
  }, []);

  return !restaurant ? (
    <ShimmerPage />
  ) : (
    <div className="">
      <div className="mt-[78px] bg-orange-400  p-4 flex flex-col md:flex-row justify-between w-full text-white  ">
        <div className="flex flex-col md:flex-row gap-6 ">
          <img
            src={IMG_CDN_LINK + restaurant?.cloudinaryImageId}
            alt={restaurant?.name}
            className="w-[300px] border-4  border-white  mx-auto md:m-0"
          />
          <div className="mx-auto md:m-0 flex flex-col  ">
            <h1 className=" font-bold text-4xl md:mt-6 font-poppins ">
              {restaurant?.name}
            </h1>
            <h1>{restaurant?.cuisines.join(",")}</h1>
            <div className="flex gap-6 mt-10 ">
              <div>
                <div
                  className={
                    restaurant?.avgRating > 3
                      ? "flex justify-center rounded items-center text-xl bg-green-400"
                      : "flex justify-center rounded items-center text-xl bg-red-400"
                  }
                >
                  <AiFillStar className="text-yellow-300" />
                  <h1 className="font-bold">{restaurant?.avgRating}</h1>
                </div>

                <h1>{restaurant?.totalRatingsString}</h1>
              </div>

              <div>
                <div className="flex items-center">
                  <FaRupeeSign />
                  <h1 className="font-bold text-xl">
                    {restaurant?.costForTwo / 100}
                  </h1>
                </div>

                <h1>Cost for two</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="my-4 md:ml-[280px] p-4 ">
          <h1 className="font-bold text-orange-600">RECOMMENDED</h1>
          <p className="font-bold text-slate-600">
            {Object.values(restaurant?.menu?.items).length} ITEMS
          </p>
        </div>
        {Object.values(restaurant?.menu?.items).map((item) => (
          <div
            key={item.id}
            className="flex  mx-auto w-[100%] md:w-[60%] justify-between  p-4  border-b-2 hover:shadow-lg hover:bg-gray-100 "
          >
            <div className="">
              <p className="font-bold font-monteserrat">
                <span
                  className={
                    item?.attributes?.vegClassifier == "VEG"
                      ? "text-green-600 "
                      : "text-yellow-700"
                  }
                >
                  <BiFoodTag size={20} />
                </span>

                {item.name}
              </p>
              {item?.defaultPrice ? (
                <p className="font-monteserrat">₹{item?.defaultPrice / 100}</p>
              ) : (
                <p className="font-monteserrat">₹{item?.price / 100}</p>
              )}

              <p className="mt-5 font-poppins text-slate-500 text-sm w-[80%]">
                {item.description}
              </p>
            </div>
            <div className="flex flex-col">
              {item?.cloudinaryImageId && (
                <img
                  src={IMG_CDN_LINK + item?.cloudinaryImageId}
                  className=" w-20 md:w-40 rounded"
                />
              )}
              <button className="border-2 relative mt-2  mx-auto  py-1 px-6 text-green-600 font-bold hover:bg-green-600 hover:text-white">
                ADD+
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestuarantPage;
