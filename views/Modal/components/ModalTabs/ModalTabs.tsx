import { MediaType } from "~/types";

import { MenuPage } from "../ModalContent/ModalContent";

import Tab from "./components/Tab";

const pages: { label: string; value: MenuPage; displayedIn: MediaType[] }[] = [
  { label: "En résumé", value: "summary", displayedIn: ["tv", "movie"] },
  { label: "Saisons", value: "seasons", displayedIn: ["tv"] },
  { label: "Plus d'infos", value: "more_info", displayedIn: ["tv", "movie"] },
];

type TabsProps = {
  currentPage: MenuPage;
  mediaType: MediaType;
  onClick: (value: MenuPage) => void;
};

const ModalTabs = ({ mediaType, currentPage, onClick }: TabsProps) => (
  <nav className="flex flex-col md:flex-row items-center md:items-start md:justify-start gap-2 md:gap-10">
    {pages.map((page, index: number) => {
      if (page.displayedIn.includes(mediaType))
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
