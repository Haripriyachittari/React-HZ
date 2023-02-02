import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import RestuarantCard from "./RestuarantCard";
import Error from "../Pages/Error";
import ShimmerCard from "./ShimmerCard";
import useOnline from "../utils/useOnline";
const filterData = (searchText, restuarants) => {
  return restuarants.filter((res) =>
    res.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

const Body = () => {
  //   let searchText = "KFC";

  const [searchText, setSearchText] = useState("");
  const [allrestuarants, setAllRestuarants] = useState([]);
  const [filteredrestuarants, setFilteredRestuarants] = useState([]);
  const handleSearch = () => {
    const data = filterData(searchText, allrestuarants);
    setFilteredRestuarants(data);
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
  }
  console.log("render");
  const stat = useOnline();
  console.log(stat);
  if (!stat) return <h1>you are offline</h1>;

  return (
    <>
      <div className="flex justify-center items-center p-2 mt-[100px] z-10 ">
        <input
          type="text"
          placeholder="Search your favorite restuarants..."
          className="border-2 p-2  w-[80%] md:w-[50%] border-orange-400 focus:outline-orange-600"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="bg-orange-600 text-white p-[10px] relative left-2"
          onClick={handleSearch}
        >
          <BiSearch size={23} />
        </button>
      </div>

      {allrestuarants.length === 0 ? (
        <div className="flex flex-wrap gap-x-4 gap-y-6  justify-center my-8 w-full md:w-[80%] mx-auto p-2">
          {Array(15)
            .fill("")
            .map((a, index) => {
              return <ShimmerCard key={index} />;
            })}
        </div>
      ) : filteredrestuarants.length == 0 ? (
        <Error err="Restuarant" />
      ) : (
        <div className="flex flex-wrap gap-x-4 gap-y-6  justify-center my-8  w-full md:w-[80%] mx-auto p-2">
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
