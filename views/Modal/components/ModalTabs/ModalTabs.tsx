import { MenuPage } from "../ModalContent/ModalContent";

import Tab from "./components/Tab";

type TabsProps = {
  currentPage: MenuPage;
  onClick: (value: MenuPage) => void;
};

const ModalTabs = ({ currentPage, onClick }: TabsProps) => (
  <nav className="flex flex-1 justify-center md:justify-start gap-10">
    <Tab page={"summary"} currentPage={currentPage} onClick={onClick}>
      En résumé
    </Tab>
    <Tab page={"seasons"} currentPage={currentPage} onClick={onClick}>
      Saisons
    </Tab>
  </nav>
);

export default ModalTabs;
