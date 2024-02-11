import HeaderTitle from "~/components/HeaderTitle/HeaderTitle";
import Item from "~/components/Item/Item";

import { NoResultsFound } from "./NoResultsFound";
import { SearchLoadingMessage } from "./SearchLoadingMessage";

type SearchResultsProps<T> = {
  results: Array<T> | undefined;
  onClick: (id: number) => void;
  loading: boolean;
};

const SearchResults = <
  T extends { id: number; poster_path: string; name?: string; title?: string }
>({
  results,
  onClick,
  loading,
}: SearchResultsProps<T>) => (
  <div
    className={`absolute bg-black left-0 right-0 ${
      results?.length === 0 || loading ? "top-0 bottom-0" : ""
    } top-16`}
  >
    <div className="flex flex-1 h-full flex-col p-5 gap-5">
      <HeaderTitle>Résultats de la recherche</HeaderTitle>
      {loading && <SearchLoadingMessage />}
      {!loading && results && results?.length > 0 && (
        <div className="grid h-fit grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {results?.map((item: T) => (
            <Item
              key={item.id}
              poster={item.poster_path}
              onClick={() => onClick(item.id)}
              title={item.name || item.title || ""}
            />
          ))}
        </div>
      )}
      {!loading && results && results?.length === 0 && <NoResultsFound />}
    </div>
  </div>
);

export default SearchResults;
