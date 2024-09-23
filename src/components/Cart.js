import { useSelector } from "react-redux";
import styles from "../styles/Cart.module.css";
import MenuCategoryItemListAccr from "./MenuCategoryItemListAccr";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // const itemFrequency = {};
  // cartItems?.forEach(item => {
  //   itemFrequency[item?.id] = itemFrequency[item?.id] ? itemFrequency[item?.id] + 1 : 1;
  // })
  // const uniqueCartItems = cartItems.filter((value, index, self) =>
  //   index === self.findIndex((t) => t.id === value.id)
  // );

  // const items = uniqueCartItems.map(item => ({...item, selectedCount: itemFrequency[item?.id]}));

  return (
    <div className={styles.cart}>
      <h1>Checkout</h1>
      <div className={styles.cartItems}>
        <MenuCategoryItemListAccr items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
