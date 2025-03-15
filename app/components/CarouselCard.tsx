"use client";

import { Carousel } from "flowbite-react";

import type { Venue } from "@/app/store/venuesSlice";

interface CarouselCardProps {
  venue: Venue;
}

export function CarouselCard({ venue }: CarouselCardProps) {
  return (
    <div className="min-w-[280px] max-w-[400px] w-full h-[500px] flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className=" h-[70%] w-full">
        <Carousel
          leftControl=""
          rightControl=""
          className="h-full w-full  !p-0 !m-0"
        >
          <div className="relative w-full h-full">
            <img
              src={venue.image_one}
              alt={venue.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-full h-full">
            <img
              src={venue.image_two}
              alt={venue.name}
              className="w-full h-full object-cover"
            />
          </div>
        </Carousel>
      </div>
      <div className="p-4 flex flex-col gap-1 h-[30%]">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {venue.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {venue.description}
        </p>
      </div>
    </div>
  );
}
