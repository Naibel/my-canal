import { useMemo } from "react";

import { MediaType } from "~/types/modal";

type MainInformationProps = {
  mediaType: MediaType;
  originalTitle: string;
  releaseYear: number;
  title: string;
  endYear?: number;
  runtime: number;
};

const MainInformation = ({
  endYear,
  mediaType,
  originalTitle,
  releaseYear,
  runtime,
  title,
}: MainInformationProps) => {
  const canDisplayOriginalTitle = useMemo(
    () => title.toUpperCase() !== originalTitle.toUpperCase(),
    [originalTitle, title]
  );
  const canDisplayEndYear = useMemo(
    () => endYear && releaseYear !== endYear,
    [endYear, releaseYear]
  );
  return (
    <div className="flex-1 flex flex-col items-center md:items-start">
      <h2 className="text-lg sm:text-2xl md:text-3xl text-center md:text-left uppercase font-semibold italic">
        {title}
      </h2>
      {canDisplayOriginalTitle && (
        <h2 className="text-sm sm:text-md md:text-lg text-center md:text-left uppercase font-semibold italic">
          {originalTitle}
        </h2>
      )}
      <h3 className="text-sm sm:text-md text-center md:text-left uppercase italic">
        {mediaType === "movie" ? "Film" : "Série télévisée"}
        {releaseYear ? ` · ${releaseYear}` : ""}
        {canDisplayEndYear ? ` - ${endYear}` : ""}
        {mediaType === "movie" && runtime ? ` · ${runtime}'` : ""}
      </h3>
    </div>
  );
};

export default MainInformation;
