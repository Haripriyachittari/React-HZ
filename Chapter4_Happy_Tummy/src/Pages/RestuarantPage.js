import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerCard from "../components/ShimmerCard";
import { IMG_CDN_LINK } from "../config";
import useRestuarant from "../utils/useRestuarant";

const RestuarantPage = () => {
  const { id } = useParams();
  const restaurant = useRestuarant(id);

  // console.log(restaurant?.menu.items);

  return !restaurant ? (
    <ShimmerCard />
  ) : (
    <div>
      Restuarant : {restaurant?.name}
      <img
        src={IMG_CDN_LINK + restaurant?.cloudinaryImageId}
        alt={restaurant?.name}
      />
      <div>
        {Object.values(restaurant.menu.items).map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </div>
    </div>
  );
};

export default RestuarantPage;
