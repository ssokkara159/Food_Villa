import { restoData } from "../Constants/restoData";
import RestoCard from "../../RestoCard";
import { useState, useEffect } from "react";

// import SearchComponent from "../SearchComponent/Search";\

const BodyComponent = () => {
  const [restaurants, setRestaurants] = useState(restoData);
  const [searchText, setSearchText] = useState("");

  function filterData(searchText, restaurants) {
    const searchData = restaurants.filter((restaurant) => {
      return restaurant.data.name.includes(searchText);
    });

    return searchData;
  }

  useEffect(() => {
    // Api call//
    getRestoData();
  }, []);

  async function getRestoData() {
    const rData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await rData.json();
    console.log(json);
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

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
        />
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
