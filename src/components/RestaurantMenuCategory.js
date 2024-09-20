import styles from "../styles/RestaurantMenuCategory.module.css";

const RestaurantMenuCategory = (props) => {
  const { category } = props;
  return (
    <div className={styles.menuCard}>
      <h2 className={styles.menuItemHeading}>{category.title}</h2>
      {category?.itemCards?.map((card) => (
        <div className={styles.menuItemContainer}>
          <h4>{card?.card?.info?.name}</h4>
          <span>
            <span>&#8377;</span>{" "}
            {Math.floor(
              (card?.card?.info?.price || card?.card?.info?.defaultPrice) / 100
            )}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuCategory;
