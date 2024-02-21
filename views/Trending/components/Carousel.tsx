import { useRef } from "react";
import Link from "next/link";

import { Card } from "~/components";
import { MediaType } from "~/types/modal";

import styles from "./Carousel.module.css";

export interface CarouselProps<T> {
  data: Array<T>;
}

const Carousel = <
  T extends {
    id: number;
    poster_path: string;
    media_type: MediaType;
    name?: string;
    title?: string;
  }
>({
  data,
}: CarouselProps<T>) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <div ref={carouselRef} className={styles.carousel_wrapper}>
        <div className={styles.carousel}>
          {data?.map((item: T) => (
            <Link
              key={"card_" + item.id}
              href={`/${item.media_type}/${item.id}`}
            >
              <Card
                poster={item.poster_path}
                title={item.name || item.title || ""}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
