import Image from "next/image";

import { APIMovieDetails, CrewMoviePerson } from "~/types/api";
import { IMAGE_PREFIX_URL, IMAGE_W_342_PREFIX_URL } from "~/utils/fetch";
import ModalContentSection from "~/views/Modal/components/ModalContent/components/ModalContentSection";

import Genres from "../TVDetails/components/Genres";
import ImageBackground from "../TVDetails/components/ImageBackground";
import Rating from "../TVDetails/components/Rating";
import Tagline from "../TVDetails/components/Tagline";

import MainInfos from "./MainInfos";

const PageHeader = ({
  data,
  director,
}: {
  data: APIMovieDetails;
  director: CrewMoviePerson;
}) => (
  <ImageBackground bgImage={`${IMAGE_PREFIX_URL}${data.backdrop_path}`}>
    <div className="grid grid-cols-7 items-start gap-5 max-w-7xl m-auto w-full">
      <Image
        src={`${IMAGE_W_342_PREFIX_URL}${data.poster_path}`}
        width={342}
        height={0}
        alt={"image_poster"}
        className="aspect-[2/3] col-span-2 bg-neutral-400 shadow-lg rounded-md"
      />
      <div className="flex flex-1 col-span-5 items-center md:items-start flex-col gap-5">
        {data.tagline && <Tagline tagline={data.tagline} />}
        <MainInfos
          originalTitle={data.original_title}
          releaseYear={new Date(data.release_date).getFullYear()}
          title={data.title}
          runtime={data.runtime}
        />
        <Rating rating={data.vote_average} nbOfVotes={data.vote_count} />
        <Genres genres={data.genres} />
        <ModalContentSection title="Résumé">
          <div className="max-w-7xl m-auto">{data.overview}</div>
        </ModalContentSection>
        <ModalContentSection title="Réalisé par">
          <div className="max-w-7xl m-auto">{director.name}</div>
        </ModalContentSection>
      </div>
    </div>
  </ImageBackground>
);

export default PageHeader;
