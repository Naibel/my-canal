import { Season } from "~/types/api";

import { SeasonCard } from "~/components/Cards/SeasonCard";

type ModalSeasonsProps = {
  seasons: Array<Season>;
};

const ModalSeasons = ({ seasons }: ModalSeasonsProps) => (
  <div className="grid grid-cols-1 gap-5">
    {seasons.map((season: Season) => (
      <SeasonCard key={season.id} season={season} />
    ))}
  </div>
);

export default ModalSeasons;
