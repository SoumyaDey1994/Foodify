import { useMemo } from "react";
import styles from "../styles/MenuCategoryItemListAccr.module.css";
import { THUMBNAIL_IMAGE_BASE_URL } from "../utils/constants";
import AddMenuItem from "./AddMenuItem";

const MenuCategoryItemListAccr = (props) => {
  const memoizedItems = useMemo(() => props.items, []);
  const items = useMemo(() => {
    let dish = memoizedItems
      .map((item) => {
        const price = item?.card?.info?.price || item?.card?.info?.defaultPrice;
        item.card.info.price = price;
        return item;
      })
      .sort((item1, item2) => {
        return item1.card.info.price > item2.card.info.price ? -1 : 1;
      });
    return dish;
  }, [memoizedItems]);

  return (
    <div>
      {items.map((item) => {
        const { name, price, description, imageId, id } = item.card.info;
        return (
          <div className={styles.menuItem} key={id} data-testid="menu-item">
            <div className={styles.itemDescription}>
              <h4>{name}</h4>
              <span>
                <span>&#8377;</span> {price / 100}
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
