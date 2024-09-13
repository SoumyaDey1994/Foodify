import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          name="search"
          className="searchInput"
          placeholder="Find food or restaurant"
        />
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
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
