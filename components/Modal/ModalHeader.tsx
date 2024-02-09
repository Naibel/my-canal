import React from "react";
import { IoClose } from "react-icons/io5";

import StarRating from "@components/StarRating/StarRating";
import { ModalMovieDetails, ModalTVDetails } from "@_types";

type ModalHeaderProps = {
  modalDetails: ModalMovieDetails | ModalTVDetails;
  onClose: () => void;
};

const ModalHeader = ({ modalDetails, onClose }: ModalHeaderProps) => (
  <div
    style={{
      backgroundImage: `url(${modalDetails.bgImage})`,
    }}
    className="aspect-video relative px-10 pt-72 pb-4 bg-cover bg-center"
  >
    {modalDetails.tagline && (
      <div className="bg-black/70 rounded-md absolute top-5 left-5 px-5 py-2">
        <span className="italic">"{modalDetails.tagline}"</span>
      </div>
    )}
    <div
      className="duration-300 rounded-full p-1 bg-black/70 hover:bg-black cursor-pointer absolute z-10 top-3 right-3 "
      onClick={onClose}
    >
      <IoClose size={30} />
    </div>
    <div className="absolute z-0 left-0 right-0 top-0 bottom-0 bg-gradient-to-b from-transparent from-50%  to-black to-100%" />
    <div className="absolute px-10 bottom-5 left-0 right-0 flex z-20 flex-col md:flex-row items-center md:items-end">
      <div className="flex-1 flex flex-col items-center md:items-start">
        <h2 className={`text-3xl text-left uppercase font-semibold italic`}>
          {modalDetails.title}
        </h2>
        {modalDetails.title !== modalDetails.originalTitle && (
          <h2 className={`text-lg text-left uppercase font-semibold italic`}>
            {modalDetails.originalTitle}
          </h2>
        )}
        <h3 className={`text-md text-left uppercase italic`}>
          {modalDetails.mediaType === "movie" ? "Film" : "Série télévisée"} -{" "}
          {modalDetails.yearOfRelease}{" "}
          {modalDetails.mediaType === "movie" && `- ${modalDetails.runtime}''`}
        </h3>
      </div>
      <div className="flex flex-col items-center md:items-end py-5 md:py-0">
        <StarRating note={modalDetails.rating} />
        <div>
          <span className="uppercase italic">Note moyenne </span>:{" "}
          <span className="uppercase italic font-semibold">
            {modalDetails.rating}/10{" "}
          </span>
          <span className="italic">
            sur <span className="font-semibold">{modalDetails.nbOfVotes}</span>{" "}
            votes
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default ModalHeader;
