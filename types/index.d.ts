import {
  EpisodeDetails,
  Genre,
  ProductionCompany,
  SpokenLanguages,
} from "./api";

export type MediaType = "movie" | "tv";

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

export type ModalDetailsHeader = {
  bgImage: string | null;
  nbOfVotes: number;
  originalTitle: string;
  yearOfRelease: number;
  yearOfEnd?: number;
  rating: number;
  runtime?: string;
  tagline: string;
  title: string;
};

export type ModalDetailsContent = {
  sidebar: ModalDetailsSideBar;
  summary: ModalDetailsSummary;
  seasons?: Array<Season>;
  moreInfo?: ModalDetailsMoreInfo;
};

export type ModalDetailsSideBar = {
  boxOffice?: string;
  budget?: string;
  firstAirDate?: string;
  homepage?: string;
  imdbUrl?: string;
  lastAirDate?: string;
  nbOfEpisodes?: number;
  nbOfSeasons?: number;
  releaseDate?: string;
  spokenLanguages?: Array<SpokenLanguages>;
  status?: string;
};

export type ModalDetailsSummary = {
  genres: Array<Genre>;
  overview?: string;
  lastEpisodeToAir?: EpisodeDetails;
  nextEpisodeToAir?: EpisodeDetails;
};

export type ModalDetailsMoreInfo = {
  createdBy?: Array<Person>;
  networks?: Array<Network>;
  productionCompanies?: Array<ProductionCompany>;
};

export type ModalDetailsNew = {
  mediaType: MediaType;
  id: number;
  header: ModalDetailsHeader;
  content: ModalDetailsContent;
};
