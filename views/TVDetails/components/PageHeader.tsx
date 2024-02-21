import Image from "next/image";

import { APITVSeriesDetails, Person } from "~/types/api";
import { IMAGE_PREFIX_URL, IMAGE_W_342_PREFIX_URL } from "~/utils/fetch";
import ModalContentSection from "~/views/Modal/components/ModalContent/components/ModalContentSection";

import Genres from "./Genres";
import ImageBackground from "./ImageBackground";
import MainInfos from "./MainInfos";
import Rating from "./Rating";
import Tagline from "./Tagline";

const PageHeader = ({ data }: { data: APITVSeriesDetails }) => (
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
          mediaType={"tv"}
          originalTitle={data.original_name}
          releaseYear={new Date(data.first_air_date).getFullYear()}
          endYear={
            data.status === "Ended"
              ? new Date(data.last_air_date).getFullYear()
              : undefined
          }
          title={data.name}
          runtime={data.episode_run_time[0] || 0}
          nbOfEpisodes={data.number_of_episodes}
          nbOfSeasons={data.number_of_seasons}
        />
        <Rating rating={data.vote_average} nbOfVotes={data.vote_count} />
        <Genres genres={data.genres} />
        <ModalContentSection title="Résumé">
          <div className="max-w-7xl m-auto">{data.overview}</div>
        </ModalContentSection>
        {data.created_by.length > 0 && (
          <ModalContentSection title="Crée par">
            <div className="max-w-7xl m-auto">
              {data.created_by.map((creator: Person) => {
                return <span key={creator.id}>{creator.name}, </span>;
              })}
            </div>
          </ModalContentSection>
        )}
      </div>
    </div>
  </ImageBackground>
);

export default PageHeader;
