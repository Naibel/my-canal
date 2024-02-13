import { ReactNode } from "react";

import { PageType } from "./NavBar";

type NavBarButtonProps = {
  currentPage: PageType;
  page: PageType;
  onChangePage: (value: PageType) => void;
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
