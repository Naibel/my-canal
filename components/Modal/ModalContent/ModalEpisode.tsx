import { EpisodeDetails } from "@_types/api";
import { LogoMyCanal } from "@components/NavBar/NavBar";

const ModalEpisode = ({ episode }: { episode: EpisodeDetails }) => (
  <div className="grid rounded-md overflow-hidden">
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${episode.still_path})`,
        backgroundSize: "cover",
        aspectRatio: "16/9",
      }}
      className="flex items-center justify-center bg-neutral-900"
    >
      {!episode.still_path && <LogoMyCanal />}
    </div>
    <div className="bg-neutral-700 p-5">
      <p className="text-xs uppercase italic font-semibold">
        Saison {episode.season_number} épisode {episode.episode_number}
      </p>
      <p className="text-sm uppercase italic font-semibold">{episode.name}</p>
      <p className="text-xs uppercase italic text-neutral-300">
        Diffusion le {new Date(episode.air_date).toLocaleDateString("fr")}
        {episode.runtime && ` - ${episode.runtime}''`}
      </p>
      <p className="text-sm leading-1 mt-2">
        <span className="font-semibold">Résumé : </span>
        {episode.overview || "publié prochainement."}
      </p>
    </div>
  </div>
);

export default ModalEpisode;
