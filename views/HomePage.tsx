"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetch, fetchTrendingMovies, fetchTrendingSeries } from "@utils/fetch";
import { formatMovieData, formatTVData } from "@utils/format";
import { ModalMovieDetails, ModalTVDetails } from "@_types";
import { APIMovieDetails, APISerieDetails } from "@_types/api";

import NavBar from "@components/NavBar/NavBar";
import Modal from "@components/Modal/Modal";
import HeaderTitle from "@components/HeaderTitle/HeaderTitle";
import CarouselSkeleton from "@components/Carousel/CarouselSkeleton/CarouselSkeleton";
import Carousel from "@components/Carousel/Carousel";

const HomePage = () => {
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
      const details: ModalMovieDetails = formatMovieData(res);
      setModalDetails(details);
    });
  };

  const handleOnTVItemClick = (id: number) => {
    fetch(`/tv/${id}`).then((res: APISerieDetails) => {
      const details: ModalTVDetails = formatTVData(res);
      setModalDetails(details);
    });
  };

  const handleClose = () => {
    setModalDetails(null);
  };

  return (
    <>
      {modalDetails !== null && (
        <Modal modalDetails={modalDetails} handleClose={handleClose} />
      )}
      <div className="flex flex-col h-screen">
        <NavBar />
        <main className="flex flex-1 flex-col p-5 gap-5">
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
      </div>
    </>
  );
};

export default HomePage;
