import Item from "@components/Item/Item";
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
  <div className={`${styles.carousel_wrapper} mt-4 overflow-x-auto`}>
    <div className={`${styles.carousel} flex gap-5`}>
      {data?.map((item: T) => (
        <Item
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
