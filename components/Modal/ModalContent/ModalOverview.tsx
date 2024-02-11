import { ModalMovieDetails, ModalTVDetails } from "@_types";
import { Person, ProductionCompany } from "@_types/api";

import PersonCard from "@components/Cards/PersonCard";
import EpisodeCard from "@components/Cards/EpisodeCard";
import ProductionCard from "@components/Cards/ProductionCard";

import GenreList from "./GenreList";
import ModalTitle from "./ModalTitle";

const ModalOverview = ({
  modalDetails,
}: {
  modalDetails: ModalMovieDetails | ModalTVDetails;
}) => {
  return (
    <div className="flex flex-col gap-5">
      {modalDetails.genres.length > 0 && (
        <div className="flex justify-between items-start">
          <GenreList genres={modalDetails.genres} />
        </div>
      )}
      <div>
        {modalDetails.overview ? (
          <>
            <ModalTitle>Résumé</ModalTitle>
            <p>{modalDetails.overview}</p>
          </>
        ) : (
          <p className="italic">Pas de résumé pour le moment...</p>
        )}
      </div>
      {modalDetails.mediaType === "tv" && (
        <>
          {modalDetails.createdBy.length > 0 && (
            <div>
              <ModalTitle>Une série créée par</ModalTitle>
              <div className="grid grid-rows-1 grid-cols-4 md:grid-cols-6 gap-5">
                {modalDetails.createdBy.map((person: Person) => (
                  <PersonCard
                    key={person.id}
                    bgProfile={person.profile_path}
                    name={person.name}
                    gender={person.gender}
                  />
                ))}
              </div>
            </div>
          )}
          <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-5">
            {modalDetails.lastEpisodeToAir && (
              <div>
                <ModalTitle>Dernier épisode diffusé</ModalTitle>
                <EpisodeCard episode={modalDetails.lastEpisodeToAir} />
              </div>
            )}
            {modalDetails.nextEpisodeToAir && (
              <div>
                <ModalTitle>Prochain épisode</ModalTitle>
                <EpisodeCard episode={modalDetails.nextEpisodeToAir} />
              </div>
            )}
          </div>
        </>
      )}
      {modalDetails.mediaType === "movie" &&
        modalDetails.productionCompanies.length > 0 && (
          <div>
            <ModalTitle>Produit par</ModalTitle>
            <div className="grid grid-rows-1 grid-cols-3 md:grid-cols-5 gap-5">
              {modalDetails.productionCompanies.map(
                (company: ProductionCompany) => (
                  <ProductionCard
                    key={company.id}
                    logo={company.logo_path}
                    name={company.name}
                  />
                )
              )}
            </div>
          </div>
        )}
    </div>
  );
};

export default ModalOverview;
