import { LiaImdb } from "react-icons/lia";

import { LinkButton } from "~/components";
import { ModalDetailsSideBar } from "~/types";

import InfoLine from "./components/InfoLine";
import SpokenLanguages from "./components/SpokenLanguages";

const ModalSideBar = ({
  sideBarDetails,
}: {
  sideBarDetails: ModalDetailsSideBar;
}) => (
  <div className="bg-neutral-900 flex flex-col gap-2 md:gap-4 pr-5 md:pr-8 pl-5 py-5">
    {sideBarDetails.homepage && (
      <LinkButton linkTo={sideBarDetails.homepage}>
        <span className="text-sm uppercase italic font-semibold px-5 py-3">
          Site officiel
        </span>
      </LinkButton>
    )}
    {sideBarDetails.imdbUrl && (
      <LinkButton color="yellow" linkTo={sideBarDetails.imdbUrl}>
        <div className="flex">
          <LiaImdb size={45} color="black" />
        </div>
      </LinkButton>
    )}
    <InfoLine label="Première diffusion" value={sideBarDetails?.firstAirDate} />
    <InfoLine label="Dernière diffusion" value={sideBarDetails.lastAirDate} />
    <InfoLine label="Nombre d'épisodes" value={sideBarDetails.nbOfEpisodes} />
    <InfoLine label="Nombre de saisons" value={sideBarDetails.nbOfSeasons} />
    <InfoLine label="Date de sortie" value={sideBarDetails.releaseDate} />
    <SpokenLanguages label="Langues" values={sideBarDetails.spokenLanguages} />
    <InfoLine label="Budget" value={sideBarDetails.budget} />
    <InfoLine label="Box Office" value={sideBarDetails.boxOffice} />
    <InfoLine label="Statut" value={sideBarDetails.status} />
  </div>
);

export default ModalSideBar;
