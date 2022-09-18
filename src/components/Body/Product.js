import React, { useContext } from "react";
import styles from "./Product.module.css";

import StarIcon from "@mui/icons-material/Star";
import { CartContext } from "../../store/cart-context";

const Product = (props) => {
  const cartCtx = useContext(CartContext);
  
  const addToCartHandler = () => {
    const item = {
      id: props.id,
      title: props.title,
      price: props.price,
      rating: props.rating,
      imageUrl: props.imageUrl,
    };

    cartCtx.addItem(item);
  };

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
      <button class={styles.btn} onClick={addToCartHandler}>Add to Basket</button>
    </div>
  );
};

export default Product;
