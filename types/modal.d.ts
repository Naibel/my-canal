import {
  EpisodeDetails,
  Genre,
  ProductionCompany,
  SpokenLanguages,
} from "./api";

export type MediaType = "movie" | "tv";
export type MenuPage = "summary" | "seasons" | "more_info";

export type ModalDetails = {
  bgImage?: string;
  genres: Array<Genre>;
  homepage: string;
  id: number;
  nbOfVotes: number;
  overview: string;
  originalTitle: string;
  productionCompanies: Array<ProductionCompany>;
  rating: number;
  spokenLanguages: Array<SpokenLanguages>;
  status: string;
  tagline: string;
  title: string;
  yearOfRelease: number;
};

export type ModalMovieDetails = ModalDetails & {
  boxOffice: string;
  budget: string;
  imdbUrl?: string;
  mediaType: "movie";
  releaseDate: string;
  runtime: string;
};

export type ModalTVDetails = ModalDetails & {
  createdBy: Array<Person>;
  firstAirDate: string;
  lastAirDate: string;
  lastEpisodeToAir: EpisodeDetails;
  mediaType: "tv";
  networks: Array<Network>;
  nextEpisodeToAir: EpisodeDetails;
  nbOfEpisodes: number;
  nbOfSeasons: number;
  seasons: Array<Season>;
  yearOfEnd?: number;
};
