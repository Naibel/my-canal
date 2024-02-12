"use client";
import { ChangeEvent, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { ModalMovieDetails, ModalTVDetails } from "~/types";
import { APIMovieDetails, APITVSeriesDetails } from "~/types/api";

import { fetch, search } from "~/utils/fetch";
import { formatMovieData, formatTVData } from "~/utils/format";

import useDebounce from "~/hooks/useDebounce";

import { NavBar } from "~/components";

import { Modal, SearchResults, Trending } from "~/views";

const HomePage = () => {
  const [modalDetails, setModalDetails] = useState<
    ModalMovieDetails | ModalTVDetails | null
  >(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchMediaType, setSearchMediaType] = useState<string>("movie");

  const debouncedSearch = useDebounce(searchValue, 300);

  const searchResultsData = useQuery({
    queryKey: ["searchValue", debouncedSearch],
    queryFn: () => search(searchValue, searchMediaType),
  });

  // TODO: N'utiliser qu'une fonction avec un type générique qui dispatchera le bon endpoint et la bonne fonction de formattage
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

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchMediaTypeChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    setSearchMediaType(event.target.value);
  };

  return (
    <>
      {modalDetails !== null && (
        <Modal modalDetails={modalDetails} handleClose={handleClose} />
      )}
      <div className="flex flex-col h-screen">
        <NavBar
          onChange={handleSearchChange}
          onSelectChange={handleSearchMediaTypeChange}
          searchValue={searchValue}
          searchMediaType={searchMediaType}
        />
        {searchValue && searchResultsData && (
          <SearchResults
            loading={searchResultsData.isPending}
            results={searchResultsData?.data?.results}
            onClick={
              searchMediaType === "tv"
                ? handleOnTVItemClick
                : handleOnMovieItemClick
            }
          />
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
