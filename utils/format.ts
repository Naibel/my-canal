import { ModalMovieDetails, ModalTVDetails } from "@_types";
import { APIMovieDetails, APISerieDetails } from "@_types/api";

//FORMAT FUNCTIONS
export const formatMovieData = (
  apiData: APIMovieDetails
): ModalMovieDetails => {
  return {
    bgImage: `https://image.tmdb.org/t/p/original${apiData.backdrop_path}`,
    homepage: apiData.homepage,
    id: apiData.id,
    mediaType: "movie",
    nbOfVotes: apiData.vote_count,
    overview: apiData.overview,
    originalTitle: apiData.original_title,
    rating: apiData.vote_average,
    title: apiData.title,
    yearOfRelease: new Date(apiData.release_date).getFullYear(),
  };
};

export const formatTVData = (apiData: APISerieDetails): ModalTVDetails => {
  return {
    bgImage: `https://image.tmdb.org/t/p/original${apiData.backdrop_path}`,
    firstAirDate: new Date(apiData.first_air_date).toLocaleDateString("fr"),
    homepage: apiData.homepage,
    id: apiData.id,
    lastAirDate: new Date(apiData.last_air_date).toLocaleDateString("fr"),
    mediaType: "tv",
    nbOfEpisodes: apiData.number_of_episodes,
    nbOfSeasons: apiData.number_of_seasons,
    nbOfVotes: apiData.vote_count,
    networks: apiData.networks,
    overview: apiData.overview,
    originalTitle: apiData.original_name,
    rating: apiData.vote_average,
    status: apiData.status === "Ended" ? "Terminée" : "En cours de diffusion",
    title: apiData.name,
    yearOfRelease: new Date(apiData.first_air_date).getFullYear(),
  };
};
//
