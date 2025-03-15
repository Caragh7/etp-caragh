"use client";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";

export default function Page() {
  const router = useRouter();

  return (
    <div className="bg-gray-100">
      <main className="bg-gray-100 min-h-screen flex items-center justify-center">
        {/* Dashboard Wrapper - Card Style */}
        <div className="w-full max-w-7xl bg-white p-8 shadow-lg rounded-lg">
          {/* Dashboard Layout - Sidebar & Content */}
          <div className="flex">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-xl text-gray-800 font-bold mb-6">
                Event Dashboard
              </h2>
              <ul className="space-y-4">
                <li>
                  <a
                    onClick={() => router.push("/dashboard/my-events")}
                    href="#"
                    className="block p-2 text-gray-800 rounded hover:bg-gray-200"
                  >
                    📅 My Events
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => router.push("/dashboard/view-venues")}
                    href="#"
                    className="block p-2 text-gray-800 rounded hover:bg-gray-200"
                  >
                    🏟 Venues
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => router.push("/dashboard/analytics")}
                    href="#"
                    className="block p-2 text-gray-800 rounded hover:bg-gray-200"
                  >
                    📊 Analytics
                  </a>
                </li>
              </ul>
            </aside>

            {/* Main Dashboard Content */}
            <div className="flex-1 p-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Overview 🎉
              </h1>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="bg-blue-100 p-4 shadow rounded-lg">
                  <h3 className="text-lg text-gray-800 font-semibold">
                    Total Events
                  </h3>
                  <p className="text-3xl font-bold text-gray-600">12</p>
                </div>
                <div className="bg-green-100 p-4 shadow rounded-lg">
                  <h3 className="text-lg text-gray-800 font-semibold">
                    Tickets Sold
                  </h3>
                  <p className="text-3xl text-gray-600 font-bold">3,452</p>
                </div>
                <div className="bg-yellow-100 p-4 shadow rounded-lg">
                  <h3 className="text-lg text-gray-800 font-semibold">
                    Upcoming Events
                  </h3>
                  <p className="text-3xl text-gray-600 font-bold">5</p>
                </div>
              </div>

              {/* Manage Events & Venues */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">
                    Manage Events
                  </h2>
                  <p className="text-gray-600">
                    Create and customize your own event
                  </p>
                  <Button
                    className="mt-4 justify-self-stretch  text-center px-4 py-2"
                    gradientDuoTone="purpleToBlue"
                    onClick={() => router.push("/dashboard/create-event")}
                  >
                    Start Creating
                  </Button>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h2 className="text-xl text-gray-800 font-bold mb-4">
                    Manage Venues
                  </h2>
                  <p className="text-gray-600">Find your perfect venue</p>
                  <Button
                    className="mt-4 justify-self-stretch  text-center px-4 py-2"
                    gradientDuoTone="purpleToBlue"
                    onClick={() => router.push("/dashboard/view-venues")}
                  >
                    Browse Venues
                  </Button>
                </div>
              </div>

              {/* Recent Events */}
              <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Recent Events
                </h2>
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 text-gray-800">Event</th>
                      <th className="text-left py-2 text-gray-800">Date</th>
                      <th className="text-left py-2 text-gray-800">
                        Tickets Sold
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600">Taylor Swift</td>
                      <td className="py-2 text-gray-600">April 15, 2025</td>
                      <td className="py-2 text-gray-600">1,200</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600">Coldplay</td>
                      <td className="py-2 text-gray-600">May 22, 2025</td>
                      <td className="py-2 text-gray-600">900</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
