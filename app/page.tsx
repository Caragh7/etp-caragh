"use client";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-2xl bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Event Management Module
        </h1>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Caragh Morahan 21340005
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          For the second assignment, I chose the Event Management module of our
          Event Ticketing Platfrom project. This module allows event organizers
          to efficiently create and view events, track ticket sales, and view
          available venues.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Key Features
        </h2>
        <ul className="text-left text-gray-700 list-disc list-inside space-y-2">
          {/*  create and Manage Events */}
          <li>
            <span className="font-semibold">Event Creation & Management:</span>{" "}
            Organisers can create events using a user-friendly form with
            validation.
          </li>

          {/* ticket Pricing */}
          <li>
            <span className="font-semibold">Ticket Pricing:</span> Organisers
            can set ticket prices with real-time validation to ensure correct
            input.
          </li>

          {/* notifications */}
          <li>
            <span className="font-semibold">Notifications:</span> Organisers
            receive toast notifications when events are created.
          </li>

          {/* dashboard*/}
          <li>
            <span className="font-semibold">Management Dashboard:</span>{" "}
            Organisers can get an overall view of their events upcoming events,
            total ticket sales and total events.
          </li>
        </ul>
      </div>
    </div>
  );
}
