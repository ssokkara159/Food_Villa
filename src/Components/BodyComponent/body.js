import { restoData } from "../Constants/restoData";
import RestoCard from "../../RestoCard";
import { useState } from "react";

// import SearchComponent from "../SearchComponent/Search";\

const BodyComponent = () => {
  function filterData(searchText, restaurants) {
    const searchData = restaurants.filter((restaurant) => {
      return restaurant.data.name.includes(searchText);
    });
    console.log(searchData);
    return searchData;
  }

  const [restaurants, setRestaurants] = useState(restoData);
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="search here..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            console.log(data);
            setRestaurants(data);
          }}
        >
          click
        </button>
      </div>
      <div className="resto-card">
        {restaurants.map((details) => {
          return <RestoCard props={details.data} key={details.data.id} />;
        })}
      </div>
    </>
  );
};
export default BodyComponent;
