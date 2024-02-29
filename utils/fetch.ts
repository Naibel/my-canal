import axios from "axios";

import {
  APIConfig,
  APIMovie,
  APIMovieCredits,
  APIMovieDetails,
  APIResponse,
  APITVCredits,
  APITVSeries,
  APITVSeriesDetails,
} from "~/types/api";
import { MediaType } from "~/types/modal";
import { DiscoverSearchForm } from "~/views/Discover/Discover";

const API_URL = "https://api.themoviedb.org/3";
export const IMAGE_PREFIX_URL = "https://image.tmdb.org/t/p/original";
export const IMAGE_W_342_PREFIX_URL = "https://image.tmdb.org/t/p/w342";

//----FETCHING FUNCTIONS----
export const fetch = async (endpoint: string, params?: any) => {
  const response = await axios.get(API_URL + endpoint, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`,
    },
    params,
  });
  const data = response.data;
  if (data) return data;
  //Errors will be checked only when calling this function
};

export const getConfigInfo = async (): Promise<APIResponse<any>> => {
  return await fetch(`/configuration`);
};

export const getTrending = async (
  mediaType: MediaType
): Promise<APIResponse<APIMovie | APITVSeries>> => {
  return await fetch(`/trending/${mediaType}/day?language=fr-FR`);
};

export const search = async (
  query: string,
  mediaType: MediaType
): Promise<APIResponse<APIMovie | APITVSeries>> => {
  return await fetch(`/search/${mediaType}?language=fr-FR`, { query });
};

export const discover = async (
  query: DiscoverSearchForm,
  mediaType: MediaType
): Promise<APIResponse<APIMovie | APITVSeries>> => {
  return await fetch(`/discover/${mediaType}`, {
    ...query,
  });
};
//

//----GET FUNCTIONS----
export const getAPIConfig = async (): Promise<APIConfig> => {
  return await fetch("/configuration");
};

export const getMovieDetails = async (id: string): Promise<APIMovieDetails> => {
  return await fetch("/movie/" + id, {
    language: "fr-FR",
    append_to_response: "credits,keywords,recommendations",
  });
};

export const getMovieCredits = async (id: string): Promise<APIMovieCredits> => {
  return await fetch("/movie/" + id + "/credits", {
    language: "fr-FR",
  });
};

export const getTVDetails = async (id: string): Promise<APITVSeriesDetails> => {
  return await fetch("/tv/" + id, {
    language: "fr-FR",
    append_to_response: "aggregate_credits,keywords,recommendations",
  });
};

export const getTVCredits = async (id: string): Promise<APITVCredits> => {
  return await fetch("/tv/" + id + "/aggregate_credits", {
    language: "fr-FR",
  });
};
