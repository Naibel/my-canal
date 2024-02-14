import { ReactNode } from "react";
import { createPortal } from "react-dom";

import { useAlertStore } from "~/hooks";

import { Alert } from "~/components";

const AlertProvider = ({ children }: { children: ReactNode }) => {
  const { alertMessage, setAlertMessage } = useAlertStore();

  return (
    <>
      {alertMessage &&
        createPortal(
          <Alert
            type={alertMessage.type}
            message={alertMessage.message}
            onClose={() => setAlertMessage(null)}
          />,
          document.body
        )}
      {children}
    </>
  );
};

export default AlertProvider;
