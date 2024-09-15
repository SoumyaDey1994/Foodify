import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const MENU_API_URL = RESTAURANT_MENU_URL + resId;
    const response = await fetch(MENU_API_URL);
    const data = await response.json();
    console.log("Restaurant menu fetched successfully");
    console.log(data);
  };

  return (
    <div className="menu">
      <h1>Restaurant Name</h1>
      <h2>Menu Items</h2>
      <ul>
        <li>Biryani</li>
        <li>Tandoori</li>
        <li>Chikken Tikka</li>
        <li>Lime Juice</li>
        <li>Salad</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
