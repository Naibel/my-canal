"use client";
import { ChangeEvent, useState } from "react";

import { fetch, searchMovies } from "@utils/fetch";
import { formatMovieData, formatTVData } from "@utils/format";
import { ModalMovieDetails, ModalTVDetails } from "@_types";
import { APIMovieDetails, APITVSeriesDetails } from "@_types/api";

import NavBar from "@components/NavBar/NavBar";
import Modal from "@components/Modal/Modal";
import SearchResults from "./SearchResults";
import Trending from "./Trending";
import { useQuery } from "@tanstack/react-query";
import useDebounce from "@hooks/useDebounce";

const HomePage = () => {
  const [modalDetails, setModalDetails] = useState<
    ModalMovieDetails | ModalTVDetails | null
  >(null);
  const [search, setSearch] = useState<string>("");

  const debouncedSearch = useDebounce(search, 300);

  const searchResultsData = useQuery({
    queryKey: ["search", debouncedSearch],
    queryFn: () => searchMovies(search),
  });

  const handleOnMovieItemClick = (id: number) => {
    fetch(`/movie/${id}`).then((res: APIMovieDetails) => {
      const details: ModalMovieDetails = formatMovieData(res);
      setModalDetails(details);
    });
  };

  const handleOnTVItemClick = (id: number) => {
    fetch(`/tv/${id}`).then((res: APITVSeriesDetails) => {
      const details: ModalTVDetails = formatTVData(res);
      setModalDetails(details);
    });
  };

  const handleClose = () => {
    setModalDetails(null);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <>
      {modalDetails !== null && (
        <Modal modalDetails={modalDetails} handleClose={handleClose} />
      )}
      <div className="flex flex-col h-screen">
        <NavBar onChange={handleChange} searchValue={search} />
        {search && searchResultsData.data?.results && (
          <div
            className={`absolute bg-black left-0 right-0 ${
              searchResultsData.data?.results.length === 0
                ? "top-0 bottom-0"
                : ""
            } top-16`}
          >
            <SearchResults
              results={searchResultsData.data.results}
              onClick={handleOnMovieItemClick}
            />
          </div>
        )}
        <Trending
          onMovieItemClick={handleOnMovieItemClick}
          onTVItemClick={handleOnTVItemClick}
        />

        <footer className="bg-black px-5 py-3">Dorian Belhaj - 2024</footer>
      </div>
    </>
  );
};

export default HomePage;
