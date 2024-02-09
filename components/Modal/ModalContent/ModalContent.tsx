import { Person, ProductionCompany } from "@_types/api";
import { ModalMovieDetails, ModalTVDetails } from "@_types";

import ModalOtherInfo from "../ModalOtherInfo";
import ModalTitle from "./ModalTitle";
import ModalGenres from "./ModalGenres";
import ModalEpisode from "./ModalEpisode";
import ModalPerson from "./ModalPerson";
import ModalProduction from "./ModalProduction";

const ModalContent = ({
  modalDetails,
}: {
  modalDetails: ModalMovieDetails | ModalTVDetails;
}) => (
  <div className="flex flex-col md:flex-row gap-5">
    <div className="flex flex-1 pt-5 p-8 flex-col gap-5">
      <div>
        <ModalGenres genres={modalDetails.genres} />
      </div>
      <div>
        <ModalTitle>Résumé</ModalTitle>
        <p>{modalDetails.overview}</p>
      </div>
      {modalDetails.mediaType === "tv" && (
        <>
          {modalDetails.createdBy.length > 0 && (
            <div>
              <ModalTitle>Une série créée par</ModalTitle>
              <div className="grid grid-rows-1 grid-cols-4 md:grid-cols-6 gap-5">
                {modalDetails.createdBy.map((person: Person) => (
                  <ModalPerson
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
                <ModalEpisode episode={modalDetails.lastEpisodeToAir} />
              </div>
            )}
            {modalDetails.nextEpisodeToAir && (
              <div>
                <ModalTitle>Prochain épisode</ModalTitle>
                <ModalEpisode episode={modalDetails.nextEpisodeToAir} />
              </div>
            )}
          </div>
        </>
      )}
      {modalDetails.mediaType === "movie" && (
        <div>
          <ModalTitle>Produit par</ModalTitle>
          <div className="grid grid-rows-1 grid-cols-3 md:grid-cols-5 gap-5">
            {modalDetails.productionCompanies.map(
              (company: ProductionCompany) => (
                <ModalProduction
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
    <ModalOtherInfo modalDetails={modalDetails} />
  </div>
);

export default ModalContent;
