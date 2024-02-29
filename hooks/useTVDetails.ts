import { useQuery } from "@tanstack/react-query";

import { APITVSeriesDetails, TVSeriesDetails } from "~/types/api";
import { getTVDetails } from "~/utils/fetch";

const useTVDetails = (id: string) => {
  return useQuery<APITVSeriesDetails, unknown, TVSeriesDetails>({
    queryKey: ["details"],
    queryFn: () => getTVDetails(id),
    select: (data: APITVSeriesDetails) => {
      const result: TVSeriesDetails = {
        ...data,
        media_type: "tv",
      };
      return result;
    },
  });
};

export default useTVDetails;
