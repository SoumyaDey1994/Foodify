import styles from "../styles/MenuCategoryItemListAccr.module.css";
import { THUMBNAIL_IMAGE_BASE_URL } from "../utils/constants";
import AddMenuItem from "./AddMenuItem";

const MenuCategoryItemListAccr = (props) => {
  const items = props.items;
  return (
    <div>
      {items.map((item) => {
        const { name, defaultPrice, price, description, imageId, id } =
          item.card.info;
        return (
          <div className={styles.menuItem} key={id} data-testid="menu-item">
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
              <AddMenuItem item={item} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuCategoryItemListAccr;
