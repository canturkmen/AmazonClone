import React, { useContext } from "react";
import styles from "./Subtotal.module.css";

import CurrencyFormat from "react-currency-format";
import { CartContext } from "../../store/cart-context";

const Subtotal = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemNumber = cartCtx.items.reduce((currentVal, item) => {
    return currentVal + item.amount;
  }, 0);

  return (
    <div className={styles.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cartItemNumber} items): <strong>{value}</strong>
            </p>
            <small className={styles.subtotal__gift}>
              <input type="Checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={cartCtx.totalAmount}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className={styles.btn}>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
