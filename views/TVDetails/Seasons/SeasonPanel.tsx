import Image from "next/image";

import { Season } from "~/types/api";
import { IMAGE_W_342_PREFIX_URL } from "~/utils/fetch";

type SeasonPanelProps = {
  season: Season;
};

export const SeasonPanel = ({ season }: SeasonPanelProps) => (
  <div
    key={season.id}
    className="grid grid-rows-1 grid-cols-5 col-span-1 rounded-md overflow-hidden bg-neutral-900"
  >
    <Image
      src={`${IMAGE_W_342_PREFIX_URL}${season.poster_path}`}
      width={342}
      height={0}
      className="flex aspect-[2/3] bg-neutral-900"
      alt="image season"
    />
    <div className="bg-neutral-700 col-span-4 p-5">
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
