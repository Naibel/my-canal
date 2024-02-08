import React from "react";

import { ModalMovieDetails, ModalTVDetails } from "@_types";
import ModalOtherInfo from "./ModalOtherInfo";

const ModalContent = ({
  modalDetails,
}: {
  modalDetails: ModalMovieDetails | ModalTVDetails;
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 px-10 py-5">
      <div className="flex-1">
        <h3 className="uppercase italic font-semibold">Résumé</h3>
        <p>{modalDetails.overview}</p>
      </div>
      {modalDetails.mediaType === "tv" && (
        <ModalOtherInfo modalDetails={modalDetails} />
      )}
    </div>
  );
};

export default ModalContent;
