import { ReactNode } from "react";

import { MenuPage } from "~/types/modal";

type TabProps = {
  page: MenuPage;
  currentPage: MenuPage;
  onClick: (value: MenuPage) => void;
  children: ReactNode;
};

const Tab = ({ page, currentPage, onClick, children }: TabProps) => (
  <h2
    className={`text-lg md:text-xl uppercase font-semibold italic ${
      page === currentPage
        ? "border-b-2"
        : "opacity-50 hover:opacity-80 active:opacity-60 cursor-pointer"
    }`}
    onClick={() => onClick(page)}
  >
    {children}
  </h2>
);

export default Tab;
