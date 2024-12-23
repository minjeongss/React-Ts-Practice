import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface State {
  user: {
    email: string;
    displayName: string;
    isValid: boolean;
  } | null;
}
interface Actions {
  actions: {
    setDisplayNameImmer: (name: string) => void;
  };
}

const initialState: State = {
  user: null,
};

export const useUserStore = create(
  immer<State & Actions>((set) => ({
    ...initialState,
    actions: {
      setDisplayNameImmer: (name) => {
        set((state) => {
          if (state.user) {
            state.user.displayName = name;
          }
        });
      },
    },
  }))
);
