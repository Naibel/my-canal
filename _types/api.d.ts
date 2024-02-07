export type APIResponse = {
  page: number;
  results: any;
  total_pages: number;
  total_results: number;
};

export type APITrendingItem = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: Array<number>;
  id: number;
  origin_country: Array<string>;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

export type APITrendingItems = Array<APITrendingItem>;

export type APITrendingSerie = APITrendingItem & {
  media_type: "tv";
  first_air_date: string;
  name: string;
};
export type APITrendingSeries = Array<APITrendingSerie>;

export type APITrendingMovie = APITrendingItem & {
  media_type: "movie";
  release_date: string;
  title: string;
};
export type APITrendingMovies = Array<APITrendingMovie>;

export type APIItemDetails = {
  adult: boolean;
  backdrop_path: string;
  genres: Array<Genre>;
  homepage: string;
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<ProductionCompany>;
  production_countries: Array<ProductionCountry>;
  spoken_languages: Array<SpokenLanguages>;
  status: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
};

export type APIMovieDetails = APIItemDetails & {
  belongs_to_collection: BelongToCollection | null;
  budget: number;
  imdb_id: string;
  original_title: string;
  release_date: string;
  revenue: number;
  runtime: number;
  title: string;
  video: boolean;
};

export type APISerieDetails = APIItemDetails & {
  created_by: Array<any>;
  episode_run_time: Array<number>;
  first_air_date: string;
  in_production: boolean;
  languages: Array<string>;
  last_air_date: string;
  last_episode_to_air: EpisodeDetails;
  name: string;
  networks: Array<Network>;
  next_episode_to_air: EpisodeDetails;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: Array<string>;
  original_name: string;
  seasons: Array<Season>;
  type: string;
};

export type EpisodeDetails = {
  air_date: string;
  episode_number: number;
  episode_type: string;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  session_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
};

export type Network = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type Season = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
};

export type Genre = {
  id: number;
  name: string;
};

export type ProductionCompany = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

export type SpokenLanguages = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type BelongToCollection = {
  backdrop_path: string;
  id: number;
  name: string;
  poster_path: string;
};
