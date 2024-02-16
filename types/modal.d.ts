import {
  EpisodeDetails,
  Genre,
  ProductionCompany,
  SpokenLanguages,
} from "./api";

export type MediaType = "movie" | "tv";
export type MenuPage = "summary" | "seasons" | "moreInfo";

export interface ModalDetails {
  id: number;
  header: {
    bgImage?: string;
    nbOfVotes: number;
    originalTitle: string;
    rating: number;
    tagline: string;
    title: string;
    yearOfRelease: number;
  };
  moreInfo?: {
    productionCompanies: Array<ProductionCompany>;
  };
  sidebar: {
    homepage: string;
    spokenLanguages: Array<SpokenLanguages>;
    status: string;
  };
  summary: {
    genres: Array<Genre>;
    overview: string;
  };
}

export type ModalMovieDetails = ModalDetails & {
  mediaType: "movie";
  header: {
    runtime: string;
  };
  sidebar: {
    boxOffice: string;
    budget: string;
    imdbUrl?: string;
    releaseDate: string;
  };
};

export type ModalTVDetails = ModalDetails & {
  mediaType: "tv";
  header: {
    yearOfEnd?: number;
  };
  moreInfo?: {
    createdBy: Array<Person>;
    networks: Array<Network>;
  };
  sidebar: {
    firstAirDate: string;
    lastAirDate: string;
    nbOfEpisodes: number;
    nbOfSeasons: number;
  };
  seasons: Array<Season>;
  summary: {
    lastEpisodeToAir: EpisodeDetails;
    nextEpisodeToAir: EpisodeDetails;
  };
};
