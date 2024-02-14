import { ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";

import { useDebounce, useModalFunctions, useNavbarSearchStore } from "~/hooks";
import { search } from "~/utils/fetch";

import SearchResults from "../views/SearchResults/SearchResults";

const SearchProvider = ({ children }: { children: ReactNode }) => {
  const { searchValue, searchMediaType } = useNavbarSearchStore();

  const { displayMovieModal, displayTVModal } = useModalFunctions();

  const debouncedSearch = useDebounce(searchValue, 300);
  const searchResultsData = useQuery({
    queryKey: ["searchValue", debouncedSearch],
    queryFn: () => search(searchValue, searchMediaType),
  });

  return (
    <>
      {debouncedSearch && searchResultsData && (
        <SearchResults
          loading={searchResultsData.isPending}
          results={searchResultsData?.data?.results}
          onClick={
            searchMediaType === "tv" ? displayTVModal : displayMovieModal
          }
        />
      )}
      {children}
    </>
  );
};

export default SearchProvider;
