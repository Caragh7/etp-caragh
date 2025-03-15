// had to make this client component and then import it into a server component,
// as you can use client functions e.g. useSelector in a server component.
"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

interface Venue {
  name: string;
  location: string;
  capacity: number;
  image_one: string;
  image_two: string;
}

interface VenueSelectorProps {
  onVenuesLoad: (venues: Venue[]) => void;
}

const VenueSelector = ({ onVenuesLoad }: VenueSelectorProps) => {
  const venues = useSelector((state: RootState) => state.venues.venues);

  // Pass venues to the parent component when the component mounts
  useEffect(() => {
    if (venues.length > 0) {
      onVenuesLoad(venues);
    }
  }, [venues, onVenuesLoad]);

  return null;
};

export default VenueSelector;
