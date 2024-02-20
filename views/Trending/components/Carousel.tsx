import { useRef } from "react";
import { useRouter } from "next/navigation";

import { Card } from "~/components";
import { MediaType } from "~/types/modal";

import styles from "./Carousel.module.css";

export interface CarouselProps<T> {
  data: Array<T>;
  mediaType: MediaType;
}

const Carousel = <
  T extends { id: number; poster_path: string; name?: string; title?: string }
>({
  data,
  mediaType,
}: CarouselProps<T>) => {
  const router = useRouter();

  const goToDetailsPage = (mediaType: MediaType, id: number) => {
    router.push(`${mediaType}/${id}`);
  };

  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <div ref={carouselRef} className={styles.carousel_wrapper}>
        <div className={styles.carousel}>
          {data?.map((item: T) => (
            <Card
              key={"card_" + item.id}
              id={item.id}
              poster={item.poster_path}
              title={item.name || item.title || ""}
              onClick={() => goToDetailsPage(mediaType, item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
