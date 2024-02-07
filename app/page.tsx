"use client";
import NavBar from "@/components/NavBar/NavBar";
import List from "@components/List/List";
import Modal from "@components/Modal/Modal";
import { ModalDetails, ModalMovieDetails, ModalTVDetails } from "@_types";
import {
  APIMovieDetails,
  APIResponse,
  APISerieDetails,
  APITrendingMovies,
  APITrendingSeries,
} from "@_types/api";
import { Suspense, useEffect, useMemo, useState } from "react";

const urls: Array<string> = [
  "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
];

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTc5ZGZlOTA0MTJjNmI1N2VhODA2MjVmYmU4Y2Y1MSIsInN1YiI6IjY1YzBmNjI0YmYwOWQxMDE4NGE3YjYwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3m_L7c5iB9d_pgyVzZsAP6iwDT83qiZ8rT2jVynK1eo",
  },
};

export default function Home() {
  const [movies, setMovies] = useState<APITrendingMovies>([]);
  const [series, setSeries] = useState<APITrendingSeries>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalDisplayed, setIsModalDisplayed] = useState<boolean>(false);
  const [modalDetails, setModalDetails] = useState<
    ModalMovieDetails | ModalTVDetails | null
  >(null);

  const fetchPromises = urls.map((url) =>
    fetch(url, options).then((res: Response) => res.json())
  );

  useEffect(() => {
    Promise.all(fetchPromises)
      .then((responses: APIResponse[]) => {
        setSeries(responses[0].results);
        setMovies(responses[1].results);
      })
      .catch((err) => console.error("error:" + err));
  }, []);

  const handleOnMovieItemClick = (id: number) => {
    const fetchEndPoint = `https://api.themoviedb.org/3/movie/${id};`;
    fetch(fetchEndPoint, options)
      .then((res: Response) => res.json())
      .then((json: APIMovieDetails) => {
        console.log(json);
        const details: ModalMovieDetails = {
          bgImage: `https://image.tmdb.org/t/p/original${json.backdrop_path}`,
          homepage: json.homepage,
          id: json.id,
          mediaType: "movie",
          nbOfVotes: json.vote_count,
          overview: json.overview,
          originalTitle: json.original_title,
          rating: json.vote_average,
          title: json.title,
          yearOfRelease: new Date(json.release_date).getFullYear(),
        };
        setModalDetails(details);
        setIsModalDisplayed(true);
      });
  };

  const handleOnTVItemClick = (id: number) => {
    const fetchEndPoint = `https://api.themoviedb.org/3/tv/${id};`;
    fetch(fetchEndPoint, options)
      .then((res: Response) => res.json())
      .then((json: APISerieDetails) => {
        console.log(json);
        const details: ModalTVDetails = {
          bgImage: `https://image.tmdb.org/t/p/original${json.backdrop_path}`,
          firstAirDate: new Date(json.first_air_date).toLocaleDateString("fr"),
          homepage: json.homepage,
          id: json.id,
          lastAirDate: new Date(json.last_air_date).toLocaleDateString("fr"),
          mediaType: "tv",
          nbOfEpisodes: json.number_of_episodes,
          nbOfSeasons: json.number_of_seasons,
          nbOfVotes: json.vote_count,
          networks: json.networks,
          overview: json.overview,
          originalTitle: json.original_name,
          rating: json.vote_average,
          status:
            json.status === "Ended" ? "Terminée" : "En cours de diffusion",
          title: json.name,
          yearOfRelease: new Date(json.first_air_date).getFullYear(),
        };
        setModalDetails(details);
        setIsModalDisplayed(true);
      });
  };

  const handleClose = () => {
    setIsModalDisplayed(false);
    setModalDetails(null);
  };

  return (
    <>
      {isModalDisplayed && modalDetails !== null && (
        <Modal modalDetails={modalDetails} handleClose={handleClose} />
      )}
      <NavBar />
      <main className="flex flex-col py-20 px-5 gap-5">
        <Suspense fallback={<div className="bg-black">Loading</div>}>
          <List
            title="Les films du moment"
            data={movies}
            onClick={handleOnMovieItemClick}
          />
        </Suspense>

        <List
          title="Les séries du moment"
          data={series}
          onClick={handleOnTVItemClick}
        />
      </main>
      <footer className="bg-black px-5 py-3">Dorian Belhaj - 2024</footer>
    </>
  );
}
