import { useMemo } from "react";

import { MovieDetails, Season, TVSeriesDetails } from "~/types/api";
import Carousel from "~/views/Trending/components/Carousel";

import Casting from "./components/Casting";
import ContentSection from "./components/ContentSection";
import EpisodePanel from "./components/EpisodePanel";
import LastSeason from "./components/LastSeason";
import PageHeader from "./components/PageHeader";
import SideBar from "./components/SideBar/SideBar";
import DetailsSkeleton from "./DetailsSkeleton";

const Details = ({
  data,
  isFetching,
  error,
}: {
  data: TVSeriesDetails | MovieDetails | undefined;
  isFetching: boolean;
  error: unknown;
}) => {
  const isMediaTV = data?.media_type === "tv";

  const lastSeason: Season | undefined = useMemo(() => {
    if (data?.media_type === "tv" && data.seasons) {
      return data.seasons[data.seasons.length - 1];
    } else return undefined;
  }, [data]);

  if (isFetching) return <DetailsSkeleton />;

  return (
    <div>
      {data && (
        <>
          <PageHeader data={data} />
          <div className="bg-black">
            <div className="max-w-7xl m-auto">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-1 overflow-hidden flex-col gap-5 p-3 md:p-5">
                  <Casting
                    linkTo={`/${data.media_type}/${data.id}/cast`}
                    cast={
                      isMediaTV
                        ? data.aggregate_credits.cast
                        : data.credits.cast
                    }
                  />
                  {lastSeason && (
                    <LastSeason season={lastSeason} serieId={data.id} />
                  )}
                  {isMediaTV && (
                    <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-5">
                      {data.last_episode_to_air && (
                        <ContentSection title="Dernier épisode diffusé">
                          <EpisodePanel episode={data.last_episode_to_air} />
                        </ContentSection>
                      )}
                      {data.next_episode_to_air && (
                        <ContentSection title="Prochain épisode">
                          <EpisodePanel episode={data.next_episode_to_air} />
                        </ContentSection>
                      )}
                    </div>
                  )}
                  {data?.recommendations?.results.length > 1 && (
                    <ContentSection title="On vous recommande aussi...">
                      <Carousel data={data?.recommendations?.results} />
                    </ContentSection>
                  )}
                </div>
                <SideBar data={data} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
