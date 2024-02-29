export type APIResponse<T> = {
  page: number;
  results: Array<T>;
  total_pages: number;
  total_results: number;
};

export type APIError = {
  status_code: number;
  status_message: string;
  success: booleqn;
};

//TYPES FOR CAROUSEL ITEMS
export type APIDataItem = {
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

export type APITVSeries = APIDataItem & {
  media_type: "tv";
  first_air_date: string;
  name: string;
};

export type APIMovie = APIDataItem & {
  media_type: "movie";
  release_date: string;
  title: string;
};
//

//TYPES FOR DETAILS PAGE
export type APIDataItemDetails = {
  adult: boolean;
  backdrop_path: string | null;
  genres: Array<Object>;
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

export type APIMovieDetails = APIDataItemDetails & {
  credits: APIMovieCredits;
  belongs_to_collection: BelongToCollection | null;
  budget: number;
  imdb_id: string | null;
  keywords: {
    keywords: Array<Object>;
  };
  original_title: string;
  recommendations: APIResponse<APIMovie>;
  release_date: string;
  revenue: number;
  runtime: number;
  title: string;
  video: boolean;
};

export type MovieDetails = APIMovieDetails & {
  media_type: "movie";
};

export type APITVSeriesDetails = APIDataItemDetails & {
  aggregate_credits: APITVCredits;
  created_by: Array<Person>;
  episode_run_time: Array<number>;
  first_air_date: string;
  in_production: boolean;
  keywords: {
    results: Array<Object>;
  };
  languages: Array<string>;
  last_air_date: string;
  last_episode_to_air: EpisodeInfo;
  name: string;
  networks: Array<Network>;
  next_episode_to_air: EpisodeInfo | null;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: Array<string>;
  original_name: string;
  recommendations: APIResponse<APITVSeries>;
  seasons: Array<Season>;
  type: string;
};

export type TVSeriesDetails = APITVSeriesDetails & {
  media_type: "tv";
};
//

export type Person = {
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  profile_path: string;
};

export type EpisodeInfo = {
  air_date: string;
  episode_number: number;
  episode_type: string;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
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

export type Object = {
  id: number;
  name: string;
};

export type ProductionCompany = {
  id: number;
  logo_path: string | null;
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

export type APITVCredits = {
  cast: Array<CastTVPerson>;
  crew: Array<CrewTVPerson>;
  id: number;
};

export type TVCredits = APITVCredits & {
  media_type: "tv";
};

export type APIMovieCredits = {
  cast: Array<CastMoviePerson>;
  crew: Array<CrewMoviePerson>;
  id: number;
};

export type MovieCredits = APIMovieCredits & {
  media_type: "movie";
};

export type CastTVPerson = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
  roles: Array<Role>;
  total_episode_count: number;
};

export type CastMoviePerson = {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
};

export type Role = {
  credit_id: string;
  character: string;
  episode_count: number;
};

export type CrewTVPerson = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  jobs: Array<Job>;
  department: string;
  total_episode_count: number;
};

export type CrewMoviePerson = {
  adult: boolean;
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
};

export type Job = {
  credit_id: string;
  job: string;
  episode_count: string;
};

export type APIConfig = {
  images: {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: Array<string>;
    logo_sizes: Array<string>;
    poster_sizes: Array<string>;
    profile_sizes: Array<string>;
    still_sizes: Array<string>;
  };
  change_keys: Array<string>;
};
