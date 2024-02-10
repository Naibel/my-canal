import HeaderTitle from "@components/HeaderTitle/HeaderTitle";
import Item from "@components/Item/Item";

type SearchResultsProps<T> = {
  results: Array<T>;
  onClick: (id: number) => void;
};

const SearchResults = <
  T extends { id: number; poster_path: string; name?: string; title?: string }
>({
  results,
  onClick,
}: SearchResultsProps<T>) => (
  <div className="flex flex-1 h-full flex-col p-5 gap-5">
    <HeaderTitle>Résultats de la recherche</HeaderTitle>
    {results.length > 0 ? (
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
    ) : (
      <div className="flex flex-1 flex-col justify-center items-center">
        <h2 className={`text-3xl text-left uppercase font-semibold italic`}>
          Oups, on n'a rien trouvé !
        </h2>
        <h2 className={`text-xl text-left uppercase italic`}>
          Veuillez tenter une autre recherche.
        </h2>
      </div>
    )}
  </div>
);

export default SearchResults;
