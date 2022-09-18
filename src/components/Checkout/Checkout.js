import React from "react";
import styles from "./Checkout.module.css";
import Subtotal from "./Subtotal";

const Checkout = (props) => {
  return (
    <div className={styles.checkout}>
      <div className={styles.checkout__left}>
        <img
          src="https://m.media-amazon.com/images/G/01/FireTV/Inline/IDB_RatingLabel_NA._TTW_.jpg"
          alt="Checkout Ad"
        ></img>
        <div>
          <h1 className={styles.checkout__title}>Your Shopping Basket</h1>
        </div>
      </div>
      <div>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
