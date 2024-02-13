import { ChangeEvent, useState } from "react";

import { LogoMyCanal, SearchInput } from "~/components";

import NavBarButton from "./NavBarButton";

export type Page = "trending" | "discover";

type NavBarProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  searchValue: string;
  searchMediaType: string;
  currentPage: Page;
  onChangePage: (value: Page) => void;
};

const NavBar = ({
  onChange,
  onSelectChange,
  searchValue,
  searchMediaType,
  currentPage,
  onChangePage,
}: NavBarProps) => {
  const [isInputOnFocus, setIsInputOnFocus] = useState<boolean>(false);

  const handleFocus = () => {
    setIsInputOnFocus(true);
  };

  const handleBlur = () => {
    setIsInputOnFocus(false);
  };

  return (
    <div className="grid grid-rows-2 grid-cols-1 md:flex md:flex-row gap-5 items-center bg-black px-5 py-4 shadow-md">
      <LogoMyCanal />
      <div className="flex gap-5 justify-center">
        <NavBarButton
          currentPage={currentPage}
          page={"trending"}
          onChangePage={onChangePage}
        >
          Tendances
        </NavBarButton>
        <NavBarButton
          currentPage={currentPage}
          page={"discover"}
          onChangePage={onChangePage}
        >
          Découvrir
        </NavBarButton>
      </div>
      <div className="flex-1 hidden md:block" />
      <SearchInput
        onChange={onChange}
        onSelectChange={onSelectChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        searchValue={searchValue}
        searchMediaType={searchMediaType}
        isInputOnFocus={isInputOnFocus}
      />
    </div>
  );
};

export default NavBar;
