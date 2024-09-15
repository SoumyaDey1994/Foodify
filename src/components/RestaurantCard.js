import { THUMBNAIL_IMAGE_BASE_URL } from "../utils/constants";

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

  const { link } = props;
  return (
    <div className="res-card">
      <img
        src={`${THUMBNAIL_IMAGE_BASE_URL}${cloudinaryImageId}`}
        className="res-logo"
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

export default RestaurantCard;
