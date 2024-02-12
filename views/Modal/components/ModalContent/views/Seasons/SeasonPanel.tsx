import { Season } from "~/types/api";

import { LogoMyCanal } from "~/components";

type SeasonPanelProps = {
  season: Season;
};

export const SeasonPanel = ({ season }: SeasonPanelProps) => (
  <div
    key={season.id}
    className="grid grid-rows-1 grid-cols-3 col-span-1 rounded-md overflow-hidden bg-neutral-900"
  >
    <div
      style={{
        backgroundImage: season?.poster_path
          ? `url(https://image.tmdb.org/t/p/original${season.poster_path})`
          : "",
      }}
      className="flex bg-cover aspect-[2/3] items-center justify-center bg-neutral-900"
    >
      {!season?.poster_path && <LogoMyCanal />}
    </div>
    <div className="bg-neutral-700 col-span-2 p-5">
      <p className="text-xs uppercase italic">
        Saison {season.season_number || "spéciale"}
      </p>

      <p className="text-md uppercase italic font-semibold">
        {season?.name || ""}
      </p>
      <p className="text-xs uppercase italic text-neutral-300">
        <span className="">{season.episode_count} épisodes</span>
        {season?.air_date &&
          ` - Diffusion commencée le ${new Date(
            season.air_date
          ).toLocaleDateString("fr")}`}
      </p>
      <p className="text-sm leading-1 mt-2">
        <span className="font-semibold">Résumé : </span>
        {season?.overview || "publié prochainement."}
      </p>
      <p className="text-sm uppercase italic leading-1 mt-2">
        <span className="font-semibold">Note globale : </span>
        {season?.vote_average}/10
      </p>
    </div>
  </div>
);
