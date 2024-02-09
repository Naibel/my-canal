import { LiaImdb } from "react-icons/lia";

import { ModalMovieDetails, ModalTVDetails } from "@_types";
import { SpokenLanguages } from "@_types/api";

export const InfoLine = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <div>
    <h3 className="text-sm uppercase italic font-semibold">{label}</h3>
    <p className="text-sm italic">{value}</p>
  </div>
);

export const Languages = ({
  label,
  values,
}: {
  label: string;
  values: SpokenLanguages[];
}) => (
  <div>
    <h3 className="text-sm uppercase italic font-semibold">{label}</h3>
    <ul className="list-disc list-inside	">
      {values.map((value, index) => (
        <li key={index}>{value.name}</li>
      ))}
    </ul>
  </div>
);

const ModalOtherInfo = ({
  modalDetails,
}: {
  modalDetails: ModalMovieDetails | ModalTVDetails;
}) => {
  return (
    <div className="bg-neutral-900 flex flex-col gap-2 pr-8 pl-5 py-5">
      {modalDetails.mediaType === "tv" && (
        <>
          <InfoLine
            label="Première diffusion"
            value={modalDetails.firstAirDate}
          />
          {modalDetails.lastAirDate && (
            <InfoLine
              label="Dernière diffusion"
              value={modalDetails.lastAirDate}
            />
          )}
          <InfoLine
            label="Nombre d'épisodes"
            value={modalDetails.nbOfEpisodes}
          />
          <InfoLine
            label="Nombre de saisons"
            value={modalDetails.nbOfSeasons}
          />
          <InfoLine label="Statut" value={modalDetails.status} />
        </>
      )}
      {modalDetails.mediaType === "movie" && (
        <>
          <InfoLine label="Date de sortie" value={modalDetails.releaseDate} />
          <InfoLine label="Statut" value={modalDetails.status} />
          <Languages label="Langues" values={modalDetails.spokenLanguages} />
          {modalDetails.budget && (
            <InfoLine label="Budget" value={modalDetails.budget} />
          )}
          {modalDetails.boxOffice && (
            <InfoLine label="Box Office" value={modalDetails.boxOffice} />
          )}
        </>
      )}
      <div className="flex flex-col gap-3">
        {modalDetails.homepage && (
          <a className="flex" target="_blank" href={modalDetails.homepage}>
            <button className="flex flex-1 justify-center duration-600 bg-neutral-700 hover:bg-neutral-600 active:bg-neutral-700 rounded-md py-2 px-5">
              <span className="text-sm uppercase italic font-semibold">
                Site officiel
              </span>
            </button>
          </a>
        )}
        {modalDetails.mediaType === "movie" && (
          <a className="flex" target="_blank" href={modalDetails.imdbUrl}>
            <button className="flex flex-1 justify-center duration-600 bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 rounded-md">
              <LiaImdb size={47} color="black" />
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ModalOtherInfo;
