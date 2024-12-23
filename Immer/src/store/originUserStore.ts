import { create } from "zustand";

interface State {
  user: {
    email: string;
    displayName: string;
    isValid: boolean;
  } | null;
}
interface Actions {
  actions: {
    setDisplayNameOrigin: (name: string) => void;
  };
}

const initialState: State = {
  user: null,
};

export const useUserStore = create<State & Actions>((set) => ({
  ...initialState,
  actions: {
    setDisplayNameOrigin: (name) => {
      set((state) => {
        if (state.user) {
          return {
            user: {
              ...state.user,
              displayName: name,
            },
          };
        }
        return {}; // 병합할 상태, 상태 변경 없음!
      });
    },
  },
}));
