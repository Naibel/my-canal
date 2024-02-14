import { useQuery } from "@tanstack/react-query";

import { getMovieDetails, getTrending, getTVDetails } from "~/utils/fetch";

import { useAlertStore, useModalStore } from "~/hooks";

import { Title } from "~/components";

import Carousel from "./components/Carousel";
import CarouselSkeleton from "./components/CarouselSkeleton";

const TrendingContent = () => {
  const { setModalDetails } = useModalStore();
  const { setAlertMessage } = useAlertStore();

  const moviesQuery = useQuery({
    queryKey: ["movies"],
    queryFn: () => getTrending("movie"),
  });
  const seriesQuery = useQuery({
    queryKey: ["series"],
    queryFn: () => getTrending("tv"),
  });

  const onTVItemClick = (id: number) => {
    getTVDetails(id, setModalDetails, (error: any) =>
      setAlertMessage({
        type: "error",
        message: error.message,
      })
    );
  };

  const onMovieItemClick = (id: number) => {
    getMovieDetails(id, setModalDetails, (error: any) =>
      setAlertMessage({
        type: "error",
        message: error.message,
      })
    );
  };

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

export default TrendingContent;
