"use client";
import { Navbar } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="w-full bg-white border-gray-200 dark:bg-gray-900 shadow-md"
    >
      {/* Logo */}
      <Navbar.Brand href="#" className="flex items-center space-x-2">
        <div className="relative w-8 h-8 flex-shrink-0">
          {" "}
          <Image
            src="/etp-caragh/tickets.svg"
            fill
            className="h-8 object-contain"
            alt="MasterTicket Logo"
          />
        </div>
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-gray-700">
          MasterTicket
        </span>
      </Navbar.Brand>

      {/* Toggle Button (for mobile screens) */}
      <Navbar.Toggle />

      {/* Navbar Menu */}
      <Navbar.Collapse className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse mt-4 md:mt-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <div className="flex flex-col md:flex-row md:space-x-8 text-md py-3 px-4 md:py-0">
          <Navbar.Link
            as={Link}
            href="/"
            className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            href="/dashboard"
            className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500"
          >
            Manage Event
          </Navbar.Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
