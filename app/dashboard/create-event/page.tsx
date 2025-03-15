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
import VenueSelector from "../../selectors/VenueSelector";
import { useDispatch } from "react-redux";
import { addMyEvent } from "@/app/store/myEventsSlice";
import Link from "next/link";
import { addNotification } from "@/app/store/notificationsSlice";
import GenreSelector from "@/app/selectors/GenreSelector";

interface FormData {
  title: string;
  description: string;
  date: string;
  location: string;
  tickets: number | string;
  genre: string;
  ticketPrice: number | string;
}
interface Venue {
  name: string;
  location: string;
  capacity: number;
  image_one: string;
  image_two: string;
}
interface Genre {
  name: string;
}

export default function Page() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    date: "",
    location: "",
    tickets: "",
    genre: "",
    ticketPrice: "",
  });

  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
  const [venues, setVenues] = useState<Venue[]>([]);
  const [genres, setGenre] = useState<Genre[]>([]);
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
      if (/^\d*$/.test(value)) {
        // allow only numeric input
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    } else if (name === "ticketPrice") {
      if (/^\d*\.?\d{0,2}$/.test(value)) {
        // Allow numbers with max 2 decimals
        setFormData((prev) => ({
          ...prev,
          [name]: value, // store value as string first
        }));
      }
    } else if (name === "date") {
      const selectedDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        alert("The event date cannot be in the past.");
        return;
      }
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const venueCapacity = selectedVenue ? selectedVenue.capacity : Infinity;
    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      alert("The event date cannot be in the past.");
      return;
    }

    const ticketCount = Number(formData.tickets);
    const ticketPrice = Number(formData.ticketPrice);

    if (isNaN(ticketCount) || ticketCount <= 0) {
      alert("Please enter a valid number of tickets.");
      return;
    }

    if (ticketCount > venueCapacity) {
      alert(`Ticket count exceeds venue capacity of ${venueCapacity}.`);
      return;
    }

    if (isNaN(ticketPrice) || ticketPrice <= 0) {
      alert("Ticket price must be greater than €0.");
      return;
    }

    setStatus("loading");

    dispatch(
      addMyEvent({
        title: formData.title,
        date: formData.date,
        venueImageOne: selectedVenue?.image_one || "",
        description: formData.description,
        tickets: ticketCount,
        genre: formData.genre,
        ticketPrice: Number(ticketPrice.toFixed(2)),
      })
    );
    setTimeout(() => {
      setStatus("idle");

      dispatch(
        addNotification({
          message: "New event created successfully!",
          type: "success",
        })
      );

      console.log("Event Created:", formData);
      setFormData({
        title: "",
        description: "",
        date: "",
        location: "",
        tickets: "",
        genre: "",
        ticketPrice: "",
      });
    }, 1000);
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
      <VenueSelector onVenuesLoad={setVenues} />
      <GenreSelector onGenresLoad={setGenre} />

      {status !== "success" && (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
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
                  type="text"
                  name="tickets"
                  placeholder="Number of Tickets"
                  value={formData.tickets}
                  onChange={handleChange}
                  required
                />
                <TextInput
                  id="ticketPrice"
                  type="text"
                  name="ticketPrice"
                  placeholder="Ticket Price (€)"
                  value={formData.ticketPrice}
                  onChange={handleChange}
                  required
                />
                <Select
                  id="genre"
                  name="genre"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a genre</option>
                  {genres.map((genre) => (
                    <option key={genre.name} value={genre.name}>
                      {genre.name}
                    </option>
                  ))}
                </Select>
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
