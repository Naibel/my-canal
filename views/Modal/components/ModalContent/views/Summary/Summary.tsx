import { ModalDetailsSummary } from "~/types";

import ModalContentSection from "../../components/ModalContentSection";

import EpisodePanel from "./EpisodePanel";
import Genres from "./Genres";

const Summary = ({
  summaryDetails,
}: {
  summaryDetails: ModalDetailsSummary;
}) => (
  <div className="flex flex-col gap-3 md:gap-5">
    {summaryDetails.genres.length > 0 && (
      <div className="flex justify-between items-start">
        <Genres genres={summaryDetails.genres} />
      </div>
    )}
    <div>
      {summaryDetails.overview ? (
        <ModalContentSection title="Résumé">
          <p className="text-sm md:text-base">{summaryDetails.overview}</p>
        </ModalContentSection>
      ) : (
        <p className="italic">Pas de résumé pour le moment...</p>
      )}
    </div>
    {(summaryDetails.lastEpisodeToAir || summaryDetails.nextEpisodeToAir) && (
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-5">
        {summaryDetails.lastEpisodeToAir && (
          <ModalContentSection title="Dernier épisode diffusé">
            <EpisodePanel episode={summaryDetails.lastEpisodeToAir} />
          </ModalContentSection>
        )}
        {summaryDetails.nextEpisodeToAir && (
          <ModalContentSection title="Prochain épisode">
            <EpisodePanel episode={summaryDetails.nextEpisodeToAir} />
          </ModalContentSection>
        )}
      </div>
    )}
  </div>
);

export default Summary;
