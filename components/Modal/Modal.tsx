import { ModalMovieDetails, ModalTVDetails } from "@_types";
import ModalHeader from "./ModalHeader";
import ModalContent from "./ModalContent";
import { useEffect, useState } from "react";

type ModalProps = {
  modalDetails: ModalMovieDetails | ModalTVDetails;
  handleClose: () => void;
};

const Modal = ({ modalDetails, handleClose }: ModalProps) => {
  const [displayModal, setDisplayModal] = useState(false);
  const {
    bgImage,
    title,
    originalTitle,
    mediaType,
    rating,
    yearOfRelease,
    nbOfVotes,
  } = modalDetails;

  //EASE-IN ANIMATION
  useEffect(() => {
    setTimeout(() => {
      setDisplayModal(true);
    }, 50);
  }, []);

  //EASE_ON ANIMATION
  const onClose = () => {
    setDisplayModal(false);
    setTimeout(() => {
      handleClose();
    }, 600);
  };

  return (
    <div
      style={{
        opacity: displayModal ? 1 : 0,
        transition: "300ms",
      }}
      className="bg-black/70 fixed overflow-auto left-0 right-0 h-screen z-10"
    >
      <div
        style={{
          marginTop: displayModal ? 20 : 60,
          opacity: displayModal ? 1 : 0,
          transition: "600ms",
        }}
        className={`bg-black max-w-5xl overflow-hidden mx-auto md:rounded-md shadow-lg`}
      >
        <ModalHeader
          title={title}
          originalTitle={originalTitle}
          mediaType={mediaType}
          bgImage={bgImage}
          onClose={onClose}
          yearOfRelease={yearOfRelease}
          rating={rating}
          nbOfVotes={nbOfVotes}
        />
        <ModalContent modalDetails={modalDetails} />
      </div>
    </div>
  );
};

export default Modal;
