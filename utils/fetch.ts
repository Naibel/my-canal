import { APIResponse } from "@_types/api";
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";

//----FETCHING FUNCTIONS----
export const fetch = async (endpoint: string) => {
  try {
    const response = await axios.get(API_URL + endpoint, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`,
      },
    });
    const data = response.data;
    if (data) return data;
  } catch (err) {
    return err;
  }
};

export const fetchTrendingMovies = async (): Promise<APIResponse> => {
  return await fetch("/trending/movie/day?language=en-US");
};

export const fetchTrendingSeries = async (): Promise<APIResponse> => {
  return await fetch("/trending/tv/day?language=en-US");
};
//
