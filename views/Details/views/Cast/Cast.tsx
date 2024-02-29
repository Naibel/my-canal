import { useMemo } from "react";
import Image from "next/image";

import { MovieDetails, TVSeriesDetails } from "~/types/api";
import ModalContentSection from "~/views/Details/components/ContentSection";

import ellipse from "../../../../public/assets/ellipse.png";
import PersonPanel from "../../components/PersonPanel";
import ViewLayout from "../ViewLayout";

const Cast = ({
  data,
  isFetching,
  error,
}: {
  data: TVSeriesDetails | MovieDetails | undefined;
  isFetching: boolean;
  error: unknown;
}) => {
  const isMediaTV = data?.media_type === "tv";

  const castData = useMemo(() => {
    if (data) {
      return isMediaTV ? data.aggregate_credits.cast : data.credits.cast;
    } else return undefined;
  }, [data, isMediaTV]);

  const crewData = useMemo(() => {
    if (data) {
      return isMediaTV ? data.aggregate_credits.crew : data.credits.crew;
    } else return undefined;
  }, [data, isMediaTV]);

  if (isFetching) {
    return (
      <Image
        className="animate-spin"
        src={ellipse}
        alt="loader"
        width={100}
        height={100}
      />
    );
  }

  return (
    <div>
      {data && castData && crewData && (
        <ViewLayout data={data}>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col flex-1 pl-5 py-5 gap-5">
              <ModalContentSection
                title={`Distribution des rôles (${castData.length} entrées)`}
              >
                <div className="flex flex-wrap gap-3 md:gap-5">
                  {castData.map((credit) => (
                    <div
                      key={credit.id}
                      className="rounded-sm bg-neutral-700 min-w-32 w-32"
                    >
                      <PersonPanel
                        bgProfile={credit.profile_path}
                        name={credit.name}
                        role={credit.known_for_department}
                      />
                    </div>
                  ))}
                </div>
              </ModalContentSection>
            </div>
            <div className="flex flex-col flex-1 pl-5 py-5 gap-5">
              <ModalContentSection
                title={`Equipe techniques (${crewData.length} entrées)`}
              >
                <div className="flex flex-wrap gap-3 md:gap-5">
                  {crewData.map((credit) => (
                    <div
                      key={credit.id}
                      className="rounded-sm bg-neutral-700 min-w-32 w-32"
                    >
                      <PersonPanel
                        bgProfile={credit.profile_path}
                        name={credit.name}
                        role={credit.known_for_department}
                      />
                    </div>
                  ))}
                </div>
              </ModalContentSection>
            </div>
          </div>
        </ViewLayout>
      )}
    </div>
  );
};

export default Cast;
