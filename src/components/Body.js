import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { TOP_RESTAURANT_RATING } from "../utils/constants";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState([]);
  const [originalList, setOriginalList] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const response = await fetch(RESTAURANT_LIST_URL);
    const data = await response.json();
    const cards = data?.data?.cards;

    const restaurantCards = cards
      ?.filter(
        (data) =>
          data?.card?.card?.gridElements?.infoWithStyle["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle"
      )
      .map(
        (data) => data?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.[0];

    setOriginalList(restaurantCards);
    setFilteredRestaurants(restaurantCards);
  };

  const findTopRatedRes = () => {
    const filteredList = originalList.filter(
      (res) => res.info.avgRating >= TOP_RESTAURANT_RATING
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
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            className="link"
          >
            <RestaurantCard
              resData={restaurant.info}
              key={restaurant.info.id}
              link={restaurant.cta.link}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
