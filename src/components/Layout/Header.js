import React from "react";
import styles from "./Header.module.css";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Header = (props) => {
  return (
    <div className={styles.header}>
      <img
        className={styles.header__logo}
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Icon"
      />
      <div className={styles.header__search}>
        <input type="text" className={styles.header__searchInput} />
        <SearchIcon className={styles.header__searchIcon} />
      </div>
      <div className={styles.header__nav}>
        <div className={styles.header__option}>
          <span className={styles.header__optionLineOne}>Hello Guest</span>
          <span className={styles.header__optionLineTwo}>Sign In</span>
        </div>
        <div className={styles.header__option}>
          <span className={styles.header__optionLineOne}>Returns</span>
          <span className={styles.header__optionLineTwo}>& Orders</span>
        </div>
        <div className={styles.header__option}>
          <span className={styles.header__optionLineOne}>Your</span>
          <span className={styles.header__optionLineTwo}>Prime</span>
        </div>
        <div className={styles.header__optionCart}>
            <ShoppingBasketIcon />
            <span className={`${styles.header__optionLineTwo} ${styles.header__cartItemCount}`}>0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
