import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantInfo, menu] = useRestaurantMenu(resId);

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
