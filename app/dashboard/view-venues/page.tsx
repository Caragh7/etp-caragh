"use client";
import { CarouselCard } from "@/app/components/CarouselCard";
import Footer from "@/app/components/Footer";
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";

export default function Page() {
  // get the venues array from Redux
  const venues = useSelector((state: RootState) => state.venues.venues);

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-600 p-6">Available Venues</h1>
      <div className="flex items-center justify-center p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-cols-min">
          {venues.map((venue, index) => (
            <CarouselCard key={index} venue={venue} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
