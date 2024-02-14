import { LogoMyCanal } from "~/components";
import { EpisodeInfo } from "~/types/api";

const EpisodePanel = ({ episode }: { episode: EpisodeInfo }) => (
  <div className="grid rounded-md overflow-hidden">
    <div
      style={{
        backgroundImage: episode?.still_path
          ? `url(https://image.tmdb.org/t/p/original${episode.still_path})`
          : "",
      }}
      className="bg-cover aspect-video flex items-center justify-center bg-neutral-900"
    >
      {!episode?.still_path && <LogoMyCanal />}
    </div>
    <div className="bg-neutral-700 p-5">
      {episode?.season_number && episode?.episode_number && (
        <p className="text-xs uppercase italic font-semibold">
          Saison {episode.season_number} épisode {episode.episode_number}
        </p>
      )}
      <p className="text-sm uppercase italic font-semibold">
        {episode?.name || ""}
      </p>
      <p className="text-xs uppercase italic text-neutral-300">
        {episode?.air_date &&
          `Diffusion le ${new Date(episode.air_date).toLocaleDateString("fr")}`}
        {episode?.runtime && ` - ${episode.runtime}'`}
      </p>
      <p className="text-sm leading-1 mt-2">
        <span className="font-semibold">Résumé : </span>
        {episode?.overview || "publié prochainement."}
      </p>
    </div>
  </div>
);

export default EpisodePanel;
