import { IMG_CDN_LINK } from "../../config";
import { AiFillStar } from "react-icons/ai";

const RestuarantCard = ({
  name,
  avgRating,
  cloudinaryImageId,
  cuisines,
  slaString,
  costForTwoString,
}) => {
  return (
    <div className="restuarant-card">
      <img
        className="restuarant-image"
        src={IMG_CDN_LINK + cloudinaryImageId}
        alt="swiggy"
      />
      <div>
        <h3 className="rest-name">{name}</h3>
        <p>{cuisines.join(",")}</p>
      </div>
      <div className="order">
        {avgRating.includes("--") ? (
          <p>No Rating</p>
        ) : (
          <div className={avgRating > 3 ? "goodRating" : "badRating"}>
            <h4 className="rating">
              {avgRating} <AiFillStar />
            </h4>
          </div>
        )}
        • <h4>{slaString}</h4> • <h4>{costForTwoString}</h4>
      </div>
      <button className="order-button">ORDER NOW</button>
    </div>
  );
};

export default RestuarantCard;
