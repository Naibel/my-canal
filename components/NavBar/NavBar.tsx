import { ChangeEvent, useState } from "react";

import { LogoMyCanal, SearchInput } from "~/components";

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
    <div className="grid grid-rows-2 grid-cols-1 md:flex md:flex-row justify-between items-center bg-black px-5 py-3 shadow-md">
      <LogoMyCanal />
      <SearchInput
        onChange={onChange}
        onSelectChange={onSelectChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        searchValue={searchValue}
        searchMediaType={searchMediaType}
      />
    </div>
  );
};

export default NavBar;
