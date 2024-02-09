import Item from "@components/Item/Item";
import {
  APITrendingMovie,
  APITrendingMovies,
  APITrendingSerie,
  APITrendingSeries,
} from "@_types/api";
import styles from "./Carousel.module.css";

export interface CarouselProps {
  data: APITrendingMovies | APITrendingSeries;
  onClick: (id: number) => void;
}

const Carousel = ({ data, onClick }: CarouselProps) => (
  <div className={`${styles.carousel_wrapper} mt-4 overflow-x-auto`}>
    <div className={`${styles.carousel} flex gap-5`}>
      {data?.map((item: APITrendingMovie | APITrendingSerie) => (
        <Item
          key={item.id}
          poster={item.poster_path}
          onClick={() => onClick(item.id)}
        />
      ))}
    </div>
  </div>
);

export default Carousel;
