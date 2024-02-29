import Image from "next/image";
import { useParams } from "next/navigation";

import useTVDetails from "~/hooks/useTVDetails";
import { Season } from "~/types/api";
import { PageParams } from "~/types/modal";
import ModalContentSection from "~/views/Details/components/ContentSection";

import ellipse from "../../../../public/assets/ellipse.png";
import ViewLayout from "../ViewLayout";

import { SeasonPanel } from "./SeasonPanel";

const Seasons = () => {
  const params = useParams<PageParams>();

  const { data, isFetching, error } = useTVDetails(params.id);

  return (
    <div>
      {isFetching && (
        <Image
          className="animate-spin"
          src={ellipse}
          alt="loader"
          width={100}
          height={100}
        />
      )}
      {data && (
        <ViewLayout data={data}>
          <div className="grid grid-cols-1">
            <div className="flex flex-col col-span-1 gap-5">
              <ModalContentSection title={`Liste complète des saisons`}>
                <div className="flex flex-col gap-5">
                  {data.seasons.map((season: Season) => (
                    <SeasonPanel key={season.id} season={season} />
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

export default Seasons;
