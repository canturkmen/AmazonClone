import React from "react";
import styles from "./Product.module.css";

import StarIcon from "@mui/icons-material/Star";

const Product = (props) => {
  return (
    <div className={styles.product}>
      <div className={styles.product__info}>
        <p>{props.title}</p>
        <p className={styles.product__price}>
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className={styles.product__rating}>
          {Array(props.rating).fill().map((_, i) => (
            <StarIcon />
          ))}
        </div>
      </div>
      <img
        class={styles.product__image}
        src={props.imageUrl}
        alt="Apple Watch"
      ></img>
      <button class={styles.btn}>Add to Basket</button>
    </div>
  );
};

export default Product;
