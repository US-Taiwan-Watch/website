import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
// import { produce } from 'immer'
import { immer } from "zustand/middleware/immer";
import { config } from "@/config";

type State = {
  location: string;
  lat: number;
  lng: number;
  nested: {
    nested1: {
      nested2: {
        data: string;
      };
    };
  };
};

type Action = {
  updateLocation: (location: State["location"]) => void;
  updateLatLng: (lat: State["lat"], lng: State["lng"]) => void;
  updateNestedData: () => void;
  reset: () => void;
};

const initialState: State = {
  location: "",
  lat: 0,
  lng: 0,
  nested: {
    nested1: {
      nested2: {
        data: "data",
      },
    },
  },
};

// Use traditional setState syntax for non-immer updates
// const useSearchStore = create<State & Action>((set) => ({
//   location: '',
//   lat: 0,
//   lng: 0,
//   updateLocation: (location: State['location']) => set(() => ({ location })),
//   updateLatLng: (lat: State['lat'], lng: State['lng']) => set(() => ({ lat, lng })),
//   // nested
//   nested: {
//     nested1: {
//       nested2: {
//         data: 'data',
//       },
//     },
//   },
//   updateNestedData: () => set(produce((state) => {
//     state.nested.nested1.nested2.data = 'new data'
//   })),
//   reset: () => set(initialState),
// }))

// Use immer middleware to enable immer-style updates
const useSearchStore = create<State & Action>()(
  immer((set) => ({
    location: "",
    lat: 0,
    lng: 0,
    updateLocation: (location: State["location"]) => set(() => ({ location })),
    updateLatLng: (lat: State["lat"], lng: State["lng"]) =>
      set(() => ({ lat, lng })),
    // nested
    nested: {
      nested1: {
        nested2: {
          data: "data",
        },
      },
    },
    updateNestedData: () =>
      set((state) => {
        state.nested.nested1.nested2.data = "new data";
      }),
    reset: () => set(initialState),
  })),
);

export default useSearchStore;

if (config.NODE_ENV === "development") {
  mountStoreDevtool("SearchStore", useSearchStore);
}
