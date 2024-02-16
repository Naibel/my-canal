import {
  EpisodeDetails,
  Genre,
  ProductionCompany,
  SpokenLanguages,
} from "./api";

export type MediaType = "movie" | "tv";

export type ModalDetails = {
  mediaType: MediaType;
  id: number;
  header: ModalDetailsHeader;
  content: ModalDetailsContent;
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
