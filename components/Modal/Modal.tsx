import { useEffect, useState } from "react";

import { ModalMovieDetails, ModalTVDetails } from "~/types";

import ModalContent from "./ModalContent/ModalContent";
import ModalHeader from "./ModalHeader/ModalHeader";

type ModalProps = {
  modalDetails: ModalMovieDetails | ModalTVDetails;
  handleClose: () => void;
};

const Modal = ({ modalDetails, handleClose }: ModalProps) => {
  const [displayModal, setDisplayModal] = useState(false);

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
        <ModalHeader modalDetails={modalDetails} onClose={onClose} />
        <ModalContent modalDetails={modalDetails} />
      </div>
    </div>
  );
};

export default Modal;
