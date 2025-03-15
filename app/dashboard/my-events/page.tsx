"use client";

import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store/store";
import MyEventCard from "@/app/components/MyEventCard";

export default function MyEventsPage() {
  // get myEvents array from Redux
  const myEvents = useSelector((state: RootState) => state.myEvents.events);

  // creating a card for each even t
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-600 mb-4">My Events</h1>

      {/* grid for cards display*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myEvents.map((event, index) => (
          <MyEventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
}
