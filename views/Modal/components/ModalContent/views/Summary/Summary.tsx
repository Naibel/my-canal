import { ModalMovieDetails, ModalTVDetails } from "~/types";
import { Person, ProductionCompany } from "~/types/api";

import EpisodePanel from "./EpisodePanel";
import Genres from "./Genres";
import PersonPanel from "./PersonPanel";
import ProductionPanel from "./ProductionPanel";
import SummarySection from "./SummarySection";

const Summary = ({
  modalDetails,
}: {
  modalDetails: ModalMovieDetails | ModalTVDetails;
}) => (
  <div className="flex flex-col gap-3 md:gap-5">
    {modalDetails.genres.length > 0 && (
      <div className="flex justify-between items-start">
        <Genres genres={modalDetails.genres} />
      </div>
    )}
    <div>
      {modalDetails.overview ? (
        <SummarySection title="Résumé">
          <p className="text-sm md:text-base">{modalDetails.overview}</p>
        </SummarySection>
      ) : (
        <p className="italic">Pas de résumé pour le moment...</p>
      )}
    </div>
    {modalDetails.mediaType === "tv" && modalDetails.createdBy.length > 0 && (
      <SummarySection title="Une série créée par">
        <div className="grid grid-rows-1 grid-cols-4 md:grid-cols-6 gap-5">
          {modalDetails.createdBy.map((person: Person) => (
            <PersonPanel
              key={person.id}
              bgProfile={person.profile_path}
              name={person.name}
              gender={person.gender}
            />
          ))}
        </div>
      </SummarySection>
    )}
    {modalDetails.productionCompanies?.length > 0 && (
      <SummarySection title="Produit par">
        <div className="grid grid-rows-1 grid-cols-3 md:grid-cols-5 gap-2 md:gap-5">
          {modalDetails.productionCompanies.map(
            (company: ProductionCompany) => (
              <ProductionPanel
                key={company.id}
                logo={company.logo_path}
                name={company.name}
              />
            )
          )}
        </div>
      </SummarySection>
    )}
    {modalDetails.mediaType === "tv" && (
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-5">
        {modalDetails.lastEpisodeToAir && (
          <SummarySection title="Dernier épisode diffusé">
            <EpisodePanel episode={modalDetails.lastEpisodeToAir} />
          </SummarySection>
        )}
        {modalDetails.nextEpisodeToAir && (
          <SummarySection title="Prochain épisode">
            <EpisodePanel episode={modalDetails.nextEpisodeToAir} />
          </SummarySection>
        )}
      </div>
    )}
  </div>
);

export default Summary;
