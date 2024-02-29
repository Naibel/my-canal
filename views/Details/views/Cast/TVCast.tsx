import { useParams } from "next/navigation";

import useTVDetails from "~/hooks/useTVDetails";
import { PageParams } from "~/types/modal";

import Cast from "./Cast";

const TVCast = () => {
  const params = useParams<PageParams>();

  const { data, isFetching, error } = useTVDetails(params.id);
  return <Cast data={data} isFetching={isFetching} error={error} />;
};

export default TVCast;
