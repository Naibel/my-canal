import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

import { Season } from "~/types/api";
import ModalContentSection from "~/views/Modal/components/ModalContent/components/ModalContentSection";

import { SeasonPanel } from "../Seasons/SeasonPanel";

type LastSeasonProps = {
  season: Season;
  serieId: number;
};

const LastSeason = ({ season, serieId }: LastSeasonProps) => (
  <>
    <ModalContentSection title="Dernière saison diffusée">
      <SeasonPanel season={season} />
    </ModalContentSection>
    <div>
      <Link
        className="flex justify-end text-right gap-2"
        href={`/tv/${serieId}/seasons`}
      >
        <span className="uppercase font-semibold italic text-sm ">
          Afficher toutes les saisons
        </span>
        <GoArrowRight />
      </Link>
    </div>
  </>
);

export default LastSeason;
