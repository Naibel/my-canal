import { useMemo } from "react";
import Image from "next/image";

import { Title } from "~/components";
import {
  CrewMoviePerson,
  MovieDetails,
  Person,
  TVSeriesDetails,
} from "~/types/api";
import { IMAGE_PREFIX_URL, IMAGE_W_342_PREFIX_URL } from "~/utils/fetch";

import Genres from "./Genres";
import ImageBackground from "./ImageBackground";
import MainInfos from "./MainInfos";
import Rating from "./Rating";
import Tagline from "./Tagline";

const PageHeader = ({ data }: { data: TVSeriesDetails | MovieDetails }) => {
  const isMediaTV = data.media_type === "tv";
  const isMediaMovie = data.media_type === "movie";

  const getEpisodeRuntime = useMemo(() => {
    if (isMediaTV && data?.episode_run_time?.length > 0) {
      return data.episode_run_time[0] || null;
    } else return null;
  }, [data, isMediaTV]);

  const getDirectorName = useMemo(() => {
    if (isMediaMovie) {
      return data?.credits?.crew.find(
        (crewMember: CrewMoviePerson) => crewMember.job === "Director"
      );
    } else return undefined;
  }, [data, isMediaMovie]);

  return (
    <ImageBackground bgImage={`${IMAGE_PREFIX_URL}${data.backdrop_path}`}>
      <div className="flex flex-col items-center md:grid md:grid-cols-7 md:items-start gap-2 md:gap-5 max-w-7xl m-auto w-full">
        <Image
          src={`${IMAGE_W_342_PREFIX_URL}${data.poster_path}`}
          width={342}
          height={0}
          alt={"image_poster"}
          className="aspect-[2/3] w-6/12 md:w-full md:col-span-2 bg-neutral-400 shadow-lg rounded-md"
        />
        <div className="flex flex-1 md:col-span-5 items-center md:items-start flex-col gap-2 md:gap-5">
          {data.tagline && <Tagline tagline={data.tagline} />}
          <MainInfos
            mediaType={data.media_type}
            originalTitle={isMediaTV ? data.original_name : data.original_title}
            releaseYear={new Date(
              isMediaTV ? data.first_air_date : data.release_date
            ).getFullYear()}
            endYear={
              isMediaTV && data.last_air_date && data.status === "Ended"
                ? new Date(data.last_air_date).getFullYear()
                : undefined
            }
            title={isMediaTV ? data.name : data.title}
            runtime={isMediaTV ? getEpisodeRuntime : data.runtime}
            nbOfEpisodes={isMediaTV ? data.number_of_episodes : undefined}
            nbOfSeasons={isMediaTV ? data.number_of_seasons : undefined}
          />
          <Rating rating={data.vote_average} nbOfVotes={data.vote_count} />
          <Genres genres={data.genres} />
          <div className="text-center md:text-left">
            {data.overview ? (
              <div>
                <Title>Résumé :</Title>
                <p className="text-sm md:text-base">{data.overview}</p>
              </div>
            ) : (
              <p className="italic">Pas de résumé pour le moment...</p>
            )}
          </div>
          {isMediaTV && data.created_by.length > 0 && (
            <div>
              <Title>Créée par :</Title>
              {data.created_by.map((creator: Person, index: number) => {
                return (
                  <span className="text-sm md:text-base" key={creator.id}>
                    {creator.name}
                    {index < data.created_by.length - 1 && ", "}
                  </span>
                );
              })}
            </div>
          )}
          {isMediaMovie && getDirectorName && (
            <div>
              <Title>Réalisé par :</Title>
              <span className="text-sm md:text-base">
                {getDirectorName.name}
              </span>
            </div>
          )}
        </div>
      </div>
    </ImageBackground>
  );
};

export default PageHeader;
