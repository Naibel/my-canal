import Image from "next/image";

import { LogoMyCanal } from "~/components";
import { Season } from "~/types/api";
import { IMAGE_W_342_PREFIX_URL } from "~/utils/fetch";

type SeasonPanelProps = {
  season: Season;
};

export const SeasonPanel = ({ season }: SeasonPanelProps) => (
  <div
    key={season.id}
    className="flex flex-col md:grid md:grid-rows-1 md:grid-cols-5 rounded-md overflow-hidden bg-neutral-900"
  >
    <div className="flex aspect-[2/3] w-4/12 items-center justify-center m-auto md:w-full bg-neutral-900">
      {season.poster_path ? (
        <Image
          src={`${IMAGE_W_342_PREFIX_URL}${season.poster_path}`}
          width={342}
          height={0}
          alt="image season"
        />
      ) : (
        <LogoMyCanal size="small" />
      )}
    </div>

    <div className="bg-neutral-700 md:col-span-4 p-5">
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
