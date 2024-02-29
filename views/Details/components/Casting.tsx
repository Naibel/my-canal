import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

import { Role } from "~/types/api";
import PersonPanel from "~/views/Details/components/PersonPanel";

import ContentSection from "./ContentSection";

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
  <ContentSection title="Casting">
    <div className="overflow-hidden">
      <ol className="flex gap-5 overflow-x-auto">
        {cast.slice(0, 10).map((person: T) => (
          <li
            key={person.id}
            className="rounded-sm bg-neutral-700 min-w-32 w-32"
          >
            <PersonPanel
              bgProfile={person.profile_path}
              name={person.name}
              role={
                person.roles ? person?.roles[0]?.character : person.character
              }
              nbOfEpisodes={
                person.roles ? person?.roles[0]?.episode_count : undefined
              }
            />
          </li>
        ))}
        {cast.length > 10 && (
          <Link
            href={linkTo}
            className="duration-500 opacity-100 hover:opacity-80 active:opacity-70 flex flex-col items-center justify-center"
          >
            <li
              key="see_more"
              className="flex-nowrap flex flex-col items-center justify-center flex-1 min-w-32 bg-neutral-800 rounded-sm"
            >
              <span className="font-semibold uppercase italic">Voir plus</span>
              <GoArrowRight />
            </li>
          </Link>
        )}
      </ol>
    </div>
    <Link
      href={linkTo}
      className="opacity-100 hover:opacity-80 duration-300 flex justify-end text-right gap-2"
    >
      <span className="uppercase font-semibold italic text-sm ">
        Voir le casting complet
      </span>
      <GoArrowRight />
    </Link>
  </ContentSection>
);

export default Casting;
