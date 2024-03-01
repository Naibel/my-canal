import Link from "next/link";

import { Card, Title } from "~/components";
import { MediaType } from "~/types/modal";

type DiscoverSearchResultsProps<T> = {
  mediaType: MediaType;
  searchResults: Array<T>;
};

const DiscoverSearchResults = <
  T extends { id: number; poster_path: string; name?: string; title?: string }
>({
  mediaType,
  searchResults,
}: DiscoverSearchResultsProps<T>) => (
  <div className="bg-neutral-800 p-5 flex flex-col gap-5 text-center">
    <Title size="large">Résultats de la recherche : </Title>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
      {searchResults?.map((item: T) => (
        <Link key={"card_" + item.id} href={`/${mediaType}/${item.id}`}>
          <Card
            key={"card_" + item.id}
            poster={item.poster_path}
            title={item.name || item.title || ""}
          />
        </Link>
      ))}
      {searchResults && searchResults?.length === 0 && (
        <span>Pas de résultat trouvé</span>
      )}
    </div>
  </div>
);

export default DiscoverSearchResults;
