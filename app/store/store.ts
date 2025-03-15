import { configureStore } from "@reduxjs/toolkit";
import venuesReducer from "./venuesSlice";
import myEventsReducer from "./myEventsSlice";

export const store = configureStore({
  reducer: {
    venues: venuesReducer,
    myEvents: myEventsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
