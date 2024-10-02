import { THUMBNAIL_IMAGE_BASE_URL } from "../utils/constants";
import styles from "../styles/RestaurantCard.module.css";

const RestaurantCard = (props) => {
  const {
    id,
    areaName,
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = props?.resData;

  return (
    <div className={styles.resCard} data-testid="res-card">
      <img
        src={`${THUMBNAIL_IMAGE_BASE_URL}${cloudinaryImageId}`}
        className={styles.resLogo}
      />
      <h3>{name}</h3>
      <h4>
        ⭐ {avgRating} : <span>{sla?.slaString}</span>
      </h4>
      <h4>{costForTwo}</h4>
      <p>{cuisines?.join(", ")}</p>
      <p>{areaName}</p>
    </div>
  );
};

//Higher-order component to display Promoted label
export const withPromotedLabel = (Card) => {
  return (props) => {
    return (
      <>
        <label className={styles.topRatedLabel}>Top Rated</label>
        <Card {...props} />
      </>
    );
  };
};

export default RestaurantCard;
