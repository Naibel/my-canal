import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

import { Season } from "~/types/api";
import ModalContentSection from "~/views/Details/components/ContentSection";

import { SeasonPanel } from "../views/Seasons/SeasonPanel";

type LastSeasonProps = {
  season: Season;
  serieId: number;
};

const LastSeason = ({ season, serieId }: LastSeasonProps) => (
  <ModalContentSection title="Dernière saison diffusée">
    <SeasonPanel season={season} />
    <div>
      <Link
        className="opacity-100 hover:opacity-80 duration-300 flex justify-end text-right gap-2"
        href={`/tv/${serieId}/seasons`}
      >
        <span className="uppercase font-semibold italic text-sm ">
          Afficher toutes les saisons
        </span>
        <GoArrowRight />
      </Link>
    </div>
  </ModalContentSection>
);

export default LastSeason;
