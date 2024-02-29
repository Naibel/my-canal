import { ReactNode } from "react";

import { Title } from "~/components";

type ContentSectionProps = {
  title: string;
  children: ReactNode;
};

const ContentSection = ({ title, children }: ContentSectionProps) => (
  <div className="flex flex-col gap-2 text-center md:text-left">
    <Title>{title}</Title>
    {children}
  </div>
);

export default ContentSection;
