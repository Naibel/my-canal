import { Season } from "@_types/api";

import { SeasonCard } from "@components/Cards/SeasonCard";

type ModalSeasonsProps = {
  seasons: Array<Season>;
};

const ModalSeasons = ({ seasons }: ModalSeasonsProps) => (
  <div className="grid grid-cols-1 gap-5">
    {seasons.map((season: Season) => (
      <SeasonCard season={season} />
    ))}
  </div>
);

export default ModalSeasons;
