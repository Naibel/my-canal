import { useState } from "react";
import { createPortal } from "react-dom";

import { Button, LoadingOverlay } from "~/components";
import { useAlertStore, useModalFunctions } from "~/hooks";
import { MediaType } from "~/types/modal";
import { discover } from "~/utils/fetch";

import DiscoverForm from "./components/DiscoverForm";
import DiscoverSearchResults from "./components/DiscoverSearchResults";

export type DiscoverSearchForm = {
  include_adult: boolean;
  language: string;
  include_null_first_air_date: boolean;
  sort_by: string;
};

const Discover = <
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
  const { displayMovieModal, displayTVModal } = useModalFunctions();

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

  return (
    <>
      {isLoading && createPortal(<LoadingOverlay />, document.body)}
      <div className="flex flex-1 flex-col p-3 md:p-5 gap-5">
        <div className="flex flex-col bg-black rounded-md w-full max-w-4xl m-auto p-5 gap-5">
          <DiscoverForm onFormChange={handleFormChange} />
          <Button onClick={handleSearch}>
            <span className="text-sm uppercase italic font-semibold px-5 py-3">
              Allez, on recherche du contenu !
            </span>
          </Button>
        </div>
        {searchResults.length > 0 && (
          <DiscoverSearchResults
            searchResults={searchResults}
            onCardClick={
              mediaType === "tv" ? displayTVModal : displayMovieModal
            }
          />
        )}
      </div>
    </>
  );
};

export default Discover;
