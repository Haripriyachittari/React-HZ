import { IMG_CDN_LINK } from "../config";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CiDiscount1 } from "react-icons/ci";

const RestuarantCard = ({
  name,
  avgRating,
  cloudinaryImageId,
  cuisines,
  slaString,
  costForTwoString,
  id,
  aggregatedDiscountInfo: { descriptionList },
}) => {
  return (
    <Link to={`/restuarant/${id}`}>
      <div className="  md:w-[300px]  h[420px] md:h-[380px] p-2 hover:shadow-md duration-300 overflow-hidden  group ">
        <img className="" src={IMG_CDN_LINK + cloudinaryImageId} alt="swiggy" />
        <div className="my-2">
          <h3 className="font-bold font-poppins">{name}</h3>
          <p className="text-sm font-raleway">{cuisines.join(",")}</p>
        </div>
        <div className="flex justify-between items-center font-monteserrat">
          {avgRating.includes("--") ? (
            <p>No Rating</p>
          ) : (
            <div
              className={
                avgRating >= 4
                  ? "bg-green-500  flex items-center px-1 text-white  text-sm"
                  : "bg-yellow-600  flex items-center px-1 text-white text-sm "
              }
            >
              <h4>{avgRating}</h4>
              <h4>
                <AiFillStar />
              </h4>
            </div>
          )}
          •{" "}
          <h4 className="text-[0.75rem] text-gray-500 font-bold  ">
            {slaString}
          </h4>{" "}
          •{" "}
          <h4 className="text-[0.75rem] text-gray-500 font-bold ">
            {costForTwoString}
          </h4>
        </div>
        <div className="  border-t mt-1 p-2 text-yellow-700    font-poppins text-[0.85rem] ">
          <p> {descriptionList.map((desc) => desc.meta)}</p>
        </div>
        <div className=" font-bold justify-center items-center  hidden border-t  p-2 text-yellow-700   font-poppins text-[0.9rem] group-hover:flex">
          <h3 className=" text-blue-700">QUICK VIEW</h3>
        </div>
      </div>
    </Link>
  );
};

export default RestuarantCard;
