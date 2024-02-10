import { ChangeEvent, useState } from "react";
import { LogoMyCanal } from "./LogoMyCanal";
import { SearchBar } from "./SearchBar";

const NavBar = ({
  onChange,
  searchValue,
}: {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
}) => {
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
          searchValue={searchValue}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

export default NavBar;
