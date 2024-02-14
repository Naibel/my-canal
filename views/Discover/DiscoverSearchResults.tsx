import { Card, Title } from "~/components";

type DiscoverSearchResultsProps<T> = {
  searchResults: Array<T>;
  onCardClick: (id: number) => void;
};

const DiscoverSearchResults = <
  T extends { id: number; poster_path: string; name?: string; title?: string }
>({
  searchResults,
  onCardClick,
}: DiscoverSearchResultsProps<T>) => {
  return (
    <div className="bg-neutral-800 p-5 flex flex-col gap-5 text-center">
      <Title size="large">Résultats de la recherche : </Title>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {searchResults?.map((item: T) => (
          <Card
            key={"card_" + item.id}
            id={item.id}
            poster={item.poster_path}
            onClick={onCardClick}
            title={item.name || item.title || ""}
          />
        ))}
      </div>
    </div>
  );
};

export default DiscoverSearchResults;
