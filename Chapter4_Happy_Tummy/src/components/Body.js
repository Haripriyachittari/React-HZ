import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import restarauntList from "../../config";
import RestuarantCard from "./RestuarantCard";

const Body = () => {
  //   let searchText = "KFC";
  const [searchText, setSearchText] = useState("");
  const [restuarants, setRestuarants] = useState(restarauntList);
  const handleSearch = () => {
    const data = filterData(searchText, restuarants);
    setRestuarants(data);
  };

  const filterData = (searchText, restuarants) => {
    return restuarants.filter((res) =>
      res.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  return (
    <>
      <div className="section">
        <img
          className="sectionImage"
          src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
          alt="section image"
        />
        <div className="search">
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
        <h1 className="description tag ">Order Delivery and Take-out</h1>
        <p className="description feast">Feast like a beast</p>
      </div>
      <div className="restuarant-list">
        {restuarants.map((restaurant) => {
          return (
            <div key={restaurant.data.id}>
              <RestuarantCard {...restaurant.data} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Body;
