import { ReactNode } from "react";

import { Title } from "~/components";

type ModalContentSectionProps = {
  title: string;
  children: ReactNode;
};

const ModalContentSection = ({ title, children }: ModalContentSectionProps) => (
  <div className="flex flex-1 flex-col gap-2">
    <Title>{title}</Title>
    {children}
  </div>
);

export default ModalContentSection;
