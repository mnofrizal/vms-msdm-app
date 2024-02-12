import { create } from "zustand";

export const useTotalAnggaranStore = create((set, get) => ({
  totalAnggaran: {
    budget: 0,
    terpakai: 0,
    sisa: 0,
  },

  addAnggaran: (newAnggaran) => {
    set((state) => {
      return { totalAnggaran: newAnggaran };
    });
  },
}));
