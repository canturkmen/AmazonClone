import React, { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import styles from "./Checkout.module.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = (props) => {
  const cartCtx = useContext(CartContext);

  const removeCartItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <div className={styles.checkout}>
      <div className={styles.checkout__left}>
        <img
          src="https://m.media-amazon.com/images/G/01/FireTV/Inline/IDB_RatingLabel_NA._TTW_.jpg"
          alt="Checkout Ad"
        ></img>
        <div>
          <h1 className={styles.checkout__title}>Your Shopping Basket</h1>
          <ul className={styles.checkoutProductList}>
            {cartCtx.items.map((item) => {
              return (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  imageUrl={item.imageUrl}
                  price={item.price}
                  rating={item.rating}
                  amount={item.amount}
                  onRemoveItem={removeCartItemHandler.bind(null, item.id)}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
