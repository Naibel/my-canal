import { LiaImdb } from "react-icons/lia";

import { LinkButton } from "~/components";
import { ModalMovieDetails, ModalTVDetails } from "~/types/modal";

import InfoLine from "./components/InfoLine";
import SpokenLanguages from "./components/SpokenLanguages";

const ModalSideBar = ({
  modalDetails,
}: {
  modalDetails: ModalMovieDetails | ModalTVDetails;
}) => (
  <div className="bg-neutral-900 flex flex-col gap-2 md:gap-4 pr-5 md:pr-8 pl-5 py-5">
    {modalDetails.sidebar.homepage && (
      <LinkButton linkTo={modalDetails.sidebar.homepage}>
        <span className="text-sm uppercase italic font-semibold px-5 py-3">
          Site officiel
        </span>
      </LinkButton>
    )}
    {modalDetails.mediaType === "tv" && (
      <>
        <InfoLine
          label="Première diffusion"
          value={modalDetails.sidebar.firstAirDate}
        />
        <InfoLine
          label="Dernière diffusion"
          value={modalDetails.sidebar.lastAirDate}
        />

        <InfoLine
          label="Nombre d'épisodes"
          value={modalDetails.sidebar.nbOfEpisodes}
        />
        <InfoLine
          label="Nombre de saisons"
          value={modalDetails.sidebar.nbOfSeasons}
        />
        <SpokenLanguages
          label="Langues"
          values={modalDetails.sidebar.spokenLanguages}
        />
        <InfoLine label="Statut" value={modalDetails.sidebar.status} />
      </>
    )}
    {modalDetails.mediaType === "movie" && (
      <>
        {modalDetails.sidebar.imdbUrl && (
          <LinkButton color="yellow" linkTo={modalDetails.sidebar.imdbUrl}>
            <div className="flex">
              <LiaImdb size={45} color="black" />
            </div>
          </LinkButton>
        )}
        <InfoLine
          label="Date de sortie"
          value={modalDetails.sidebar.releaseDate}
        />
        <SpokenLanguages
          label="Langues"
          values={modalDetails.sidebar.spokenLanguages}
        />
        <InfoLine label="Budget" value={modalDetails.sidebar.budget} />
        <InfoLine label="Box Office" value={modalDetails.sidebar.boxOffice} />
      </>
    )}
  </div>
);

export default ModalSideBar;
