import { useMemo } from "react";

import { MediaType } from "~/types/modal";

type MainInfosProps = {
  mediaType: MediaType;
  nbOfEpisodes?: number;
  nbOfSeasons?: number;
  originalTitle: string;
  releaseYear: number;
  title: string;
  endYear?: number;
  runtime: number;
};

const MainInfos = ({
  endYear,
  nbOfEpisodes,
  nbOfSeasons,
  mediaType,
  originalTitle,
  releaseYear,
  runtime,
  title,
}: MainInfosProps) => {
  const canDisplayOriginalTitle = useMemo(
    () => title.toUpperCase() !== originalTitle.toUpperCase(),
    [originalTitle, title]
  );
  const canDisplayEndYear = useMemo(
    () => endYear && releaseYear !== endYear,
    [endYear, releaseYear]
  );
  return (
    <div className="flex flex-col items-center md:items-start">
      <h2 className="text-lg sm:text-3xl md:text-4xl text-center md:text-left uppercase font-semibold italic">
        {title}
      </h2>
      {canDisplayOriginalTitle && (
        <h2 className="text-sm sm:text-lg md:text-xl text-center md:text-left uppercase font-semibold italic">
          {originalTitle}
        </h2>
      )}
      <h3 className="text-md sm:text-lg text-center md:text-left uppercase italic">
        {mediaType === "movie" ? "Film" : "Série télévisée"}
        {releaseYear ? ` · ${releaseYear}` : ""}
        {canDisplayEndYear ? ` - ${endYear}` : ""}
        {nbOfSeasons
          ? ` · ${nbOfSeasons} saison${nbOfSeasons > 1 ? "s" : ""}`
          : ""}
        {nbOfEpisodes
          ? ` · ${nbOfEpisodes} épisode${nbOfEpisodes > 1 ? "s" : ""}`
          : ""}
        {runtime ? ` · ${runtime}'` : ""}
      </h3>
    </div>
  );
};

export default MainInfos;
