import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";

import { CrewMoviePerson } from "~/types/api";
import {
  getMovieCreditsDetails,
  getMovieDetails,
  getMovieRecommendations,
} from "~/utils/fetch";

import ellipse from "../../public/assets/ellipse.png";
import ModalContentSection from "../Modal/components/ModalContent/components/ModalContentSection";
import Carousel from "../Trending/components/Carousel";
import Casting from "../TVDetails/components/Casting";

import PageHeader from "./PageHeader";
import SideBar from "./Sidebar";

export type PageParams = {
  id: string;
};

const MovieDetails = () => {
  // const pathname = usePathname();
  const params = useParams<PageParams>();

  const movieData = useQuery({
    queryKey: ["details"],
    queryFn: () => getMovieDetails(params.id),
  });

  const creditsData = useQuery({
    queryKey: ["credits"],
    queryFn: () => getMovieCreditsDetails(params.id),
  });

  const recommendationsData = useQuery({
    queryKey: ["recommendations"],
    queryFn: () => getMovieRecommendations(params.id),
  });

  console.log(movieData.data);

  const director = useMemo(() => {
    return creditsData.data?.crew.find(
      (crewMember: CrewMoviePerson) => crewMember.job === "Director"
    );
  }, [creditsData.data?.crew]);

  return (
    <div>
      {movieData.isPending &&
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
      {movieData.data &&
        creditsData.data &&
        recommendationsData?.data?.results && (
          <>
            <PageHeader data={movieData.data} director={director} />
            <div className="bg-black">
              <div className="grid grid-cols-4 grid-rows-1 max-w-7xl m-auto gap-5">
                <div className="flex flex-col col-span-3 pl-5 py-5 gap-5">
                  <Casting
                    linkTo={`/movie/${movieData.data.id}/cast`}
                    cast={creditsData.data.cast}
                  />
                  {recommendationsData.data?.results.length > 1 && (
                    <ModalContentSection title="On vous recommande aussi...">
                      <Carousel data={recommendationsData.data?.results} />
                    </ModalContentSection>
                  )}
                </div>
                <SideBar data={movieData.data} />
              </div>
            </div>
          </>
        )}
    </div>
  );
};

export default MovieDetails;
