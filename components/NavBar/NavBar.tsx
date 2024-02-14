"use client";
import { useState } from "react";

import useNavbarSearchStore from "~/hooks/useNavbarSearchStore";

import LogoMyCanal from "../LogoMyCanal/LogoMyCanal";

import NavBarButton from "./NavBarButton";
import SearchInput from "./SearchInput";

export type PageType = "trending" | "discover";

const NavBar = () => {
  const { searchValue, searchMediaType, setSearchMediaType, setSearchValue } =
    useNavbarSearchStore();

  const [isInputOnFocus, setIsInputOnFocus] = useState<boolean>(false);

  const handleFocus = () => {
    setIsInputOnFocus(true);
  };

  const handleBlur = () => {
    setIsInputOnFocus(false);
  };

  return (
    <nav className="grid grid-rows-2 grid-cols-1 md:flex md:flex-row gap-5 items-center bg-black px-5 py-4 shadow-md">
      <LogoMyCanal />
      <div className="flex gap-5 justify-center">
        <NavBarButton to={"trending"}>Tendances</NavBarButton>
        <NavBarButton to={"discover"}>Découvrir</NavBarButton>
      </div>
      <div className="flex-1 hidden md:block" />
      <SearchInput
        onChange={setSearchValue}
        onSelectChange={setSearchMediaType}
        onFocus={handleFocus}
        onBlur={handleBlur}
        searchValue={searchValue}
        searchMediaType={searchMediaType}
        isInputOnFocus={isInputOnFocus}
      />
    </nav>
  );
};

export default NavBar;
