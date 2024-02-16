import { ModalMovieDetails, ModalTVDetails } from "~/types/modal";

import ModalContentSection from "../../components/ModalContentSection";

import EpisodePanel from "./EpisodePanel";
import Genres from "./Genres";

const Summary = ({
  modalDetails,
}: {
  modalDetails: ModalMovieDetails | ModalTVDetails;
}) => {
  const { summary } = modalDetails;
  return (
    <div className="flex flex-col gap-3 md:gap-5">
      {summary.genres.length > 0 && (
        <div className="flex justify-between items-start">
          <Genres genres={summary.genres} />
        </div>
      )}
      <div>
        {summary.overview ? (
          <ModalContentSection title="Résumé">
            <p className="text-sm md:text-base">{summary.overview}</p>
          </ModalContentSection>
        ) : (
          <p className="italic">Pas de résumé pour le moment...</p>
        )}
      </div>
      {modalDetails.mediaType === "tv" && (
        <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-5">
          {modalDetails.summary.lastEpisodeToAir && (
            <ModalContentSection title="Dernier épisode diffusé">
              <EpisodePanel episode={modalDetails.summary.lastEpisodeToAir} />
            </ModalContentSection>
          )}
          {modalDetails.summary.nextEpisodeToAir && (
            <ModalContentSection title="Prochain épisode">
              <EpisodePanel episode={modalDetails.summary.nextEpisodeToAir} />
            </ModalContentSection>
          )}
        </div>
      )}
    </div>
  );
};

export default Summary;
