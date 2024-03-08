import { create } from "zustand";

interface PlayerState {
  isVisiblePlayer: boolean;
  setIsVisiblePlayer: (isVisiblePlayer: boolean) => void;
}

const usePlayerState = create<PlayerState>((set) => ({
  isVisiblePlayer: false,
  setIsVisiblePlayer: (isVisiblePlayer: boolean) => set({ isVisiblePlayer }),
}));
