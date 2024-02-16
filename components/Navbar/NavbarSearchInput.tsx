import { ChangeEvent, useRef, useState } from "react";
import { IoClose, IoSearchSharp } from "react-icons/io5";

import { useNavbarSearchStore } from "~/hooks";

type NavbarSearchInputProps = {
  isInputOnFocus: boolean;
  handleFocus: () => void;
  handleBlur: () => void;
};

const NavbarSearchInput = ({
  isInputOnFocus,
  handleFocus,
  handleBlur,
}: NavbarSearchInputProps) => {
  const { searchValue, searchMediaType, setSearchMediaType, setSearchValue } =
    useNavbarSearchStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef(null);
  return (
    <div
      className={`duration-500 overflow-hidden flex items-center gap-3 absolute -top-2 md:-top-1 right-0 h-9 rounded-full py-1.5 ${
        isInputOnFocus
          ? "w-full ring-1 ring-inset bg-neutral-900 ring-neutral-600 px-2 md:px-3 "
          : "w-6 md:w-7 px-0"
      }`}
    >
      <IoSearchSharp
        size={24}
        onClick={handleFocus}
        className="duration-300 opacity-70 hover:opacity-100 cursor-pointer"
      />
      {isInputOnFocus && (
        <div className=" flex flex-1 items-center">
          <input
            autoFocus
            ref={inputRef}
            type="search"
            name="search"
            id="searchInput"
            className="bg-transparent border-0 flex-1 pr-2 outline-none text-white block text-gray-900 placeholder:text-gray-400 placeholder:hidden"
            placeholder="Rechercher un film/une série"
            value={searchValue}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setSearchValue(event.target.value)
            }
          />
          <IoClose
            className="duration-300 opacity-70 hover:opacity-100 cursor-pointer rounded-full p-1 bg-black/70 "
            size={29}
            onClick={() => {
              setSearchValue("");
              handleBlur();
            }}
          />
          <select
            ref={selectRef}
            id="mediaType"
            name="mediaType"
            className="border-0 bg-transparent py-0 pl-2 md:pr-5 text-white ring-black focus:ring-inset "
            onChange={(event: ChangeEvent<HTMLSelectElement>) => {
              const newValue = event.target.value;
              inputRef?.current?.focus();

              return newValue === "tv" || newValue === "movie"
                ? setSearchMediaType(newValue)
                : false;
            }}
            value={searchMediaType}
          >
            <option value="movie">Films</option>
            <option value="tv">Séries</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default NavbarSearchInput;
