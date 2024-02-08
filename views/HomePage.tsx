"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import NavBar from "@components/NavBar/NavBar";
import Modal from "@components/Modal/Modal";
import { fetch, fetchTrendingMovies, fetchTrendingSeries } from "@utils/fetch";
import { ModalMovieDetails, ModalTVDetails } from "@_types";
import { APIMovieDetails, APISerieDetails } from "@_types/api";
import HeaderTitle from "@components/HeaderTitle/HeaderTitle";
import CarouselSkeleton from "@components/Carousel/CarouselSkeleton/CarouselSkeleton";
import Carousel from "@components/Carousel/Carousel";

const HomePage = () => {
  const [isModalDisplayed, setIsModalDisplayed] = useState<boolean>(false);
  const [modalDetails, setModalDetails] = useState<
    ModalMovieDetails | ModalTVDetails | null
  >(null);

  const moviesQuery = useQuery({
    queryKey: ["movies"],
    queryFn: fetchTrendingMovies,
  });
  const seriesQuery = useQuery({
    queryKey: ["series"],
    queryFn: fetchTrendingSeries,
  });

  const handleOnMovieItemClick = (id: number) => {
    fetch(`/movie/${id}`).then((res: APIMovieDetails) => {
      const details: ModalMovieDetails = {
        bgImage: `https://image.tmdb.org/t/p/original${res.backdrop_path}`,
        homepage: res.homepage,
        id: res.id,
        mediaType: "movie",
        nbOfVotes: res.vote_count,
        overview: res.overview,
        originalTitle: res.original_title,
        rating: res.vote_average,
        title: res.title,
        yearOfRelease: new Date(res.release_date).getFullYear(),
      };
      setModalDetails(details);
      setIsModalDisplayed(true);
    });
  };

  const handleOnTVItemClick = (id: number) => {
    fetch(`/tv/${id}`).then((res: APISerieDetails) => {
      const details: ModalTVDetails = {
        bgImage: `https://image.tmdb.org/t/p/original${res.backdrop_path}`,
        firstAirDate: new Date(res.first_air_date).toLocaleDateString("fr"),
        homepage: res.homepage,
        id: res.id,
        lastAirDate: new Date(res.last_air_date).toLocaleDateString("fr"),
        mediaType: "tv",
        nbOfEpisodes: res.number_of_episodes,
        nbOfSeasons: res.number_of_seasons,
        nbOfVotes: res.vote_count,
        networks: res.networks,
        overview: res.overview,
        originalTitle: res.original_name,
        rating: res.vote_average,
        status: res.status === "Ended" ? "Terminée" : "En cours de diffusion",
        title: res.name,
        yearOfRelease: new Date(res.first_air_date).getFullYear(),
      };
      setModalDetails(details);
      setIsModalDisplayed(true);
    });
  };

  const handleClose = () => {
    setIsModalDisplayed(false);
    setModalDetails(null);
  };

  // if (isError) {
  //   return <span>Error: {error.message}</span>;
  // }

  return (
    <>
      {isModalDisplayed && modalDetails !== null && (
        <Modal modalDetails={modalDetails} handleClose={handleClose} />
      )}
      <NavBar />
      <main className="flex flex-col py-20 px-5 gap-5">
        <div>
          <HeaderTitle>Les films du moment</HeaderTitle>
          {moviesQuery.isPending && <CarouselSkeleton />}
          {moviesQuery.data?.results && (
            <Carousel
              data={moviesQuery.data.results}
              onClick={handleOnMovieItemClick}
            />
          )}
        </div>
        <div>
          <HeaderTitle>Les séries du moment</HeaderTitle>
          {seriesQuery.isPending && <CarouselSkeleton />}
          {seriesQuery.data?.results && (
            <Carousel
              data={seriesQuery.data.results}
              onClick={handleOnTVItemClick}
            />
          )}
        </div>
      </main>
      <footer className="bg-black px-5 py-3">Dorian Belhaj - 2024</footer>
    </>
  );
};

export default HomePage;
