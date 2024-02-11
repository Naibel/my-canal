import { ChangeEvent, useState } from "react";
import { LogoMyCanal } from "../LogoMyCanal/LogoMyCanal";
import { SearchBar } from "./SearchBar";
import { MediaType } from "@_types";

type NavBarProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  searchValue: string;
  searchMediaType: string;
};

const NavBar = ({
  onChange,
  onSelectChange,
  searchValue,
  searchMediaType,
}: NavBarProps) => {
  const [isInputOnFocus, setIsInputOnFocus] = useState<boolean>(false);

  const handleFocus = () => {
    setIsInputOnFocus(true);
  };

  const handleBlur = () => {
    setIsInputOnFocus(false);
  };

  return (
    <div className="flex left-0 right-0 items-center bg-black px-5 py-3 shadow-lg">
      <LogoMyCanal />
      <div className={`duration-600  flex-1`} />
      <div>
        <SearchBar
          onChange={onChange}
          onSelectChange={onSelectChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          searchValue={searchValue}
          searchMediaType={searchMediaType}
        />
      </div>
    </div>
  );
};

export default NavBar;
