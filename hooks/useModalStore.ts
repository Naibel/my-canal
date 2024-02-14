import { create } from "zustand";

import { ModalMovieDetails, ModalTVDetails } from "~/types";

interface StoreState {
  modalDetails: ModalMovieDetails | ModalTVDetails | null;
  setModalDetails: (
    modalDetails: ModalMovieDetails | ModalTVDetails | null
  ) => void;
  closeModal: () => void;
}

const useModalStore = create<StoreState>()((set) => ({
  modalDetails: null,
  setModalDetails: (newValue: ModalMovieDetails | ModalTVDetails | null) =>
    set(() => ({ modalDetails: newValue })),
  closeModal: () => set(() => ({ modalDetails: null })),
}));

export default useModalStore;
