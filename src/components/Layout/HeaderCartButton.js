import { useContext } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  const numberOfCartItem = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
