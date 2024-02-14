import { useQuery } from "@tanstack/react-query";

import { getTrending } from "~/utils/fetch";

import { useModalFunctions } from "~/hooks";

import { Title } from "~/components";

import Carousel from "./components/Carousel";
import CarouselSkeleton from "./components/CarouselSkeleton";

const TrendingContent = () => {
  const { displayMovieModal, displayTVModal } = useModalFunctions();

  const moviesQuery = useQuery({
    queryKey: ["movies"],
    queryFn: () => getTrending("movie"),
  });
  const seriesQuery = useQuery({
    queryKey: ["series"],
    queryFn: () => getTrending("tv"),
  });

  return (
    <main className="flex flex-1 flex-col p-5 gap-5">
      <div>
        <Title size="large">Les films du moment</Title>
        {moviesQuery.isPending && <CarouselSkeleton />}
        {moviesQuery.data?.results && (
          <Carousel
            data={moviesQuery.data.results}
            onClick={displayMovieModal}
          />
        )}
      </div>
      <div>
        <Title size="large">Les séries du moment</Title>
        {seriesQuery.isPending && <CarouselSkeleton />}
        {seriesQuery.data?.results && (
          <Carousel data={seriesQuery.data.results} onClick={displayTVModal} />
        )}
      </div>
    </main>
  );
};

export default TrendingContent;
