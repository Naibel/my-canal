import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export const LogoMyCanal = () => (
  <div>
    <h2 className={`text-3xl`}>
      <span>my</span>
      <span className={`font-bold italic`}>CANAL</span>
    </h2>
  </div>
);

const SearchBar = () => {
  return (
    <div>
      <div className="relative rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-white sm:text-sm">
            <IoSearchOutline />
          </span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="bg-black text-white block w-full border-solid border-b-white border-b-2 py-1.5 pl-9 pr-24 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Rechercher un film/une série"
        />
        <div className="absolute inset-y-0 right-2 flex items-center">
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-5 text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option>Films</option>
            <option>Séries</option>
          </select>
        </div>
      </div>
    </div>
  );
};

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
