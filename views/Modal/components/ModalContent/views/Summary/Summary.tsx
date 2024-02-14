import { ModalMovieDetails, ModalTVDetails } from "~/types";

import SummarySection from "../../components/ModalSection";

import EpisodePanel from "./EpisodePanel";
import Genres from "./Genres";

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
