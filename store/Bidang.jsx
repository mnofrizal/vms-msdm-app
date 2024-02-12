import { create } from "zustand";

export const useBidangStore = create((set, get) => ({
  bidang: [],

  addBidang: (newBidang) => {
    set((state) => {
      return { bidang: newBidang };
    });
  },

  getExcomp: (id) => {
    get((state) => {
      state.excomps.map((user) => {
        if (user._id === id) {
          return { user };
        }
      });
    });
  },
  editExcomp: (id, updatedExcomp) => {
    set((state) => {
      console.log("updatedExcomp");
      console.log(updatedExcomp);
      const updatedExcomps = state.excomps.map((user) => {
        if (user._id === id) {
          return { ...user, ...updatedExcomp };
        }
        return user;
      });
      return { excomps: updatedExcomps };
    });
  },
  deleteExcomp: (id) => {
    set((state) => {
      const updatedExcomps = state.excomps.filter((user) => user._id !== id);
      return { excomps: updatedExcomps };
    });
  },
}));
