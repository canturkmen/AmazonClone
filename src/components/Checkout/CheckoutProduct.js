import React from "react";
import styles from "./CheckoutProduct.module.css";

import StarIcon from "@mui/icons-material/Star";

const CheckoutProduct = (props) => {

  return (
    <li className={styles.checkoutProduct}>
      <div className={styles.checkoutProduct__imageBox}>
        <img
          className={styles.checkoutProduct__image}
          src={props.imageUrl}
          alt={props.title}
        />
      </div>
      <div className={styles.checkoutProduct__info}>
        <p className={styles.checkoutProduct__title}>{props.title}</p>
        <p>
          <small>$</small>
          <strong>{props.price} x {props.amount}</strong>
        </p>
        <div className={styles.checkoutProduct__rating}>
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <StarIcon />
            ))}
        </div>
        <button onClick={props.onRemoveItem}>Remove from basket</button>
      </div>
    </li>
  );
};

export default CheckoutProduct;
