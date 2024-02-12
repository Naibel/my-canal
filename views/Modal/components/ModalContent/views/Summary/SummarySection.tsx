import { ReactNode } from "react";

import { Title } from "~/components";

type SummarySectionProps = {
  title: string;
  children: ReactNode;
};

const SummarySection = ({ title, children }: SummarySectionProps) => (
  <div className="flex flex-col gap-2">
    <Title>{title}</Title>
    {children}
  </div>
);

export default SummarySection;
