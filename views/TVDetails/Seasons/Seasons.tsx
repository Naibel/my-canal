import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";

import { Season } from "~/types/api";
import { getTVDetails } from "~/utils/fetch";
import ModalContentSection from "~/views/Modal/components/ModalContent/components/ModalContentSection";

import ellipse from "../../../public/assets/ellipse.png";
import PageMiniHeader from "../components/PageMiniHeader";
import { PageParams } from "../TVDetails";

import { SeasonPanel } from "./SeasonPanel";

const Seasons = () => {
  const params = useParams<PageParams>();

  const seriesData = useQuery({
    queryKey: ["details"],
    queryFn: () => getTVDetails(params.id),
  });

  return (
    <div>
      {seriesData.isPending && (
        <Image
          className="animate-spin"
          src={ellipse}
          alt="loader"
          width={100}
          height={100}
        />
      )}
      {seriesData.data && (
        <>
          <PageMiniHeader data={seriesData.data} />
          <div className="bg-black">
            <div className="grid grid-cols-1 max-w-7xl m-auto gap-5">
              <div className="flex flex-col col-span-1 pl-5 py-5 gap-5">
                <ModalContentSection title={`Liste complète des saisons`}>
                  <div className="flex flex-col gap-5">
                    {seriesData.data.seasons.map((season: Season) => (
                      <SeasonPanel key={season.id} season={season} />
                    ))}
                  </div>
                </ModalContentSection>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Seasons;
