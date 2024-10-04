import styles from "../styles/AddMenuItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../Store/cartSlice";
import { useState } from "react";

const AddMenuItem = (props) => {
  const item = props.item;
  const cartItems = useSelector((store) => store.cart.items);
  const targetItem = cartItems.find(
    (cartItem) => cartItem.id === item?.card?.info?.id
  );
  const [selectedCount, setSelectedCount] = useState(
    targetItem?.selectedCount || item?.selectedCount || 0
  );

  const dispatch = useDispatch();

  const handleAddMenuItem = (item) => {
    // Dispatch an action
    setSelectedCount(selectedCount + 1);
    dispatch(addItem({ ...item, id: item?.card?.info?.id }));
  };

  const handleRemoveMenuItem = (item) => {
    // Dispatch an action
    setSelectedCount(selectedCount - 1);
    dispatch(removeItem({ ...item, id: item?.card?.info?.id }));
  };

  return (
    <div>
      {item.selectedCount > 0 || selectedCount > 0 ? (
        <div className={styles.itemSelectBtnGroup}>
          <button onClick={() => handleRemoveMenuItem(item)}>-</button>
          <span>{selectedCount}</span>
          <button onClick={() => handleAddMenuItem(item)}>+</button>
        </div>
      ) : (
        <button
          className={styles.addBtn}
          onClick={() => handleAddMenuItem(item)}
        >
          ADD
        </button>
      )}
    </div>
  );
};

export default AddMenuItem;
