import { useEffect, useState } from "react";
import { RESTAURANT_LIST_URL } from "../utils/constants";

const useRestaurantList = () => {
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
  };

  return originalList;
};

export default useRestaurantList;
