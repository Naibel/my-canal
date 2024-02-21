import Image from "next/image";

import { IMAGE_PREFIX_URL } from "~/utils/fetch";

type PersonPanelProps = {
  bgProfile: string;
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
    <Image
      src={`${IMAGE_PREFIX_URL}${bgProfile}`}
      width={128}
      height={0}
      className="bg-cover aspect-[2/3] flex items-center justify-center text-center bg-neutral-900"
      alt="image person"
    />
    <div className=" gap-1 items-center justify-center bg-neutral-700 p-2 text-center">
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
