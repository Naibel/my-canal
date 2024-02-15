import { Card, Title } from "~/components";

import { NoResultsFound } from "./components/NoResultsFound";
import { SearchLoadingMessage } from "./components/SearchLoadingMessage";

type NavbarSearchResultsProps<T> = {
  results: Array<T> | undefined;
  onClick: (id: number) => void;
  loading: boolean;
};

const NavbarSearchResults = <
  T extends { id: number; poster_path: string; name?: string; title?: string }
>({
  results,
  onClick,
  loading,
}: NavbarSearchResultsProps<T>) => (
  <div className="flex flex-1 min-h-screen h-max bg-black left-0 right-0 top-0 h-full bottom-0">
    <div className="flex flex-1 flex-col p-3 gap-3 md:p-5 md:gap-5">
      <Title size="large">Résultats de la recherche</Title>
      {loading && <SearchLoadingMessage />}
      {!loading && results && results?.length > 0 && (
        <div className="grid h-fit grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-5">
          {results?.map((item: T) => (
            <Card
              key={"card_" + item.id}
              id={item.id}
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

export default NavbarSearchResults;
