import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState([]);
  const [originalList, setOriginalList] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const API_URL =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&collection=83636&tags=&sortBy=&filters=&type=rcv2&offset=0&limt=50";

    const response = await fetch(API_URL);
    const data = await response.json();
    const resCards = data?.data?.cards
      .filter(
        (data) =>
          data?.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      )
      .map((data) => data.card.card);

    setOriginalList(resCards);
    setFilteredRestaurants(resCards);
  };

  const findTopRatedRes = () => {
    const filteredList = originalList.filter(
      (res) => res.info.avgRating >= 4.5
    );
    setFilteredRestaurants(filteredList);
  };

  const findRestaurants = () => {
    if (searchInput === "") {
      setFilteredRestaurants(originalList);
    }
    const filteredList = originalList.filter((res) =>
      res.info.name.toLowerCase().includes(searchInput)
    );
    setFilteredRestaurants(filteredList);
  };

  if (filteredRestaurants.length === 0) return <Shimmer />;

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          name="search"
          className="searchInput"
          placeholder="Find restaurant"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value.toLowerCase())}
        />
        <button className="searchBtn" onClick={() => findRestaurants()}>
          Search
        </button>
        <button className="topRatedRes" onClick={() => findTopRatedRes()}>
          Find Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            resData={restaurant.info}
            key={restaurant.info.id}
            link={restaurant.cta.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
