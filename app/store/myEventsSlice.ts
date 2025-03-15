import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// a single event
export interface MyEvent {
  title: string;
  date: string;
  venueImageOne: string;
  description?: string;
  tickets: number;
  genre: string;
  ticketPrice: number;
}

interface MyEventsState {
  events: MyEvent[];
}

// the initial state
const initialState: MyEventsState = {
  events: [
    {
      title: "Emergency Intercom Live Show",
      date: "2025-06-15",
      venueImageOne: "/etp-caragh/images/3arena_1.jpg",
      description: "A comedy podcast hosted by Enya and Drew",
      tickets: 700,
      genre: "Comedy",
      ticketPrice: 30.0,
    },
    {
      title: "Metallica",
      date: "2025-07-20",
      venueImageOne: "/etp-caragh/images/croke-park-1.jpg",
      description: "A once in a lifetime experience world at Croke Park",
      tickets: 80000,
      genre: "Metal",
      ticketPrice: 140.0,
    },
    {
      title: "Taylor Swift: Eras Tour",
      date: "2025-08-10",
      venueImageOne: "/etp-caragh/images/o2_1.jpg",
      description: "Experience Taylor Swift performing all her eras live!",
      tickets: 75000,
      genre: "Pop",
      ticketPrice: 200.0,
    },
    {
      title: "The Weeknd: After Hours Tour",
      date: "2025-09-05",
      venueImageOne: "/etp-caragh/images/thomond_2.jpeg",
      description:
        "A cinematic experience with The Weeknd and his biggest hits",
      tickets: 60000,
      genre: "Hip-Hop",
      ticketPrice: 90.0,
    },
    {
      title: "Yung Lean World Tour",
      date: "2025-10-12",
      venueImageOne: "/etp-caragh/images/slane_2.jpg",
      description:
        "Join Yung Lean for a once in a lifetime experience in Slane Castle",
      tickets: 50000,
      genre: "Rap",
      ticketPrice: 120.0,
    },
    {
      title: "Billie Eilish: Happier Than Ever Tour",
      date: "2025-11-20",
      venueImageOne: "/etp-caragh/images/croke-park-2.jpg",
      description: "A unique and intimate experience with Billie Eilish",
      tickets: 30000,
      genre: "Pop",
      ticketPrice: 175.0,
    },
    {
      title: "Noel Miller: Company Lot",
      date: "2025-12-01",
      venueImageOne: "/etp-caragh/images/ul_2.jpg",
      description:
        "Join Noel Miller in his live comedy show for a belly of laughs",
      tickets: 700,
      genre: "Comedy",
      ticketPrice: 50.0,
    },
  ],
};

// creting the slice for redux
const myEventsSlice = createSlice({
  name: "myEvents",
  initialState,
  reducers: {
    setMyEvents: (state, action: PayloadAction<MyEvent[]>) => {
      state.events = action.payload;
    },
    addMyEvent: (state, action: PayloadAction<MyEvent>) => {
      state.events.push(action.payload);
    },
  },
});

export const { setMyEvents, addMyEvent } = myEventsSlice.actions;
export default myEventsSlice.reducer;
