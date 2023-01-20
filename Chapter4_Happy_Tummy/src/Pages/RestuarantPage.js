import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerCard from "../components/ShimmerCard";
import { IMG_CDN_LINK } from "../config";

const RestuarantPage = () => {
  const [restaurant, setRestuarant] = useState();
  console.log(useState());

  const { id } = useParams();

  const getRestuarantDetails = async () => {
    const res = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=12.277186&lng=76.640448&menuId=${id}`
    );
    const resJson = await res.json();
    // console.log(resJson);
    setRestuarant(resJson.data);
  };
  useEffect(() => {
    getRestuarantDetails();
  }, []);

  console.log(restaurant.menu.items);
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
