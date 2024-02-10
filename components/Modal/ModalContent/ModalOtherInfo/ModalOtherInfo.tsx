import { ModalMovieDetails, ModalTVDetails } from "@_types";
import { InfoLine } from "./InfoLine";
import { LanguageList } from "./LanguageList";
import { LinkButton } from "@components/Button/Button";
import { LiaImdb } from "react-icons/lia";

const ModalOtherInfo = ({
  modalDetails,
}: {
  modalDetails: ModalMovieDetails | ModalTVDetails;
}) => {
  return (
    <div className="bg-neutral-900 flex flex-col gap-2 pr-8 pl-5 py-5">
      {modalDetails.homepage && (
        <LinkButton linkTo={modalDetails.homepage} color="neutral-700">
          <span className="text-sm uppercase italic font-semibold px-5 py-3">
            Site officiel
          </span>
        </LinkButton>
      )}
      {modalDetails.mediaType === "tv" && (
        <>
          <InfoLine
            label="Première diffusion"
            value={modalDetails.firstAirDate}
          />
          <InfoLine
            label="Dernière diffusion"
            value={modalDetails.lastAirDate}
          />

          <InfoLine
            label="Nombre d'épisodes"
            value={modalDetails.nbOfEpisodes}
          />
          <InfoLine
            label="Nombre de saisons"
            value={modalDetails.nbOfSeasons}
          />
          <LanguageList label="Langues" values={modalDetails.spokenLanguages} />
          <InfoLine label="Statut" value={modalDetails.status} />
        </>
      )}
      {modalDetails.mediaType === "movie" && (
        <>
          {modalDetails.imdbUrl && (
            <LinkButton linkTo={modalDetails.imdbUrl} color="yellow-600">
              <div className="flex">
                <LiaImdb size={45} color="black" />
              </div>
            </LinkButton>
          )}
          <InfoLine label="Date de sortie" value={modalDetails.releaseDate} />
          <LanguageList label="Langues" values={modalDetails.spokenLanguages} />
          <InfoLine label="Budget" value={modalDetails.budget} />
          <InfoLine label="Box Office" value={modalDetails.boxOffice} />
        </>
      )}
    </div>
  );
};

export default ModalOtherInfo;
