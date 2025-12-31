import { create } from "zustand";
import { persist } from "zustand/middleware";
import { RecentStore } from "./types";
import { Product } from "@/utils/types";

export const useRecentStore = create<RecentStore>()(
  persist(
    (set, get) => ({
      recents: [],

      addToRecent: (product: Product) => {
        const _product = { ...product, isWatched: true };
        const prev = get().recents;

        // Prevent duplicates by ID
        const filtered = prev.filter(p => p.id !== product.id);
        const updated = [_product, ...filtered];

        set({ recents: updated });
        console.log("Recents (updated):", updated);
      },

      recentProducts: () => get().recents,
    }),
    {
      name: "recent-products", // key for localStorage
    }
  )
);
