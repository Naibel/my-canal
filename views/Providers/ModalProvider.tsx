import { ReactNode } from "react";
import { createPortal } from "react-dom";

import { useModalStore } from "~/hooks";

import Modal from "../Modal/Modal";

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const { modalDetails, closeModal } = useModalStore();

  return (
    <>
      {modalDetails !== null &&
        createPortal(
          <Modal modalDetails={modalDetails} handleClose={closeModal} />,
          document.body
        )}
      {children}
    </>
  );
};

export default ModalProvider;
