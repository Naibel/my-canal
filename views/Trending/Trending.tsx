import { useQuery } from "@tanstack/react-query";

import { fetchTrendingMovies, fetchTrendingSeries } from "~/utils/fetch";

import Carousel from "~/components/Carousel/Carousel";
import CarouselSkeleton from "~/components/Carousel/CarouselSkeleton";
import HeaderTitle from "~/components/HeaderTitle/HeaderTitle";

const Trending = ({
  onMovieItemClick,
  onTVItemClick,
}: {
  onMovieItemClick: (id: number) => void;
  onTVItemClick: (id: number) => void;
}) => {
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
        <HeaderTitle>Les films du moment</HeaderTitle>
        {moviesQuery.isPending && <CarouselSkeleton />}
        {moviesQuery.data?.results && (
          <Carousel
            data={moviesQuery.data.results}
            onClick={onMovieItemClick}
          />
        )}
      </div>
      <div>
        <HeaderTitle>Les séries du moment</HeaderTitle>
        {seriesQuery.isPending && <CarouselSkeleton />}
        {seriesQuery.data?.results && (
          <Carousel data={seriesQuery.data.results} onClick={onTVItemClick} />
        )}
      </div>
    </main>
  );
};

export default Trending;
