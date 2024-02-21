import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";

import { getTVCreditsDetails, getTVDetails } from "~/utils/fetch";
import ModalContentSection from "~/views/Modal/components/ModalContent/components/ModalContentSection";

import ellipse from "../../../public/assets/ellipse.png";
import PageMiniHeader from "../components/PageMiniHeader";
import { PageParams } from "../TVDetails";

const Cast = () => {
  const params = useParams<PageParams>();

  const seriesData = useQuery({
    queryKey: ["details"],
    queryFn: () => getTVDetails(params.id),
  });

  const creditsData = useQuery({
    queryKey: ["credits"],
    queryFn: () => getTVCreditsDetails(params.id),
  });

  return (
    <div>
      {seriesData.isPending && creditsData.isPending && (
        <Image
          className="animate-spin"
          src={ellipse}
          alt="loader"
          width={100}
          height={100}
        />
      )}
      {seriesData.data && creditsData.data && (
        <>
          <PageMiniHeader data={seriesData.data} />
          <div className="bg-black">
            <div className="grid grid-cols-2 max-w-7xl m-auto gap-5">
              <div className="flex flex-col col-span-1 pl-5 py-5 gap-5">
                <ModalContentSection
                  title={`Distribution des rôles (${creditsData.data.cast.length} entrées)`}
                >
                  {creditsData.data.cast.map((credit) => (
                    <div key={credit.id}>{credit.name}</div>
                  ))}
                </ModalContentSection>
              </div>
              <div className="flex flex-col col-span-1 pl-5 py-5 gap-5">
                <ModalContentSection
                  title={`Equipe techniques (${creditsData.data.crew.length} entrées)`}
                >
                  {creditsData.data.crew.map((credit) => (
                    <div key={credit.id}>{credit.name}</div>
                  ))}
                </ModalContentSection>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cast;
