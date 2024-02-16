import { ModalDetails } from "~/types";
import { APIMovieDetails, APITVSeriesDetails } from "~/types/api";

import { IMAGE_PREFIX_URL } from "./fetch";

export const formatDateToFrLocale = (time: string) => {
  return time ? new Date(time).toLocaleDateString("fr") : time;
};

export const formatToUSD = (sum: number) => {
  let USDollar = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "USD",
  });
  //using "replace" replaces false white spaces with actual blank strings
  return sum > 0
    ? USDollar.format(sum)
        .replace(/\u00a0/g, " ")
        .replace(/\u202f/g, " ")
    : "";
};

export const checkStatus = (inProduction: boolean, status: string) => {
  if (inProduction && status === "In Production")
    return "En cours de production";
  else if (inProduction && status === "Returning Series")
    return "En cours de diffusion";
  else if (!inProduction && status === "Ended") return "Production terminée";
  else return "Inconnu";
};

//FORMAT FUNCTIONS
export const formatMovieData = (apiData: APIMovieDetails): ModalDetails => {
  let modalData: ModalDetails = {
    mediaType: "movie",
    id: apiData.id,
    header: {
      bgImage: apiData.backdrop_path
        ? `${IMAGE_PREFIX_URL}${apiData.backdrop_path}`
        : null,
      nbOfVotes: apiData.vote_count,
      originalTitle: apiData.original_title,
      rating: apiData.vote_average,
      runtime: apiData.runtime + "'",
      tagline: apiData.tagline,
      title: apiData.title,
      yearOfRelease: new Date(apiData.release_date).getFullYear(),
    },
    content: {
      summary: {
        genres: apiData.genres,
        overview: apiData.overview,
      },
      sidebar: {
        boxOffice: formatToUSD(apiData.revenue),
        budget: formatToUSD(apiData.budget),
        homepage: apiData.homepage,
        imdbUrl: apiData.imdb_id
          ? `https://imdb.com/title/${apiData.imdb_id}`
          : undefined,
        releaseDate: formatDateToFrLocale(apiData.release_date),
        spokenLanguages: apiData.spoken_languages,
        status:
          apiData.status === "Released" ? "Déjà sorti" : "Pas encore sorti",
      },
    },
  };

  if (apiData.production_companies.length > 0) {
    modalData = {
      ...modalData,
      content: {
        ...modalData.content,
        moreInfo: {
          productionCompanies: apiData.production_companies,
        },
      },
    };
  }

  return modalData;
};

export const formatTVData = (apiData: APITVSeriesDetails): ModalDetails => {
  const { created_by, networks, production_companies } = apiData;
  let modalData: ModalDetails = {
    mediaType: "tv",
    id: apiData.id,
    header: {
      bgImage: apiData.backdrop_path
        ? `${IMAGE_PREFIX_URL}${apiData.backdrop_path}`
        : null,
      nbOfVotes: apiData.vote_count,
      originalTitle: apiData.original_name,
      rating: apiData.vote_average,
      tagline: apiData.tagline,
      title: apiData.name,
      yearOfRelease: new Date(apiData.first_air_date).getFullYear(),
      yearOfEnd:
        !apiData.in_production && apiData.last_air_date
          ? new Date(apiData.last_air_date).getFullYear()
          : undefined,
    },
    content: {
      summary: {
        genres: apiData.genres,
        lastEpisodeToAir: apiData.last_episode_to_air,
        nextEpisodeToAir: apiData.next_episode_to_air,
        overview: apiData.overview,
      },
      sidebar: {
        firstAirDate: formatDateToFrLocale(apiData.first_air_date),
        homepage: apiData.homepage,
        lastAirDate: apiData.last_air_date
          ? new Date(apiData.last_air_date).toLocaleDateString("fr")
          : "",
        nbOfEpisodes: apiData.number_of_episodes,
        nbOfSeasons: apiData.number_of_seasons,
        spokenLanguages: apiData.spoken_languages,
        status:
          apiData.status === "Released" ? "Déjà sorti" : "Pas encore sorti",
      },
      seasons: apiData.seasons,
    },
  };

  if (
    production_companies.length > 0 ||
    networks.length > 0 ||
    created_by.length > 0
  ) {
    modalData = {
      ...modalData,
      content: {
        ...modalData.content,
        moreInfo: {
          createdBy: created_by,
          networks: networks,
          productionCompanies: production_companies,
        },
      },
    };
  }
  return modalData;
};

//
