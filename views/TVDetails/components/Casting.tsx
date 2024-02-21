import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

import { Title } from "~/components";
import { APITVCredits, CastTVPerson, Role } from "~/types/api";
import PersonPanel from "~/views/TVDetails/components/PersonPanel";

type CastingProps<T> = {
  cast: Array<T>;
  linkTo: string;
};

const Casting = <
  T extends {
    id: number;
    profile_path: string;
    name: string;
    roles?: Array<Role>;
    character?: string;
  }
>({
  cast,
  linkTo,
}: CastingProps<T>) => (
  <div className="flex flex-col gap-3">
    <Title>Casting</Title>
    <ol className="flex flex-nowrap	overflow-x-auto gap-5">
      {cast.slice(0, 10).map((person: T) => (
        <li key={person.id} className="flex-nowrap flex-1 min-w-32">
          <PersonPanel
            bgProfile={person.profile_path}
            name={person.name}
            role={person.roles ? person?.roles[0]?.character : person.character}
            nbOfEpisodes={
              person.roles ? person?.roles[0]?.episode_count : undefined
            }
          />
        </li>
      ))}
      {cast.length > 10 && (
        <li
          key="see_more"
          className="flex-nowrap flex flex-col items-center justify-center flex-1 min-w-32 bg-neutral-800 rounded-sm"
        >
          <Link
            href={linkTo}
            className="flex flex-col items-center justify-center "
          >
            <span className="font-semibold uppercase italic">Voir plus</span>
            <GoArrowRight />
          </Link>
        </li>
      )}
    </ol>
    <Link href={linkTo} className="flex justify-end text-right gap-2">
      <span className="uppercase font-semibold italic text-sm ">
        Voir le casting complet
      </span>
      <GoArrowRight />
    </Link>
  </div>
);

export default Casting;
