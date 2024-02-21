import { useMemo } from "react";

type MainInfosProps = {
  originalTitle: string;
  releaseYear: number;
  title: string;
  runtime: number;
};

const MainInfos = ({
  originalTitle,
  releaseYear,
  runtime,
  title,
}: MainInfosProps) => {
  const canDisplayOriginalTitle = useMemo(
    () => title?.toUpperCase() !== originalTitle?.toUpperCase(),
    [originalTitle, title]
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
        Film {releaseYear ? ` · ${releaseYear}` : ""}
        {runtime ? ` · ${runtime}'` : ""}
      </h3>
    </div>
  );
};

export default MainInfos;
