import type { Metadata } from "next";
import "./globals.css";
import { AppHeader } from "../components/AppHeader";

export const metadata: Metadata = {
  title: "Coy — Find out if your crush likes you back",
  description:
    "Add them secretly by phone number or email. If they add you too, it's a match. If not, nobody ever knows.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased min-h-screen flex flex-col font-sans selection:bg-[#FF3864] selection:text-white">
        {/* Top Header with Discover as a normal tab */}
        <AppHeader />

        {/* Main Content Area */}
        <main className="flex-1 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
