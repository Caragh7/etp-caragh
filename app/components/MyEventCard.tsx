"use client"; // It's a Client Component because we'll likely use it in other client pages

import React from "react";
import { useEffect, useState } from "react";

import type { MyEvent } from "@/app/store/myEventsSlice";

interface MyEventCardProps {
  event: MyEvent;
}

export default function MyEventCard({ event }: MyEventCardProps) {
  const [soldTickets, setSoldTickets] = useState<number | null>(null);

  useEffect(() => {
    setSoldTickets(Math.floor(Math.random() * (event.tickets + 1)));
  }, [event.tickets]);

  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow transition-transform
        duration-300
        hover:scale-105
        hover:shadow-lg
        cursor-pointer"
    >
      {/* Top half: image */}
      <img
        className="rounded-t-lg w-full h-48 object-cover"
        src={event.venueImageOne}
        alt={event.title}
      />

      {/* Bottom half: info */}
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {event.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700">{event.date}</p>
        {event.description && (
          <p className="text-sm text-gray-500">{event.description}</p>
        )}
        <p className="text-sm text-gray-500">
          <span className="font-bold text-green-600">{soldTickets}</span> out of{" "}
          {event.tickets} tickets sold
        </p>
      </div>
    </div>
  );
}
