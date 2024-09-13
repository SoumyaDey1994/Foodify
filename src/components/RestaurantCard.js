const THUMBNAIL_IMAGE_BASE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

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
    <div className="res-card" onClick={() => window.open(link, '_blank')}>
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
