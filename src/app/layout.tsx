import "./globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Job Market Analyzer",
  description: "Track job trends and in-demand skills with public data.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {/* App shell keeps structure consistent across pages */}
        <div className="appShell">
          <SiteHeader />
          <main className="mainContent">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
