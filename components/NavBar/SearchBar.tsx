import { ChangeEvent } from "react";
import { IoSearchOutline } from "react-icons/io5";

type SearchBarProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  searchMediaType: string;
  searchValue: string;
};

export const SearchBar = ({
  onChange,
  onSelectChange,
  onFocus,
  onBlur,
  searchMediaType,
  searchValue,
}: SearchBarProps) => (
  <div>
    <div className="relative rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span className="text-white sm:text-sm">
          <IoSearchOutline />
        </span>
      </div>
      <input
        type="search"
        name="search"
        id="searchInput"
        className="bg-black outline-none text-white block w-full border-b-2 py-1.5 pl-9 pr-24 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-neutral-600 sm:text-sm sm:leading-6"
        placeholder="Rechercher un film/une série"
        value={searchValue}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <div className="absolute inset-y-0 right-2 flex items-center">
        <select
          id="mediaType"
          name="mediaType"
          className="h-full border-0 bg-transparent py-0 pl-2 pr-5 text-white  ring-black focus:ring-inset sm:text-sm"
          onChange={onSelectChange}
          value={searchMediaType}
        >
          <option value="movie">Films</option>
          <option value="tv">Séries</option>
        </select>
      </div>
    </div>
  </div>
);
