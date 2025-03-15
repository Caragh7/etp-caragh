"use client";
import Footer from "@/app/components/Footer";
import {
  Button,
  TextInput,
  Textarea,
  Select,
  Modal,
  Spinner,
} from "flowbite-react";
import React, { useState, ChangeEvent, FormEvent } from "react";
import VenueSelector from "../VenueSelector";
import { useDispatch } from "react-redux";
import { addMyEvent } from "@/app/store/myEventsSlice";
import Link from "next/link";

interface FormData {
  title: string;
  description: string;
  date: string;
  location: string;
  tickets: number | string;
}
interface Venue {
  name: string;
  location: string;
  capacity: number;
  image_one: string;
  image_two: string;
}

export default function Page() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    date: "",
    location: "",
    tickets: "",
  });

  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
  const [venues, setVenues] = useState<Venue[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const dispatch = useDispatch();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "location") {
      const venue = venues.find((v) => v.name === value);
      setSelectedVenue(venue || null);
    } else if (name === "tickets") {
      setFormData((prev) => ({
        ...prev,
        [name]: Math.max(0, parseInt(value) || 0),
      }));
    } else {
      // For all other fields (title, date, description, etc.)
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    console.log("handleChange:", name, value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const venueCapacity = selectedVenue ? selectedVenue.capacity : Infinity;

    if (Number(formData.tickets) > venueCapacity) {
      alert(`Ticket count exceeds venue capacity of ${venueCapacity}.`);
      return;
    }

    setStatus("loading");

    dispatch(
      addMyEvent({
        title: formData.title,
        date: formData.date,
        venueImageOne: selectedVenue?.image_one || "",
        description: formData.description,
        tickets: Number(formData.tickets),
      })
    );
    setTimeout(() => {
      setStatus("success");
    }, 5000);

    console.log("Event Created:", formData);
    setFormData({
      title: "",
      description: "",
      date: "",
      location: "",
      tickets: "",
    });
  };
  if (status === "loading") {
    // Show a loading spinner or page
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner color="purple" size="xl" />
        <p className="ml-3 text-xl text-gray-700">
          Creating your event, please wait...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-4">
      {/* Success Modal appears if status === "success" */}
      <Modal
        show={status === "success"}
        onClose={() => setStatus("idle")}
        size="md"
      >
        <Modal.Header className="text-gray-800 font-bold">
          🥳 Event Created!
        </Modal.Header>
        <Modal.Body>
          <p className="text-lg mb-4 text-gray-600">
            Your event was successfully created.
            <br />
            <Link
              href="/dashboard/my-events"
              className="text-blue-600 underline"
            >
              Go to My Events
            </Link>
          </p>
        </Modal.Body>
      </Modal>

      <VenueSelector onVenuesLoad={setVenues} />
      {status !== "success" && (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          {/* Fix the narrow issue by making this div take full width */}
          <div className="flex w-full max-w-screen-lg bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Left: Form Section */}
            <div className="w-1/2 p-10">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Create Event
              </h1>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <TextInput
                  id="title"
                  type="text"
                  name="title"
                  placeholder="Event Title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
                <TextInput
                  id="date"
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                />
                <Select
                  id="location"
                  name="location"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a venue</option>
                  {venues.map((venue) => (
                    <option key={venue.name} value={venue.name}>
                      {venue.name} ({venue.location})
                    </option>
                  ))}
                </Select>
                <TextInput
                  id="tickets"
                  type="number"
                  name="tickets"
                  placeholder="Number of Tickets"
                  value={formData.tickets}
                  onChange={handleChange}
                  required
                />
                <Button type="submit" className="w-full">
                  Create Event
                </Button>
              </form>
            </div>

            {/* Right: Image Section */}
            <div className="w-1/2 flex items-center justify-center bg-gray-200 rounded-lg">
              <img
                src={
                  selectedVenue
                    ? selectedVenue.image_one
                    : "/etp-caragh/images/map_placeholder.jpg"
                }
                alt="Venue"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </main>
      )}
      {status !== "success" && <Footer />}
    </div>
  );
}
