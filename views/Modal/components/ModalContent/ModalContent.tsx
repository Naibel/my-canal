import { useState } from "react";

import { ModalDetailsContent } from "~/types";

import ModalSideBar from "../ModalSideBar/ModalSideBar";
import ModalTabs from "../ModalTabs/ModalTabs";

import { MoreInfo, Seasons, Summary } from "./views";

export type MenuPage = "summary" | "seasons" | "moreInfo";

const ModalContent = ({
  contentDetails,
}: {
  contentDetails: ModalDetailsContent;
}) => {
  const { summary, seasons, moreInfo, sidebar } = contentDetails;
  const [page, setPage] = useState<MenuPage>("summary");

  const handlePageChange = (value: MenuPage) => {
    setPage(value);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-1 pt-5 p-5 md:p-8 flex-col gap-2 md:gap-5">
        <ModalTabs
          contentDetails={contentDetails}
          currentPage={page}
          onClick={handlePageChange}
        />
        {page === "summary" && <Summary summaryDetails={summary} />}
        {page === "seasons" && seasons && <Seasons seasons={seasons} />}
        {page === "moreInfo" && moreInfo && (
          <MoreInfo moreInfoDetails={moreInfo} />
        )}
      </div>
      {sidebar && <ModalSideBar sideBarDetails={sidebar} />}
    </div>
  );
};

export default ModalContent;
