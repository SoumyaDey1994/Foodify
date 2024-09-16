import { useState, useEffect } from "react";
import { RESTAURANT_MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const MENU_API_URL = RESTAURANT_MENU_URL + resId;
    const response = await fetch(MENU_API_URL);
    const json = await response.json();
    console.log(json);

    const restaurantDetails = json?.data?.cards
      .filter(
        (item) =>
          item?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      )
      ?.map((item) => item?.card?.card?.info)?.[0];

    const allMenuItems = json?.data?.cards?.find((item) => item?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const menuItems = allMenuItems
      ?.filter(
        (item) =>
          item?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
      ?.map((item) => item?.card?.card);

    setRestaurantInfo(restaurantDetails);
    setMenu(menuItems);
  };

  return [restaurantInfo, menu];
};

export default useRestaurantMenu;
