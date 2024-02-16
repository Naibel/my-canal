import { create } from "zustand";

import { ModalDetailsNew } from "~/types";

interface StoreState {
  modalDetails: ModalDetailsNew | null;
  setModalDetails: (modalDetails: ModalDetailsNew | null) => void;
  closeModal: () => void;
}

const useModalStore = create<StoreState>()((set) => ({
  modalDetails: null,
  setModalDetails: (newValue: ModalDetailsNew | null) =>
    set(() => ({ modalDetails: newValue })),
  closeModal: () => set(() => ({ modalDetails: null })),
}));

export default useModalStore;
