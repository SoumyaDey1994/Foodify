import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  const findTopRatedRes = () => {
    const filteredList = filteredRestaurants.filter(
      (res) => res.info.avgRating >= 4.4
    );
    setFilteredRestaurants(filteredList);
  };

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          name="search"
          className="searchInput"
          placeholder="Find food or restaurant"
        />
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
