import { useParams } from "next/navigation";

import useTVDetails from "~/hooks/useTVDetails";

import Details from "./Details";

const TVDetails = () => {
  const params = useParams<{ id: string }>();

  const { data, isFetching, error } = useTVDetails(params.id);

  return <Details data={data} isFetching={isFetching} error={error} />;
};

export default TVDetails;
