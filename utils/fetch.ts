import axios from "axios";

import {
  APIMovie,
  APIMovieDetails,
  APIResponse,
  APITVSeries,
  APITVSeriesDetails,
} from "~/types/api";
import { MediaType, ModalMovieDetails, ModalTVDetails } from "~/types/modal";
import { DiscoverSearchForm } from "~/views/Discover/Discover";

import { formatMovieData, formatTVData } from "./format";

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
export const getDetails = async (
  pathname: string
): Promise<APIMovieDetails | APITVSeriesDetails> => {
  return await fetch(pathname.slice(0, -1), {
    language: "fr-FR",
  });
};

export const getTVDetails = async (
  id: number,
  onSuccess: (res: ModalTVDetails) => void,
  onFailure: (error: any) => void
) => {
  fetch(`/tv/${id}`, { language: "fr-FR" })
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
  onSuccess: (res: ModalMovieDetails) => void,
  onFailure: (error: any) => void
) => {
  fetch(`/movie/${id}`, { language: "fr-FR" })
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
