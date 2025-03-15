import { configureStore } from "@reduxjs/toolkit";
import venuesReducer from "./venuesSlice";
import myEventsReducer from "./myEventsSlice";
import genresReducer from "./genresSlice";
import notificationsReducer from "./notificationsSlice";

export const store = configureStore({
  reducer: {
    venues: venuesReducer,
    myEvents: myEventsReducer,
    genres: genresReducer,
    notifications: notificationsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
