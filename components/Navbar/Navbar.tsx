"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { LogoMyCanal } from "~/components";
import { useNavbarSearchStore } from "~/hooks";

import NavbarButton from "./NavbarButton";
import NavbarSearchInput from "./NavbarSearchInput";

export type PageType = "" | "discover";

const Navbar = () => {
  const pathname = usePathname();

  const [isInputOnFocus, setIsInputOnFocus] = useState<boolean>(false);

  const handleFocus = () => {
    setIsInputOnFocus(true);
  };

  const handleBlur = () => {
    setIsInputOnFocus(false);
  };

  return (
    <div className="flex flex-col">
      <nav className="grid grid-rows-2 grid-cols-1 md:flex md:flex-row gap-5 justify-between items-center bg-black px-5 py-4 shadow-md">
        <LogoMyCanal />
        <div className="relative flex flex-1">
          <div
            className={`duration-500 flex gap-5 ${
              isInputOnFocus ? "opacity-0" : "opacity-1"
            } justify-center`}
          >
            <NavbarButton to={""} isActive={pathname === "/"}>
              Tendances
            </NavbarButton>
            <NavbarButton to={"discover"} isActive={pathname === "/discover/"}>
              Découvrir
            </NavbarButton>
          </div>
          <NavbarSearchInput
            isInputOnFocus={isInputOnFocus}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
          />
        </div>
      </nav>
      <div id="search_results" />
    </div>
  );
};

export default Navbar;
