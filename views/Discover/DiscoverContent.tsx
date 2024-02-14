import { useState } from "react";
import { createPortal } from "react-dom";

import { MediaType } from "~/types";

import { discover, getMovieDetails, getTVDetails } from "~/utils/fetch";

import { useAlertStore, useModalStore } from "~/hooks";

import { Button, Card, LoadingOverlay, Title } from "~/components";

import { DiscoverForm } from "./DiscoverForm";

export type DiscoverSearchForm = {
  include_adult: boolean;
  language: string;
  include_null_first_air_date: boolean;
  sort_by: string;
};

const DiscoverContent = <
  T extends { id: number; poster_path: string; name?: string; title?: string }
>() => {
  const [form, setForm] = useState<DiscoverSearchForm>({
    include_adult: false,
    language: "en-EN",
    include_null_first_air_date: false,
    sort_by: "popularity_asc",
  });
  const [mediaType, setMediaType] = useState<MediaType>("tv");
  const [searchResults, setSearchResults] = useState<Array<T>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setAlertMessage } = useAlertStore();
  const { setModalDetails } = useModalStore();

  const handleSearch = () => {
    setIsLoading(true);
    discover(form, mediaType)
      .then((res: any) => {
        setSearchResults(res.results);
      })
      ?.catch((error: any) => {
        console.error(error);
        setAlertMessage({
          type: "error",
          message: error.message,
        });
      })
      .finally(() => setIsLoading(false));
  };

  const handleFormChange = (key: string, value: any) => {
    if (key === "media_type") {
      setMediaType(value);
    } else {
      setForm({
        ...form,
        [key]: value,
      });
    }
  };

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
    <main className="flex flex-1 flex-col pt-5 gap-5">
      {isLoading && createPortal(<LoadingOverlay />, document.body)}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col bg-black rounded-md w-full max-w-4xl m-auto mb-5 p-5 gap-5">
          <DiscoverForm onFormChange={handleFormChange} />
          <Button onClick={handleSearch}>
            <span className="text-sm uppercase italic font-semibold px-5 py-3">
              Allez, on recherche du contenu !
            </span>
          </Button>
        </div>
        {searchResults.length > 0 && (
          <div className="bg-neutral-800 p-5 flex flex-col gap-5  text-center">
            <Title size="large">Résultats de la recherche : </Title>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {searchResults?.map((item: T) => (
                <Card
                  key={item.id}
                  poster={item.poster_path}
                  onClick={
                    mediaType === "tv"
                      ? () => handleOnTVItemClick(item.id)
                      : () => handleOnMovieItemClick(item.id)
                  }
                  title={item.name || item.title || ""}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default DiscoverContent;
