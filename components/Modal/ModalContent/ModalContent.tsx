import { useState } from "react";

import { ModalMovieDetails, ModalTVDetails } from "~/types";

import ModalOtherInfo from "./ModalOtherInfo/ModalOtherInfo";
import ModalOverview from "./ModalOverview";
import ModalSeasons from "./ModalSeasons";

type MenuParts = "overview" | "seasons";
const ModalContent = ({
  modalDetails,
}: {
  modalDetails: ModalMovieDetails | ModalTVDetails;
}) => {
  const [modalPart, setModalPart] = useState<MenuParts>("overview");

  const handlePartChange = (value: MenuParts) => {
    setModalPart(value);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-1 pt-5 p-8 flex-col gap-5">
        {modalDetails.mediaType === "tv" && (
          <div className="flex flex-1 justify-start gap-10">
            <h2
              className={`text-xl uppercase font-semibold italic ${
                modalPart === "overview"
                  ? "border-b-2"
                  : "opacity-50 hover:opacity-80 active:opacity-60 cursor-pointer"
              }`}
              onClick={() => handlePartChange("overview")}
            >
              En résumé
            </h2>
            <h2
              className={`text-xl uppercase font-semibold italic ${
                modalPart === "seasons"
                  ? "border-b-2"
                  : "opacity-50 hover:opacity-80 active:opacity-60 cursor-pointer"
              } hover:`}
              onClick={() => handlePartChange("seasons")}
            >
              Saisons
            </h2>
          </div>
        )}
        {modalPart === "overview" && (
          <ModalOverview modalDetails={modalDetails} />
        )}
        {modalPart === "seasons" && modalDetails.mediaType === "tv" && (
          <ModalSeasons seasons={modalDetails.seasons} />
        )}
      </div>
      <ModalOtherInfo modalDetails={modalDetails} />
    </div>
  );
};

export default ModalContent;
