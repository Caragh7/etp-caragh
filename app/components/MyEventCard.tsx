"use client";

import React, { useEffect, useState } from "react";
import type { MyEvent } from "@/app/store/myEventsSlice";

const genreColors: { [key: string]: string } = {
  Rock: "bg-red-500",
  Pop: "bg-pink-500",
  Comedy: "bg-yellow-500",
  Classical: "bg-green-500",
  "R&B": "bg-blue-500",
  "Hip-Hop": "bg-purple-500",
  Electronic: "bg-indigo-500",
  Jazz: "bg-teal-500",
  Metal: "bg-gray-500",
  Rap: "bg-green-500",
};

interface MyEventCardProps {
  event: MyEvent;
}

export default function MyEventCard({ event }: MyEventCardProps) {
  const [soldTickets, setSoldTickets] = useState<number | null>(null);

  useEffect(() => {
    setSoldTickets(Math.floor(Math.random() * (event.tickets + 1)));
  }, [event.tickets]);

  const genreColor = genreColors[event.genre] || "bg-gray-300";

  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow transition-transform
        duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
    >
      {/* top half: image */}
      <img
        className="rounded-t-lg w-full h-48 object-cover"
        src={event.venueImageOne}
        alt={event.title}
      />

      {/* bottom half: info */}
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {event.title}
        </h5>

        {/* event date */}
        <p className="text-sm font-bold text-gray-900">
          Date: <span className="font-normal">{event.date}</span>
        </p>

        {/*  ticket price */}
        <p className="text-sm font-bold text-gray-900 mt-3">
          Ticket Price:{" "}
          <span className="font-normal">€{event.ticketPrice}</span>
        </p>

        {/* event description */}
        {event.description && (
          <div className="mt-3">
            <span className="text-sm font-bold text-gray-900">About:</span>
            <p className="text-sm text-gray-500">{event.description}</p>
          </div>
        )}

        {/* tickets sold */}
        {soldTickets !== null && (
          <div className="mt-3">
            <span className="text-sm font-bold text-gray-900">
              Availability:
            </span>
            <p className="text-sm text-gray-500">
              <span className="font-bold text-green-600">{soldTickets}</span>{" "}
              out of {event.tickets} tickets sold
            </p>
          </div>
        )}

        {/* genre pill  */}
        <div className="mt-4">
          <span
            className={`inline-block px-3 py-1 text-sm font-semibold text-white rounded-full ${genreColor}`}
          >
            {event.genre}
          </span>
        </div>
      </div>
    </div>
  );
}
