import { useDispatch } from "react-redux";
import styles from "../styles/MenuCategoryItemListAccr.module.css";
import { THUMBNAIL_IMAGE_BASE_URL } from "../utils/constants";
import { addItem } from "../Store/cartSlice";

const MenuCategoryItemListAccr = (props) => {
  const dispatch = useDispatch();

  const handleAddMenuItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  const items = props.items;
  return (
    <div>
      {items.map((item) => {
        const { name, defaultPrice, price, description, imageId, id } =
          item.card.info;
        return (
          <div className={styles.menuItem} key={id}>
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
              <div>
                <button onClick={() => handleAddMenuItem(item)}>ADD</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuCategoryItemListAccr;
