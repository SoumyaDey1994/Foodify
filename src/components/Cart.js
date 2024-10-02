import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Cart.module.css";
import MenuCategoryItemListAccr from "./MenuCategoryItemListAccr";
import { clearCart } from "../Store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart(cartItems));
  };

  return (
    <div className={styles.cart}>
      <h1>Checkout</h1>
      <button className={styles.clearCartBtn} onClick={() => handleClear()}>
        Clear Cart
      </button>
      {cartItems.length > 0 ? (
        <div className={styles.cartItems}>
          <MenuCategoryItemListAccr items={cartItems} />
        </div>
      ) : (
        <h3>Cart is empty, please add items</h3>
      )}
    </div>
  );
};

export default Cart;
