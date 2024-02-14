import { ChangeEvent } from "react";
import { IoSearchSharp } from "react-icons/io5";

import { MediaType } from "~/types";

type SearchInputProps = {
  onChange: (value: string) => void;
  onSelectChange: (value: MediaType) => void;
  onFocus: () => void;
  onBlur: () => void;
  searchMediaType: string;
  searchValue: string;
  isInputOnFocus: boolean;
};

const SearchInput = ({
  onChange,
  onSelectChange,
  onFocus,
  onBlur,
  searchMediaType,
  searchValue,
  isInputOnFocus,
}: SearchInputProps) => (
  <div
    className={`duration-300 w-full md:w-96 flex gap-3 items-center bg-neutral-900 rounded-full px-3 ${
      isInputOnFocus ? "ring-1 ring-inset ring-neutral-600" : ""
    }`}
  >
    <IoSearchSharp size={24} onClick={onFocus} />
    <div className="flex flex-1 gap-3">
      <input
        type="search"
        name="search"
        id="searchInput"
        className="bg-transparent border-0 flex-1 outline-none text-white block py-1.5 text-gray-900 placeholder:text-gray-400"
        placeholder="Rechercher un film/une série"
        value={searchValue}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChange(event.target.value)
        }
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <select
        id="mediaType"
        name="mediaType"
        className="border-0 bg-transparent py-0 pl-2 pr-5 text-white ring-black focus:ring-inset "
        onChange={(event: ChangeEvent<HTMLSelectElement>) => {
          const newValue = event.target.value;
          if (newValue !== "tv" && newValue !== "movie") return false;
          else onSelectChange(newValue);
        }}
        value={searchMediaType}
      >
        <option value="movie">Films</option>
        <option value="tv">Séries</option>
      </select>
    </div>
  </div>
);
export default SearchInput;
