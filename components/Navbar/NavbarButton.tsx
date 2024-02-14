import { ReactNode } from "react";
import Link from "next/link";

import { PageType } from "./Navbar";

type NavbarButtonProps = {
  to: PageType;
  children: ReactNode;
  isActive: boolean;
};

const NavbarButton = ({ to, children, isActive }: NavbarButtonProps) => (
  <Link href={`/${to}`}>
    <span
      className={`duration-300 uppercase italic font-semibold text-base md:text-lg ${
        isActive
          ? ""
          : "opacity-50 hover:opacity-100 active:opacity-70 cursor-pointer"
      }`}
    >
      {children}
    </span>
  </Link>
);

export default NavbarButton;
