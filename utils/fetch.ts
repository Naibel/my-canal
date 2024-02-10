import { APIMovie, APIResponse, APITVSeries } from "@_types/api";
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";

//----FETCHING FUNCTIONS----
export const fetch = async (endpoint: string, params?: any) => {
  try {
    const response = await axios.get(API_URL + endpoint, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`,
      },
      params,
    });
    const data = response.data;
    if (data) return data;
  } catch (err) {
    return err;
  }
};

export const fetchTrendingMovies = async (): Promise<APIResponse<APIMovie>> => {
  return await fetch("/trending/movie/day?language=en-US");
};

export const fetchTrendingSeries = async (): Promise<
  APIResponse<APITVSeries>
> => {
  return await fetch("/trending/tv/day?language=en-US");
};

export const searchMovies = async (
  query: string
): Promise<APIResponse<APIMovie>> => {
  return await fetch("/search/movie", { query });
};

export const searchTVSeries = async (
  query: string
): Promise<APIResponse<APITVSeries>> => {
  return await fetch("/search/tv", { query });
};
//
