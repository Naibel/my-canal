export type ModalDetails = {
  bgImage: string;
  homepage: string;
  id: number;
  nbOfVotes: number;
  overview: string;
  originalTitle: string;
  rating: number;
  title: string;
  yearOfRelease: number;
};

export type ModalMovieDetails = ModalDetails & {
  mediaType: "movie";
};

export type ModalTVDetails = ModalDetails & {
  firstAirDate: string;
  lastAirDate: string;
  mediaType: "tv";
  networks: Array<Network>;
  nbOfEpisodes: number;
  nbOfSeasons: number;
  status: string;
};
