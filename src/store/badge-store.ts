import { create } from "zustand";

export type BadgeStore = {
  id: string;
  name: string;
  email: string;
  eventTitle: string;
  checkInURL: string;
  image?: string;
};

type StateProps = {
  data: BadgeStore | null;
  save: (data: BadgeStore) => void;
};

export const useBadgeStore = create<StateProps>((set) => ({
  data: null,
  save: (data: BadgeStore) => set(() => ({ data })),
  // save: (data: BadgeStore) => set(() => ({ data: data })),
}));
