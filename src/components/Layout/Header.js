import React, { useContext } from "react";
import styles from "./Header.module.css";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { CartContext } from "../../store/cart-context";
import { UserContext } from "../../store/user-context";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserContext);

  const authenticationHandler = (event) => {
    if (userCtx.user) {
      signOut(auth);
    }
  };

  const cartItemNumber = cartCtx.items.reduce((currentVal, item) => {
    return currentVal + item.amount;
  }, 0);

  return (
    <div className={styles.header}>
      <Link to="/">
        <img
          className={styles.header__logo}
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Icon"
        />
      </Link>
      <div className={styles.header__search}>
        <input type="text" className={styles.header__searchInput} />
        <SearchIcon className={styles.header__searchIcon} />
      </div>
      <div className={styles.header__nav}>
        <Link to={!userCtx.user && "/login"}>
          <div
            className={styles.header__option}
            onClick={authenticationHandler}
          >
            <span className={styles.header__optionLineOne}>
              Hello, {userCtx.user ? userCtx.user.email : "Guest"}
            </span>
            <span className={styles.header__optionLineTwo}>
              {userCtx.user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className={styles.header__option}>
          <span className={styles.header__optionLineOne}>Returns</span>
          <span className={styles.header__optionLineTwo}>& Orders</span>
        </div>
        <div className={styles.header__option}>
          <span className={styles.header__optionLineOne}>Your</span>
          <span className={styles.header__optionLineTwo}>Prime</span>
        </div>
        <Link to="/checkout">
          <div className={styles.header__optionCart}>
            <ShoppingBasketIcon />
            <span
              className={`${styles.header__optionLineTwo} ${styles.header__cartItemCount}`}
            >
              {cartItemNumber}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
