import React, { useMemo } from "react";

type MainInformationProps = {
  endYear: number;
  mediaType: "movie" | "tv";
  originalTitle: string;
  releaseYear: number;
  runtime: number;
  title: string;
};

const MainInformation = ({
  endYear,
  mediaType,
  originalTitle,
  releaseYear,
  runtime,
  title,
}: MainInformationProps) => {
  const canDisplayOriginalTitle = useMemo(() => title !== originalTitle, []);
  const canDisplayEndYear = useMemo(
    () => mediaType === "tv" && endYear && releaseYear !== endYear,
    []
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
        {mediaType === "movie" ? "Film" : "Série télévisée"} {"· "}
        {releaseYear} {canDisplayEndYear && `- ${endYear}`}
        {mediaType === "movie" && `· ${runtime}'`}
      </h3>
    </div>
  );
};

export default MainInformation;
