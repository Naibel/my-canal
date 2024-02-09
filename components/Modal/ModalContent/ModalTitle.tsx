import { ReactNode } from "react";

const ModalTitle = ({ children }: { children: ReactNode }) => (
  <p className="uppercase italic font-semibold mb-2">{children} </p>
);

export default ModalTitle;
