import { useQuery } from "@tanstack/react-query";

import { Title } from "~/components";
import { useModalFunctions } from "~/hooks";
import { getTrending } from "~/utils/fetch";

import Carousel from "./components/Carousel";
import CarouselSkeleton from "./components/CarouselSkeleton";

const Trending = () => {
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
    <>
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
    </>
  );
};

export default Trending;
