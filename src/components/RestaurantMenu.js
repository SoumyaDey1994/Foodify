import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
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
    // const menuItemsCategory = allMenuItems?.filter(item => item?.card?.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory').map(item => item?.card?.card);

    console.log(allMenuItems);
    console.log(menuItems);
    setRestaurantInfo(restaurantDetails);
    setMenu(menuItems);
  };

  if (restaurantInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    sla,
    locality,
  } = restaurantInfo;
  return (
    <div className="menu">
      <div className="restaurantInfo">
        <h1>{name}</h1>
        <p>{cuisines?.join(", ")}</p>
        <h4>
          ⭐ {avgRating} ({totalRatingsString}) :
          <span>{costForTwoMessage}</span>
        </h4>
        <p>
          <b>Outlet</b>: {locality}
        </p>
        <p>
          <b>ETA: </b> {sla.slaString}
        </p>
      </div>

      <div className="menu-container">
        {menu.map((menuItem) => (
          <div className="menu-card">
            <h2 className="menuItemHeading">{menuItem.title}</h2>
            {menuItem?.itemCards?.map((card) => (
              <div className="menuItemContainer">
                <h4 style={{ width: "300px" }}>{card?.card?.info?.name}</h4>
                <span style={{ paddingRight: "10px" }}>
                  <span>&#8377;</span>{" "}
                  {Math.floor(
                    (card?.card?.info?.price ||
                      card?.card?.info?.defaultPrice) / 100
                  )}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
