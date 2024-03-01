import { ReactNode } from "react";
import { createPortal } from "react-dom";

import { useModalStore } from "~/hooks";

import Modal from "../views/Modal/Modal";

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const { content, closeModal } = useModalStore();

  return (
    <>
      {content !== null &&
        createPortal(
          <Modal content={content} handleClose={closeModal} />,
          document.body
        )}
      {children}
    </>
  );
};

export default ModalProvider;
