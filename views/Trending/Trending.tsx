import { useQuery } from "@tanstack/react-query";

import { fetchTrendingMovies, fetchTrendingSeries } from "~/utils/fetch";

import { Title } from "~/components";

import Carousel from "./components/Carousel";
import CarouselSkeleton from "./components/CarouselSkeleton";

type TrendingProps = {
  onMovieItemClick: (id: number) => void;
  onTVItemClick: (id: number) => void;
};

const Trending = ({ onMovieItemClick, onTVItemClick }: TrendingProps) => {
  const moviesQuery = useQuery({
    queryKey: ["movies"],
    queryFn: fetchTrendingMovies,
  });
  const seriesQuery = useQuery({
    queryKey: ["series"],
    queryFn: fetchTrendingSeries,
  });

  return (
    <main className="flex flex-1 flex-col p-5 gap-5">
      <div>
        <Title size="large">Les films du moment</Title>
        {moviesQuery.isPending && <CarouselSkeleton />}
        {moviesQuery.data?.results && (
          <Carousel
            data={moviesQuery.data.results}
            onClick={onMovieItemClick}
          />
        )}
      </div>
      <div>
        <Title size="large">Les séries du moment</Title>
        {seriesQuery.isPending && <CarouselSkeleton />}
        {seriesQuery.data?.results && (
          <Carousel data={seriesQuery.data.results} onClick={onTVItemClick} />
        )}
      </div>
    </main>
  );
};

export default Trending;
