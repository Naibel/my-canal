"use client";
import { ChangeEvent, useState } from "react";
import { createPortal } from "react-dom";
import { useQuery } from "@tanstack/react-query";

import { MediaType, ModalMovieDetails, ModalTVDetails } from "~/types";
import { APIMovieDetails, APITVSeriesDetails } from "~/types/api";

import { fetch, search } from "~/utils/fetch";
import { formatMovieData, formatTVData } from "~/utils/format";

import useDebounce from "~/hooks/useDebounce";
import useStore from "~/hooks/useStore";

import { Alert, NavBar } from "~/components";
import { PageType } from "~/components/NavBar/NavBar";

import { Discover, Modal, SearchResults, Trending } from "~/views";

const HomePage = () => {
  const [modalDetails, setModalDetails] = useState<
    ModalMovieDetails | ModalTVDetails | null
  >(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchMediaType, setSearchMediaType] = useState<MediaType>("movie");
  const [page, setPage] = useState<PageType>("trending");

  const { alertMessage, setAlertMessage } = useStore();
  const debouncedSearch = useDebounce(searchValue, 300);
  const searchResultsData = useQuery({
    queryKey: ["searchValue", debouncedSearch],
    queryFn: () => search(searchValue, searchMediaType),
  });

  // TODO: N'utiliser qu'une fonction avec un type générique qui dispatchera le bon endpoint et la bonne fonction de formattage
  const handleOnMovieItemClick = (id: number) => {
    fetch(`/movie/${id}`)
      .then((res: APIMovieDetails) => {
        const details: ModalMovieDetails = formatMovieData(res);
        setModalDetails(details);
      })
      ?.catch((error: any) => {
        console.error(error);
        setAlertMessage({
          type: "error",
          message: error.message,
        });
      });
  };

  const handleOnTVItemClick = (id: number) => {
    fetch(`/tv/${id}`)
      .then((res: APITVSeriesDetails) => {
        const details: ModalTVDetails = formatTVData(res);
        setModalDetails(details);
      })
      ?.catch((error) => {
        console.error(error);
        setAlertMessage({
          type: "error",
          message: error.message,
        });
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
    if (event.target.value !== "movie" && event.target.value !== "tv")
      return false; //MediaType Type checking
    else setSearchMediaType(event.target.value);
  };

  const changePage = (value: PageType) => {
    setPage(value);
  };

  return (
    <>
      {modalDetails !== null &&
        createPortal(
          <Modal modalDetails={modalDetails} handleClose={handleClose} />,
          document.body
        )}
      {alertMessage &&
        createPortal(
          <Alert
            type={alertMessage.type}
            message={alertMessage.message}
            onClose={() => setAlertMessage(null)}
          />,
          document.body
        )}
      <div>
        <NavBar
          onChange={handleSearchChange}
          onSelectChange={handleSearchMediaTypeChange}
          searchValue={searchValue}
          searchMediaType={searchMediaType}
          currentPage={page}
          onChangePage={changePage}
        />
        <div className="relative h-fit">
          {debouncedSearch && searchResultsData && (
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
          {page === "trending" && (
            <Trending
              onMovieItemClick={handleOnMovieItemClick}
              onTVItemClick={handleOnTVItemClick}
            />
          )}
          {page === "discover" && (
            <Discover onCardClick={handleOnTVItemClick} />
          )}
        </div>
        <footer className="bg-black px-5 py-3">Dorian Belhaj - 2024</footer>
      </div>
    </>
  );
};

export default HomePage;
