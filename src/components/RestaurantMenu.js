import { useEffect } from "react";

const RestaurantMenu = async () => {
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const MENU_API_URL =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9485126&lng=77.71476779999999&restaurantId=928814&catalog_qa=undefined&submitAction=ENTER";

    const response = await fetch(MENU_API_URL);
    const data = await response.json();
    console.log("Restaurant menu fetched successfully");
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
