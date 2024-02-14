import { ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";

import { getMovieDetails, getTVDetails, search } from "~/utils/fetch";

import {
  useAlertStore,
  useDebounce,
  useModalStore,
  useNavbarSearchStore,
} from "~/hooks";

import SearchResults from "./SearchResults/SearchResults";

const SearchProvider = ({ children }: { children: ReactNode }) => {
  const { searchValue, searchMediaType } = useNavbarSearchStore();
  const { setModalDetails } = useModalStore();
  const { setAlertMessage } = useAlertStore();

  const debouncedSearch = useDebounce(searchValue, 300);
  const searchResultsData = useQuery({
    queryKey: ["searchValue", debouncedSearch],
    queryFn: () => search(searchValue, searchMediaType),
  });

  // TODO: N'utiliser qu'une fonction avec un type générique qui dispatchera le bon endpoint et la bonne fonction de formattage
  const handleOnMovieItemClick = (id: number) => {
    getMovieDetails(id, setModalDetails, (error: any) =>
      setAlertMessage({
        type: "error",
        message: error.message,
      })
    );
  };

  const handleOnTVItemClick = (id: number) => {
    getTVDetails(id, setModalDetails, (error: any) =>
      setAlertMessage({
        type: "error",
        message: error.message,
      })
    );
  };

  return (
    <>
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
      {children}
    </>
  );
};

export default SearchProvider;
