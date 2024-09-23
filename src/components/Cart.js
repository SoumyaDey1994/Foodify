import { useSelector } from "react-redux";
import styles from "../styles/Cart.module.css";
import MenuCategoryItemListAccr from "./MenuCategoryItemListAccr";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

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
