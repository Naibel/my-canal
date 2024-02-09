import Item from "@components/Item/Item";

import styles from "../Carousel.module.css";

const CarouselSkeleton = () => (
  <div className={`${styles.carousel_wrapper} mt-4 overflow-x-auto`}>
    <div className={`${styles.carousel} flex gap-5`}>
      {[...Array(20)].map((item, index) => (
        <Item key={index} />
      ))}
    </div>
  </div>
);

export default CarouselSkeleton;
