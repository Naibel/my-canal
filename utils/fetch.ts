import axios from "axios";

export const fetch = async (endpoint: string) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3" + endpoint,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`,
        },
      }
    );
    const data = response.data;
    if (data) return data;
  } catch (err) {
    return err;
  }
};

export const fetchTrendingMovies = async () => {
  return await fetch("/trending/movie/day?language=en-US");
};

export const fetchTrendingSeries = async () => {
  return await fetch("/trending/tv/day?language=en-US");
};
