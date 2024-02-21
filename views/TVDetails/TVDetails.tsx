import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";

import { Season } from "~/types/api";
import {
  getTVCreditsDetails,
  getTVDetails,
  getTVRecommendations,
} from "~/utils/fetch";

import ellipse from "../../public/assets/ellipse.png";
import ModalContentSection from "../Modal/components/ModalContent/components/ModalContentSection";
import Carousel from "../Trending/components/Carousel";

import Casting from "./components/Casting";
import EpisodePanel from "./components/EpisodePanel";
import LastSeason from "./components/LastSeason";
import PageHeader from "./components/PageHeader";
import SideBar from "./components/SideBar/SideBar";

export type PageParams = {
  id: string;
};

const TVDetails = () => {
  // const pathname = usePathname();
  const params = useParams<PageParams>();

  const seriesData = useQuery({
    queryKey: ["details"],
    queryFn: () => getTVDetails(params.id),
  });

  const creditsData = useQuery({
    queryKey: ["credits"],
    queryFn: () => getTVCreditsDetails(params.id),
  });

  const recommendationsData = useQuery({
    queryKey: ["recommendations"],
    queryFn: () => getTVRecommendations(params.id),
  });

  const lastSeason: Season | undefined = useMemo(
    () => seriesData?.data?.seasons[seriesData?.data?.seasons?.length - 1],
    [seriesData?.data?.seasons]
  );

  return (
    <div>
      {seriesData.isPending &&
        creditsData.isPending &&
        recommendationsData.isPending && (
          <Image
            className="animate-spin"
            src={ellipse}
            alt="loader"
            width={100}
            height={100}
          />
        )}
      {seriesData.data &&
        creditsData.data &&
        recommendationsData?.data?.results && (
          <>
            <PageHeader data={seriesData.data} />
            <div className="bg-black">
              <div className="grid grid-cols-4 grid-rows-1 max-w-7xl m-auto gap-5">
                <div className="flex flex-col col-span-3 pl-5 py-5 gap-5">
                  <Casting
                    cast={creditsData.data.cast}
                    linkTo={`/tv/${seriesData.data.id}/cast`}
                  />

                  {lastSeason && <LastSeason season={lastSeason} serieId={0} />}
                  <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-5">
                    {seriesData.data.last_episode_to_air && (
                      <ModalContentSection title="Dernier épisode diffusé">
                        <EpisodePanel
                          episode={seriesData.data.last_episode_to_air}
                        />
                      </ModalContentSection>
                    )}
                    {seriesData.data.next_episode_to_air && (
                      <ModalContentSection title="Prochain épisode">
                        <EpisodePanel
                          episode={seriesData.data.next_episode_to_air}
                        />
                      </ModalContentSection>
                    )}
                  </div>
                  {recommendationsData.data?.results.length > 1 && (
                    <ModalContentSection title="On vous recommande aussi...">
                      <Carousel data={recommendationsData.data?.results} />
                    </ModalContentSection>
                  )}
                </div>
                <SideBar data={seriesData.data} />
              </div>
            </div>
          </>
        )}
    </div>
  );
};

export default TVDetails;
