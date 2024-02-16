import { create } from "zustand";

import { ModalDetails } from "~/types";

interface StoreState {
  modalDetails: ModalDetails | null;
  setModalDetails: (modalDetails: ModalDetails | null) => void;
  closeModal: () => void;
}

const useModalStore = create<StoreState>()((set) => ({
  modalDetails: null,
  setModalDetails: (newValue: ModalDetails | null) =>
    set(() => ({ modalDetails: newValue })),
  closeModal: () => set(() => ({ modalDetails: null })),
}));

export default useModalStore;
