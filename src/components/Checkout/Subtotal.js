import React from "react";
import styles from "./Subtotal.module.css";

import CurrencyFormat from "react-currency-format";

const Subtotal = (props) => {
  return (
    <div className={styles.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>{value}</strong>
            </p>
            <small className={styles.subtotal__gift}>
              <input type="Checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={12}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className={styles.btn}>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
