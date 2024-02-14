"use client";
import { usePathname } from "next/navigation";

import LogoMyCanal from "../../components/LogoMyCanal/LogoMyCanal";

import NavbarButton from "./NavbarButton";
import NavbarSearchInput from "./NavbarSearchInput";

export type PageType = "trending" | "discover";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="grid grid-rows-2 grid-cols-1 md:flex md:flex-row gap-5 items-center bg-black px-5 py-4 shadow-md">
      <LogoMyCanal />
      <div className="flex gap-5 justify-center">
        <NavbarButton to={"trending"} isActive={pathname === "/trending/"}>
          Tendances
        </NavbarButton>
        <NavbarButton to={"discover"} isActive={pathname === "/discover/"}>
          Découvrir
        </NavbarButton>
      </div>
      <div className="flex-1 hidden md:block" />
      <NavbarSearchInput />
    </nav>
  );
};

export default Navbar;
