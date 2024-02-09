import { LogoMyCanal } from "./LogoMyCanal";
import { SearchBar } from "./SearchBar";

const NavBar = () => {
  return (
    <div className="flex left-0 right-0 items-center bg-black px-5 py-3 shadow-lg">
      <LogoMyCanal />
      <div className="flex-1" />
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;
