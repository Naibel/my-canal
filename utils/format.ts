import { ModalMovieDetails, ModalTVDetails } from "@_types";
import { APIMovieDetails, APISerieDetails } from "@_types/api";

//FORMAT FUNCTIONS
export const formatMovieData = (
  apiData: APIMovieDetails
): ModalMovieDetails => {
  let USDollar = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "USD",
  });

  return {
    bgImage: `https://image.tmdb.org/t/p/original${apiData.backdrop_path}`,
    boxOffice: apiData.revenue ? USDollar.format(apiData.revenue) : "",
    budget: apiData.budget ? USDollar.format(apiData.budget) : "",
    genres: apiData.genres,
    homepage: apiData.homepage,
    id: apiData.id,
    imdbUrl: `https://imdb.com/title/${apiData.imdb_id}`,
    mediaType: "movie",
    nbOfVotes: apiData.vote_count,
    overview: apiData.overview,
    originalTitle: apiData.original_title,
    productionCompanies: apiData.production_companies,
    rating: apiData.vote_average,
    releaseDate: new Date(apiData.release_date).toLocaleDateString("fr"),
    runtime: apiData.runtime,
    spokenLanguages: apiData.spoken_languages,
    status: apiData.status === "Released" ? "Déjà sorti" : "Pas encore sorti",
    tagline: apiData.tagline,
    title: apiData.title,
    yearOfRelease: new Date(apiData.release_date).getFullYear(),
  };
};

export const formatTVData = (apiData: APISerieDetails): ModalTVDetails => {
  const checkStatus = () => {
    if (apiData.in_production && apiData.status === "In Production")
      return "En cours de production";
    else if (apiData.in_production && apiData.status === "Returning Series")
      return "En cours de diffusion";
    else if (!apiData.in_production && apiData.status === "Ended")
      return "Diffusion terminée";
    else return "Inconnu";
  };
  return {
    bgImage: `https://image.tmdb.org/t/p/original${apiData.backdrop_path}`,
    createdBy: apiData.created_by,
    firstAirDate: new Date(apiData.first_air_date).toLocaleDateString("fr"),
    genres: apiData.genres,
    homepage: apiData.homepage,
    id: apiData.id,
    lastAirDate: apiData.last_air_date
      ? new Date(apiData.last_air_date).toLocaleDateString("fr")
      : "",
    lastEpisodeToAir: apiData.last_episode_to_air,
    mediaType: "tv",
    nextEpisodeToAir: apiData.next_episode_to_air,
    nbOfEpisodes: apiData.number_of_episodes,
    nbOfSeasons: apiData.number_of_seasons,
    nbOfVotes: apiData.vote_count,
    networks: apiData.networks,
    overview: apiData.overview,
    originalTitle: apiData.original_name,
    rating: apiData.vote_average,
    status: checkStatus(),
    tagline: apiData.tagline,
    title: apiData.name,
    yearOfRelease: new Date(apiData.first_air_date).getFullYear(),
    yearOfEnd: apiData.in_production
      ? undefined
      : new Date(apiData.last_air_date).getFullYear(),
  };
};
//
