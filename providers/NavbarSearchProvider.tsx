import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useQuery } from "@tanstack/react-query";

import { useDebounce, useNavbarSearchStore } from "~/hooks";
import { search } from "~/utils/fetch";

import NavbarSearchResults from "../views/NavbarSearchResults/NavbarSearchResults";

const NavbarSearchProvider = ({ children }: { children: ReactNode }) => {
  const { searchValue, searchMediaType, setSearchValue } =
    useNavbarSearchStore();

  const debouncedSearch = useDebounce(searchValue, 300);
  const searchResultsData = useQuery({
    queryKey: ["searchValue", debouncedSearch],
    queryFn: () => search(searchValue, searchMediaType),
  });

  const onCardClick = () => {
    setSearchValue("");
  };

  return debouncedSearch && searchResultsData ? (
    createPortal(
      <NavbarSearchResults
        loading={searchResultsData.isPending}
        results={searchResultsData?.data?.results}
        searchMediaType={searchMediaType}
        onCardClick={onCardClick}
      />,
      document.getElementById("search_results")!
    )
  ) : (
    <>{children}</>
  );
};

export default NavbarSearchProvider;
