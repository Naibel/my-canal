import { create } from "zustand";

import { MediaType } from "~/types";

interface StoreState {
  searchValue: string;
  searchMediaType: MediaType;
  setSearchValue: (value: string) => void;
  setSearchMediaType: (value: MediaType) => void;
}

const useNavbarSearchStore = create<StoreState>()((set) => ({
  searchValue: "",
  searchMediaType: "tv",
  setSearchValue: (newSearchValue: string) =>
    set(() => ({ searchValue: newSearchValue })),
  setSearchMediaType: (newMediaTypeValue: MediaType) =>
    set(() => ({ searchMediaType: newMediaTypeValue })),
}));

export default useNavbarSearchStore;
