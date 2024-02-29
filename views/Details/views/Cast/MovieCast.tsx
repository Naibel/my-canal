import { useParams } from "next/navigation";

import useMovieDetails from "~/hooks/useMovieDetails";
import { PageParams } from "~/types/modal";

import Cast from "./Cast";

const MovieCast = () => {
  const params = useParams<PageParams>();

  const { data, isFetching, error } = useMovieDetails(params.id);
  return <Cast data={data} isFetching={isFetching} error={error} />;
};

export default MovieCast;
