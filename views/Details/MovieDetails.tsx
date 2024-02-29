import { useParams } from "next/navigation";

import useMovieDetails from "~/hooks/useMovieDetails";
import { PageParams } from "~/types/modal";

import Details from "./Details";

const MovieDetails = () => {
  const params = useParams<PageParams>();

  const { data, isFetching, error } = useMovieDetails(params.id);

  return <Details data={data} isFetching={isFetching} error={error} />;
};

export default MovieDetails;
