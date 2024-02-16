import { useState } from "react";

import { MenuPage, ModalMovieDetails, ModalTVDetails } from "~/types/modal";

import ModalSideBar from "../ModalSideBar/ModalSideBar";
import ModalTabs from "../ModalTabs/ModalTabs";

import { MoreInfo, Seasons, Summary } from "./views";

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
        <ModalTabs
          mediaType={modalDetails.mediaType}
          currentPage={page}
          onClick={handlePageChange}
        />
        {page === "summary" && <Summary modalDetails={modalDetails} />}
        {page === "seasons" && modalDetails.mediaType === "tv" && (
          <Seasons seasons={modalDetails.seasons} />
        )}
        {page === "more_info" && <MoreInfo modalDetails={modalDetails} />}
      </div>
      <ModalSideBar modalDetails={modalDetails} />
    </div>
  );
};

export default ModalContent;
