import { useState } from "react";

import { ModalMovieDetails, ModalTVDetails } from "~/types";

import ModalSideBar from "../ModalSideBar/ModalSideBar";
import ModalTabs from "../ModalTabs/ModalTabs";

import Seasons from "./views/Seasons/Seasons";
import Summary from "./views/Summary/Summary";

export type MenuPage = "summary" | "seasons";

const ModalContent = ({
  modalDetails,
}: {
  modalDetails: ModalMovieDetails | ModalTVDetails;
}) => {
  const [page, setPage] = useState<MenuPage>("summary");

  const handlePageChange = (value: MenuPage) => {
    setPage(value);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-1 pt-5 p-5 md:p-8 flex-col gap-2 md:gap-5">
        {modalDetails.mediaType === "tv" && (
          <ModalTabs currentPage={page} onClick={handlePageChange} />
        )}
        {page === "summary" && <Summary modalDetails={modalDetails} />}
        {page === "seasons" && modalDetails.mediaType === "tv" && (
          <Seasons seasons={modalDetails.seasons} />
        )}
      </div>
      <ModalSideBar modalDetails={modalDetails} />
    </div>
  );
};

export default ModalContent;
