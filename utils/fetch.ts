import axios from "axios";

import { MediaType } from "~/types";
import { APIMovie, APIResponse, APITVSeries } from "~/types/api";

import { DiscoverSearchForm } from "~/views/Discover/Discover";

const API_URL = "https://api.themoviedb.org/3";

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

export const getTrending = async (
  mediaType: MediaType
): Promise<APIResponse<APIMovie | APITVSeries>> => {
  return await fetch(`/trending/${mediaType}/day?language=en-US`);
};

export const search = async (
  query: string,
  mediaType: MediaType
): Promise<APIResponse<APIMovie | APITVSeries>> => {
  return await fetch(`/search/${mediaType}`, { query });
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
