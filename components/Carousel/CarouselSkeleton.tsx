import Item from "~/components/Item/Item";

import styles from "./Carousel.module.css";

const CarouselSkeleton = () => (
  <div className={styles.carousel_wrapper}>
    <div className={styles.carousel}>
      {[...Array(20)].map((item, index) => (
        <Item key={index} />
      ))}
    </div>
  </div>
);

export default CarouselSkeleton;
