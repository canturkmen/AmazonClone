import React from "react";
import styles from "./Layout.module.css";

import Header from "./Header";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <main className={styles.main}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
