import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import Carausal from "./Carausal";

import RestuarantCard from "./RestuarantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  //   let searchText = "KFC";
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [carausal, setCarausal] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allrestuarants, setAllRestuarants] = useState([]);
  const [filteredrestuarants, setFilteredRestuarants] = useState([]);
  const handleSearch = () => {
    const data = filterData(searchText, allrestuarants);
    setFilteredRestuarants(data);
  };

  const filterData = (searchText, restuarants) => {
    return restuarants.filter((res) =>
      res.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };
  useEffect(() => {
    fetchRestuarants();
  }, []);
  console.log(allrestuarants);
  console.log(filteredrestuarants);

  async function fetchRestuarants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.717111&lng=77.157598&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestuarants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestuarants(json?.data?.cards[2]?.data?.data?.cards);
    console.log(json?.data?.cards[1]?.data?.data?.cards);
    setCarausal(json?.data?.cards[1]?.data?.data?.cards);
  }
  console.log("render");

  return (
    <>
      <div className="section">
        {carausal.map((car) => (
          <Carausal {...car.data} key={car.data.bannerId} />
        ))}
      </div>

      <h1 className="description tag ">Order Delivery and Take-out</h1>
      <p className="description feast">Feast like a beast</p>

      <div className="searchbanner">
        <h3 className="search">{filteredrestuarants.length} RESTUARANTS</h3>
        <div className="search input">
          <input
            type="text"
            placeholder="Search your favorite restuarants..."
            className="search-bar"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button className="search-button" onClick={handleSearch}>
            <BiSearch size={20} />
          </button>
        </div>
      </div>

      {allrestuarants.length === 0 ? (
        <div className="shimmerList">
          {arr.map((a, index) => {
            return <Shimmer key={index} />;
          })}
        </div>
      ) : filteredrestuarants.length == 0 ? (
        <div className="restuarant-list notFound">
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/empty_404_3x_rgdw87"
            className="notfoundImage"
            alt="restuarnt not found"
          />
          <p>
            Uh-oh!!! Looks like the restuarant you are searching for doesn't
            exist,Please try again...
          </p>
          <button className="goback">
            <a href="/"> GO HOME</a>
          </button>
        </div>
      ) : (
        <div className="restuarant-list">
          {filteredrestuarants.map((restaurant) => {
            return (
              <div key={restaurant.data.id}>
                <RestuarantCard {...restaurant.data} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
