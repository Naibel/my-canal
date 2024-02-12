import { ChangeEvent } from "react";
import { IoSearchOutline } from "react-icons/io5";

type SearchInputProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  searchMediaType: string;
  searchValue: string;
};

const SearchInput = ({
  onChange,
  onSelectChange,
  onFocus,
  onBlur,
  searchMediaType,
  searchValue,
}: SearchInputProps) => (
  <div className="flex gap-3 border-b-2">
    <div className="pointer-events-none inset-y-0 flex pl-2 items-center">
      <span className="text-white sm:text-sm">
        <IoSearchOutline />
      </span>
    </div>
    <input
      type="search"
      name="search"
      id="searchInput"
      className="bg-black flex-1 outline-none text-white block py-1.5 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-neutral-600 sm:text-sm sm:leading-6"
      placeholder="Rechercher un film/une série"
      value={searchValue}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
    <div className=" flex items-center">
      <select
        id="mediaType"
        name="mediaType"
        className="border-0 bg-transparent py-0 pl-2 pr-5 text-white ring-black focus:ring-inset sm:text-sm"
        onChange={onSelectChange}
        value={searchMediaType}
      >
        <option value="movie">Films</option>
        <option value="tv">Séries</option>
      </select>
    </div>
  </div>
);

export default SearchInput;
