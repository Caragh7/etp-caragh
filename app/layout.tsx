import "./globals.css";
import Header from "./components/Header";
import Providers from "./providers";
import NotificationToast from "./components/NotificationToast";

export const metadata = {
  title: "Event Ticketing Platform",
  description: "An event ticketing platform using Next.js and TailwindCSS.",
  icons: {
    icon: "/etp-caragh/tickets_white.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white flex flex-col min-h-screen w-full overflow-x-hidden">
        <Header />
        <Providers>
          <NotificationToast />
          {children}
        </Providers>
      </body>
    </html>
  );
}
