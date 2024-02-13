import { ReactNode } from "react";

import { Page } from "./NavBar";

type NavBarButtonProps = {
  currentPage: Page;
  page: Page;
  onChangePage: (value: Page) => void;
  children: ReactNode;
};

const NavBarButton = ({
  currentPage,
  page,
  onChangePage,
  children,
}: NavBarButtonProps) => (
  <span
    className={`duration-300 uppercase italic font-semibold text-base md:text-lg ${
      currentPage !== page
        ? "opacity-50 hover:opacity-100 active:opacity-70 cursor-pointer"
        : ""
    }`}
    onClick={() => onChangePage(page)}
  >
    {children}
  </span>
);

export default NavBarButton;
