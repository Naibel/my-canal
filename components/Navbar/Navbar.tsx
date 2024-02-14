"use client";
import { usePathname } from "next/navigation";

import LogoMyCanal from "../LogoMyCanal/LogoMyCanal";

import NavbarButton from "./NavbarButton";
import NavbarSearchInput from "./NavbarSearchInput";

export type PageType = "" | "discover";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="absolute z-10 left-0 right-0 flex flex-col overflow-auto">
      <nav className="  grid grid-rows-2 grid-cols-1 md:flex md:flex-row gap-5 items-center bg-black px-5 py-4 shadow-md">
        <LogoMyCanal />
        <div className="flex gap-5 justify-center">
          <NavbarButton to={""} isActive={pathname === "/"}>
            Tendances
          </NavbarButton>
          <NavbarButton to={"discover"} isActive={pathname === "/discover/"}>
            Découvrir
          </NavbarButton>
        </div>
        <div className="flex-1 hidden md:block" />
        <NavbarSearchInput />
      </nav>
      <div id="search_results" />
    </div>
  );
};

export default Navbar;
