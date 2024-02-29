import { ReactNode } from "react";

import { MovieDetails, TVSeriesDetails } from "~/types/api";

import PageMiniHeader from "../components/PageMiniHeader";

const ViewLayout = ({
  data,
  children,
}: {
  data: TVSeriesDetails | MovieDetails;
  children: ReactNode;
}) => (
  <div>
    <PageMiniHeader data={data} />
    <div className="bg-black">
      <div className="max-w-7xl m-auto p-5">{children}</div>
    </div>
  </div>
);

export default ViewLayout;
