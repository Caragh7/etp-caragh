import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Venue {
  name: string;
  location: string;
  capacity: number;
  image_one: string;
  image_two: string;
  description: string;
}

interface VenuesState {
  venues: Venue[];
}

const initialState: VenuesState = {
  venues: [
    {
      name: "Croke Park",
      location: "Dublin",
      capacity: 80000,
      image_one: "/etp-caragh/images/croke-park-1.jpg",
      image_two: "/etp-caragh/images/croke-park-2.jpg",
      description:
        "One of Ireland’s largest stadiums, located in Dublin, famous for hosting Gaelic games, concerts, and major sporting events",
    },
    {
      name: "Thomond Park",
      location: "Limerick",
      capacity: 26000,
      image_one: "/etp-caragh/images/thomond_1.jpg",
      image_two: "/etp-caragh/images/thomond_2.jpeg",
      description:
        "A renowned rugby stadium in Limerick, home to Munster Rugby, known for its electric atmosphere and passionate supporters",
    },
    {
      name: "3 Arena",
      location: "Dublin",
      capacity: 13500,
      image_one: "/etp-caragh/images/3arena_1.jpg",
      image_two: "/etp-caragh/images/3arena_2.jpg",
      description:
        "A modern indoor venue in Dublin, hosting international concerts, comedy shows, and live performances with state-of-the-art acoustics",
    },
    {
      name: "O2 Arena",
      location: "London",
      capacity: 20000,
      image_one: "/etp-caragh/images/o2_2.jpg",
      image_two: "/etp-caragh/images/o2_1.jpg",
      description:
        " A world-class entertainment venue in London, featuring concerts, sporting events, and cultural performances in a massive dome-shaped arena",
    },
    {
      name: "Slane Castle",
      location: "Meath",
      capacity: 8000,
      image_one: "/etp-caragh/images/slane_1.jpg",
      image_two: "/etp-caragh/images/slane_2.jpg",
      description:
        "A historic venue in Meath, famous for its stunning setting and legendary outdoor concerts featuring global music icons",
    },
    {
      name: "University Concert Hall",
      location: "Limerick",
      capacity: 1000,
      image_one: "/etp-caragh/images/ul_1.jpg",
      image_two: "/etp-caragh/images/ul_2.jpg",
      description:
        "A cultural landmark in Limerick, offering an intimate setting for classical music, theater, and live performances",
    },
  ],
};

const venuesSlice = createSlice({
  name: "venues",
  initialState,
  reducers: {
    setVenues: (state, action: PayloadAction<Venue[]>) => {
      state.venues = action.payload;
    },
  },
});

export const { setVenues } = venuesSlice.actions;
export default venuesSlice.reducer;
