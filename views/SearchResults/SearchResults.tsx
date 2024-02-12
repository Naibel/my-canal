import { Card, Title } from "~/components";

import { NoResultsFound } from "./components/NoResultsFound";
import { SearchLoadingMessage } from "./components/SearchLoadingMessage";

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
    className={`absolute flex flex-1 min-h-dvh h-max bg-black left-0 right-0 top-0 h-full bottom-0 top-14`}
  >
    <div className="flex flex-1 flex-col p-5 gap-5">
      <Title size="large">Résultats de la recherche</Title>
      {loading && <SearchLoadingMessage />}
      {!loading && results && results?.length > 0 && (
        <div className="grid h-fit grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {results?.map((item: T) => (
            <Card
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
