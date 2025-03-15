"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

interface Genre {
  name: string;
}

interface GenreSelectorProps {
  onGenresLoad: (genres: Genre[]) => void;
}

const GenreSelector = ({ onGenresLoad }: GenreSelectorProps) => {
  const genres = useSelector((state: RootState) => state.genres.genres);

  // Pass genres to the parent component when the component mounts
  useEffect(() => {
    if (genres.length > 0) {
      onGenresLoad(genres);
    }
  }, [genres, onGenresLoad]);

  return null;
};

export default GenreSelector;
