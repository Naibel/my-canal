import { Card } from "~/components";

import styles from "./Carousel.module.css";

const CarouselSkeleton = () => (
  <div className={styles.carousel_wrapper}>
    <div className={styles.carousel}>
      {[...Array(20)].map((item, index) => (
        <Card isSkeleton key={"card_" + index} />
      ))}
    </div>
  </div>
);

export default CarouselSkeleton;
