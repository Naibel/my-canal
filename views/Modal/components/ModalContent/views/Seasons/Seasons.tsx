import { Season } from "~/types/api";

import { SeasonPanel } from "./SeasonPanel";

type SeasonsProps = {
  seasons: Array<Season>;
};

const Seasons = ({ seasons }: SeasonsProps) => (
  <div className="grid grid-cols-1 gap-5">
    {seasons.map((season: Season) => (
      <SeasonPanel key={season.id} season={season} />
    ))}
  </div>
);

export default Seasons;
