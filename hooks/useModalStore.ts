import { ReactNode } from "react";
import { create } from "zustand";

interface StoreState {
  content: ReactNode | null;
  setModalContent: (content: ReactNode | null) => void;
  closeModal: () => void;
}

const useModalStore = create<StoreState>()((set) => ({
  content: null,
  setModalContent: (newValue: ReactNode | null) =>
    set(() => ({ content: newValue })),
  closeModal: () => set(() => ({ content: null })),
}));

export default useModalStore;
