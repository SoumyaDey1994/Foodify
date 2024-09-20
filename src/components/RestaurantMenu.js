import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import RestaurantMenuCategoryAccr from "./RestaurantMenuCategoryAccr";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import styles from "../styles/RestaurantMenu.module.css";

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
    <div>
      <div className={styles.restaurantInfo}>
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

      <div className={styles.menuContainer}>
        {menu.map((category) => (
          <RestaurantMenuCategory category={category} />
        ))}
      </div>

      {/* <div style={{ background: "#FOFOFO", width: "80%", margin: "auto" }}>
        {menu.map((category) => (
          <RestaurantMenuCategoryAccr category={category} />
        ))}
      </div> */}
    </div>
  );
};

export default RestaurantMenu;
