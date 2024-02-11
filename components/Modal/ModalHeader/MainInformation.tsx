import { useMemo } from "react";

import { MediaType } from "~/types";

type MainInformationProps = {
  mediaType: MediaType;
  originalTitle: string;
  releaseYear: number;
  title: string;
  endYear?: number;
  runtime?: number;
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
    () => mediaType === "tv" && endYear && releaseYear !== endYear,
    [endYear, mediaType, releaseYear]
  );
  return (
    <div className="flex-1 flex flex-col items-center md:items-start">
      <h2 className={`text-3xl text-left uppercase font-semibold italic`}>
        {title}
      </h2>
      {canDisplayOriginalTitle && (
        <h2 className={`text-lg text-left uppercase font-semibold italic`}>
          {originalTitle}
        </h2>
      )}
      <h3 className={`text-md text-left uppercase italic`}>
        {mediaType === "movie" ? "Film" : "Série télévisée"}
        {releaseYear ? ` · ${releaseYear}` : ""}
        {canDisplayEndYear ? ` - ${endYear}` : ""}
        {mediaType === "movie" && runtime ? ` · ${runtime}'` : ""}
      </h3>
    </div>
  );
};

export default MainInformation;
