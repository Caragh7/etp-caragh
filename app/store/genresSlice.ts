import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// genre type
export interface Genre {
  name: string;
}

// structure of the state
interface GenresState {
  genres: Genre[];
}

// the available genres
const initialState: GenresState = {
  genres: [
    { name: "Rock" },
    { name: "Pop" },
    { name: "Comedy" },
    { name: "Classical" },
    { name: "R&B" },
    { name: "Hip-Hop" },
    { name: "Electronic" },
    { name: "Jazz" },
    { name: "Metal" },
    { name: "Rap" },
  ],
};

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    setGenres: (state, action: PayloadAction<Genre[]>) => {
      state.genres = action.payload;
    },
  },
});

export const { setGenres } = genresSlice.actions;
export default genresSlice.reducer;
