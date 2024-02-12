import { Card } from "~/components";

import styles from "./Carousel.module.css";

export interface CarouselProps<T> {
  data: Array<T>;
  onClick: (id: number) => void;
}

const Carousel = <
  T extends { id: number; poster_path: string; name?: string; title?: string }
>({
  data,
  onClick,
}: CarouselProps<T>) => (
  <div className={styles.carousel_wrapper}>
    <div className={styles.carousel}>
      {data?.map((item: T) => (
        <Card
          key={item.id}
          poster={item.poster_path}
          onClick={() => onClick(item.id)}
          title={item.name || item.title || ""}
        />
      ))}
    </div>
  </div>
);

export default Carousel;
