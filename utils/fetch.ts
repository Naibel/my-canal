import axios from "axios";

import { MediaType, ModalMovieDetails, ModalTVDetails } from "~/types";
import {
  APIMovie,
  APIMovieDetails,
  APIResponse,
  APITVSeries,
  APITVSeriesDetails,
} from "~/types/api";

import { DiscoverSearchForm } from "~/views/Discover/DiscoverContent";

import { formatMovieData, formatTVData } from "./format";

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

//GET FUNCTIONS
export const getTVDetails = async (
  id: number,
  onSuccess: (res: any) => void,
  onFailure: (error: any) => void
) => {
  fetch(`/tv/${id}`)
    .then((res: APITVSeriesDetails) => {
      const details: ModalTVDetails = formatTVData(res);
      onSuccess(details);
    })
    ?.catch((error: any) => {
      console.error(error);
      onFailure(error);
    });
};
export const getMovieDetails = async (
  id: number,
  onSuccess: (res: any) => void,
  onFailure: (error: any) => void
) => {
  fetch(`/movie/${id}`)
    .then((res: APIMovieDetails) => {
      const details: ModalMovieDetails = formatMovieData(res);
      onSuccess(details);
    })
    ?.catch((error: any) => {
      console.error(error);
      onFailure(error);
    });
};

//
