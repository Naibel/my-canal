import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";

import { MovieDetails, TVSeriesDetails } from "~/types/api";
import { IMAGE_PREFIX_URL, IMAGE_W_342_PREFIX_URL } from "~/utils/fetch";

import ImageBackground from "./ImageBackground";

const PageMiniHeader = ({ data }: { data: TVSeriesDetails | MovieDetails }) => (
  <ImageBackground small bgImage={`${IMAGE_PREFIX_URL}${data.backdrop_path}`}>
    <div className="flex gap-5 items-center max-w-7xl m-auto w-full">
      <div
        style={{
          backgroundImage: data.poster_path
            ? `url(${IMAGE_W_342_PREFIX_URL}${data.poster_path})`
            : "",
        }}
        className="aspect-[2/3] w-16 flex bg-contain bg-no-repeat bg-center bg-neutral-400 shadow-lg rounded-md"
      ></div>
      <div className="flex flex-1 items-center md:items-start flex-col col-span-2">
        <h2 className="text-lg sm:text-3xl md:text-4xl md:text-left uppercase font-semibold italic">
          {data.media_type === "tv" ? data.name : data.title}
        </h2>
        <Link href={`/${data.media_type}/${data.id}`}>
          <h2 className="duration-300 flex items-center gap-3 text-sm sm:text-md md:text-lg md:text-left uppercase italic hover:opacity-70 active:opacity-50">
            <GoArrowLeft />
            Revenir à la page principale
          </h2>
        </Link>
      </div>
    </div>
  </ImageBackground>
);

export default PageMiniHeader;
