import React from "react";
import { Bar, Pie } from "react-chartjs-2";
// import chart.js so it can register its components automatically
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import FooterComponent from "@/app/components/Footer";
import Footer from "@/app/components/Footer";

// register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function AnalyticsPage() {
  // dummy data
  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Ticket Revenue (€)",
        data: [12000, 9000, 15000, 8000, 20000, 17000],
        backgroundColor: "rgba(99, 102, 241, 0.5)",
        borderColor: "rgba(99, 102, 241, 1)",
        borderWidth: 1,
      },
    ],
  };

  const revenueOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Monthly Ticket Revenue",
      },
    },
  };

  // dummy data for pie chart
  const eventsData = {
    labels: ["Metallica", "Yung Lean World Tour", "Ice Cube Live", "Slowdive"],
    datasets: [
      {
        label: "Revenue Share",
        data: [40000, 25000, 15000, 20000],
        backgroundColor: [
          "rgba(34,197,94,0.5)",
          "rgba(59,130,246,0.5)",
          "rgba(244,114,182,0.5)",
          "rgba(234,179,8,0.5)",
        ],
        borderColor: [
          "rgba(34,197,94,1)",
          "rgba(59,130,246,1)",
          "rgba(244,114,182,1)",
          "rgba(234,179,8,1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const eventsOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "Highest Paid Events (Revenue)",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl text-gray-600 font-bold mb-6">Analytics</h1>
      {/* Bar Chart */}
      <div className="flex flex-col items-center">
        <div className="max-w-3xl w-full mb-10 justify-center">
          <Bar data={revenueData} options={revenueOptions} />
        </div>

        {/* Pie Chart */}
        <div className="max-w-md w-full mb-10 justify-center">
          <Pie data={eventsData} options={eventsOptions} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
