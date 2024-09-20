import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { TOP_RESTAURANT_RATING } from "../utils/constants";
import useRestaurantList from "../utils/useRestaurantList";
import styles from "../styles/Body.module.css";

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
    <div className={styles.body}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          name="search"
          className={styles.searchInput}
          placeholder="Find restaurant"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value.toLowerCase())}
        />
        <button className={styles.searchBtn} onClick={() => findRestaurants()}>
          Search
        </button>
        <button
          className={styles.topRatedRes}
          onClick={() => findTopRatedRes()}
        >
          Find Top Rated Restaurants
        </button>
      </div>

      <div className={styles.resContainer}>
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            className={styles.link}
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
