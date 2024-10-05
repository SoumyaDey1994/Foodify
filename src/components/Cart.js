import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Cart.module.css";
import MenuCategoryItemListAccr from "./MenuCategoryItemListAccr";
import { clearCart } from "../Store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.selectedCount * item.card.info.price) / 100,
    0
  );

  const handleClear = () => {
    dispatch(clearCart(cartItems));
  };

  return (
    <div className={styles.cart}>
      <h1>Checkout</h1>
      {cartItems.length > 0 ? (
        <div className={styles.cartItemWrapper}>
          <div className={styles.amount}>
            <h2>Total: Rs. {totalPrice}/-</h2>
            <button
              className={styles.clearCartBtn}
              onClick={() => handleClear()}
            >
              Clear Cart
            </button>
          </div>
          <div className={styles.cartItems}>
            <MenuCategoryItemListAccr items={cartItems} />
          </div>
        </div>
      ) : (
        <h3 data-testid="empty-cart">Cart is empty, please add items</h3>
      )}
    </div>
  );
};

export default Cart;
