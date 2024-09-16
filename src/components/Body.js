import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { TOP_RESTAURANT_RATING } from "../utils/constants";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState([]);
  const originalList = useRestaurantList();

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    setFilteredRestaurants(originalList);
  }, [originalList]);

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
            {restaurant.info.avgRating >= 4.3 ? (
              <PromotedRestaurantCard
                resData={restaurant.info}
                key={restaurant.info.id}
                link={restaurant.cta.link}
              />
            ) : (
              <RestaurantCard
                resData={restaurant.info}
                key={restaurant.info.id}
                link={restaurant.cta.link}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
