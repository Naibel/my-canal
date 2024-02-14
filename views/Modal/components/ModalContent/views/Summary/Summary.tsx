import { ModalMovieDetails, ModalTVDetails } from "~/types";

import ModalContentSection from "../../components/ModalContentSection";

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
        <ModalContentSection title="Résumé">
          <p className="text-sm md:text-base">{modalDetails.overview}</p>
        </ModalContentSection>
      ) : (
        <p className="italic">Pas de résumé pour le moment...</p>
      )}
    </div>
    {modalDetails.mediaType === "tv" && (
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-5">
        {modalDetails.lastEpisodeToAir && (
          <ModalContentSection title="Dernier épisode diffusé">
            <EpisodePanel episode={modalDetails.lastEpisodeToAir} />
          </ModalContentSection>
        )}
        {modalDetails.nextEpisodeToAir && (
          <ModalContentSection title="Prochain épisode">
            <EpisodePanel episode={modalDetails.nextEpisodeToAir} />
          </ModalContentSection>
        )}
      </div>
    )}
  </div>
);

export default Summary;
