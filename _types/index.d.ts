import {
  EpisodeDetails,
  Genre,
  ProductionCompany,
  SpokenLanguages,
} from "./api";

export type ModalDetails = {
  bgImage?: string;
  genres: Array<Genre>;
  homepage: string;
  id: number;
  nbOfVotes: number;
  overview: string;
  originalTitle: string;
  rating: number;
  title: string;
  yearOfRelease: number;
  status: string;
  tagline: string;
  spokenLanguages: Array<SpokenLanguages>;
};

export type ModalMovieDetails = ModalDetails & {
  boxOffice: string;
  budget: string;
  imdbUrl?: string;
  mediaType: "movie";
  productionCompanies: Array<ProductionCompany>;
  releaseDate: string;
  runtime: number;
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
  yearOfEnd?: number;
};
