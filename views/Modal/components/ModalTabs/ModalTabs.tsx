import { ModalDetailsContent } from "~/types";

import { MenuPage } from "../ModalContent/ModalContent";

import Tab from "./components/Tab";

const pages: { label: string; value: MenuPage }[] = [
  { label: "En résumé", value: "summary" },
  { label: "Saisons", value: "seasons" },
  { label: "Plus d'infos", value: "moreInfo" },
];

type TabsProps = {
  contentDetails: ModalDetailsContent;
  currentPage: MenuPage;
  onClick: (value: MenuPage) => void;
};

const ModalTabs = ({ contentDetails, currentPage, onClick }: TabsProps) => (
  <nav className="flex flex-col md:flex-row items-center md:items-start md:justify-start gap-2 md:gap-10">
    {pages.map((page, index: number) => {
      if (Object.hasOwn(contentDetails, page.value))
        return (
          <Tab
            key={"page" + index}
            page={page.value}
            currentPage={currentPage}
            onClick={onClick}
          >
            {page.label}
          </Tab>
        );
      else return false;
    })}
  </nav>
);

export default ModalTabs;
