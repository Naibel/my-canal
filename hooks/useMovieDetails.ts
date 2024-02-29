import { useQuery } from "@tanstack/react-query";

import { APIMovieDetails, MovieDetails } from "~/types/api";
import { getMovieDetails } from "~/utils/fetch";

const useMovieDetails = (id: string) => {
  return useQuery<APIMovieDetails, unknown, MovieDetails>({
    queryKey: ["details"],
    queryFn: () => getMovieDetails(id),
    select: (data: APIMovieDetails) => {
      const result: MovieDetails = {
        ...data,
        media_type: "movie",
      };
      return result;
    },
  });
};

export default useMovieDetails;
