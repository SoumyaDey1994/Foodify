import styles from "../styles/MenuCategoryItemListAccr.module.css";
import { THUMBNAIL_IMAGE_BASE_URL } from "../utils/constants";

const MenuCategoryItemListAccr = (props) => {
  const items = props.items;
  return (
    <div>
      {items.map((item) => {
        const { name, defaultPrice, price, description, imageId } =
          item.card.info;
        return (
          <div className={styles.menuItem}>
            <div className={styles.itemDescription}>
              <h4>{name}</h4>
              <span>
                <span>&#8377;</span> {defaultPrice / 100 || price / 100}
              </span>
              <p>{description}</p>
            </div>
            <div className={styles.itemImage}>
              {imageId && (
                <img
                  src={`${THUMBNAIL_IMAGE_BASE_URL}${imageId}`}
                  alt="menuItemImage"
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuCategoryItemListAccr;
