import { ReactNode, useEffect, useState } from "react";

import styles from "./Modal.module.css";

type ModalProps = {
  children: ReactNode;
  handleClose: () => void;
};

const Modal = ({ children, handleClose }: ModalProps) => {
  const [displayModal, setDisplayModal] = useState(false);

  //EASE-IN ANIMATION
  useEffect(() => {
    const handler = setTimeout(() => {
      setDisplayModal(true);
    }, 50);
    return () => {
      clearTimeout(handler);
    };
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
      className={`${
        displayModal ? "opacity-1" : "opacity-0"
      } duration-300 bg-black/70 fixed overflow-auto left-0 right-0 top-0 h-screen z-20`}
    >
      <div
        className={`${
          displayModal ? styles.displayed : styles.hidden
        } duration-500 bg-black mb-5 max-w-5xl overflow-hidden mx-auto md:rounded-md shadow-lg`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
