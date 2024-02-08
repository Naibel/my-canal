import { ModalTVDetails } from "@_types";

export const InfoLine = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => {
  return (
    <div>
      <h3 className="text-sm uppercase italic font-semibold">{label}</h3>
      <p className="text-sm italic">{value}</p>
    </div>
  );
};

const ModalOtherInfo = ({ modalDetails }: { modalDetails: ModalTVDetails }) => {
  return (
    <div className="bg-neutral-900 flex flex-col gap-2 rounded-md p-5">
      <InfoLine label="Première diffusion" value={modalDetails.firstAirDate} />
      {modalDetails.lastAirDate && (
        <InfoLine label="Dernière diffusion" value={modalDetails.lastAirDate} />
      )}
      <InfoLine label="Nombre d'épisodes" value={modalDetails.nbOfEpisodes} />
      <InfoLine label="Nombre de saisons" value={modalDetails.nbOfSeasons} />
      <InfoLine label="Statut" value={modalDetails.status} />
    </div>
  );
};

export default ModalOtherInfo;
