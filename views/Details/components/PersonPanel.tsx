import Image from "next/image";

import { LogoMyCanal } from "~/components";
import { IMAGE_PREFIX_URL } from "~/utils/fetch";

type PersonPanelProps = {
  bgProfile: string | null;
  name: string;
  role?: string;
  nbOfEpisodes?: number;
};

const PersonPanel = ({
  bgProfile,
  name,
  role,
  nbOfEpisodes,
}: PersonPanelProps) => (
  <div className="flex flex-col rounded-sm overflow-hidden">
    <div className="bg-cover aspect-[2/3] flex items-center justify-center text-center bg-neutral-900">
      {bgProfile ? (
        <Image
          src={`${IMAGE_PREFIX_URL}${bgProfile}`}
          width={128}
          height={0}
          alt="image person"
        />
      ) : (
        <LogoMyCanal size="small" />
      )}
    </div>
    <div className="gap-1 items-center justify-center p-2 text-left">
      <div className="flex flex-col">
        <div>
          <p className="text-sm font-semibold italic">{name}</p>
        </div>
        {role && <span className="text-xs">{role}</span>}
        {nbOfEpisodes && (
          <span className="text-xs italic text-neutral-400">
            {nbOfEpisodes} épisode{nbOfEpisodes > 1 ? "s" : ""}
          </span>
        )}
      </div>
    </div>
  </div>
);

export default PersonPanel;
