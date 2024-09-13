import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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
    setFilteredRestaurants(resCards);
  };

  const findTopRatedRes = () => {
    const filteredList = filteredRestaurants.filter(
      (res) => res.info.avgRating >= 4
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
