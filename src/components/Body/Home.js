import styles from "./Home.module.css";
import Product from "./Product";

const Home = (props) => {
  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <div className={styles.home__imageBox}>
          <img
            className={styles.home__image}
            src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61p8fxhYxPL._QL85_V1_.jpg"
            alt="Home Background"
          />
        </div>
        <div className={styles.home__row}>
          <Product
            id={Math.random().toString()}
            title="Apple Watch"
            price={99.99}
            imageUrl="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKUQ3_VW_34FR+watch-45-alum-midnight-nc-7s_VW_34FR_WF_CO?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1632171067000%2C1631661671000"
            rating={3}
          ></Product>
          <Product
            id={Math.random().toString()}
            title="Samsung LED TV"
            price={599.99}
            imageUrl="https://images.samsung.com/is/image/samsung/tr-fhd-t5300-ue40t5300auxtk-frontblack-237104952?$650_519_PNG$"
            rating={2}
          />
        </div>

        <div className={styles.home__row}>
          <Product
            id={Math.random().toString()}
            title="iPhone 13"
            price={999.99}
            imageUrl="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1661782458693"
            rating={5}
          />
          <Product
            id={Math.random().toString()}
            title="NVIDIA RTX 3090 Graphics Card"
            price={1499.99}
            imageUrl="https://www.nvidia.com/content/dam/en-zz/Solutions/shop/1532541-gf-web-dmo-graphics-cards-3090-594x308.png"
            rating={5}
          />
          <Product
            id={Math.random().toString()}
            title="Sony PlayStation 5"
            price={999.99}
            imageUrl="https://cdn.akakce.com/sony/ps5-825-gb-ssd-z.jpg"
            rating={5}
          />
        </div>

        <div className={styles.home__row}>
          <Product
            id={Math.random().toString()}
            title="Samsung Galaxy S21"
            price={1299.99}
            imageUrl="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/131806-1-1_large.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
