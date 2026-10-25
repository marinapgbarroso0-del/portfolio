import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";
export const metadata: Metadata = { title: { default: "Marina Barroso — Graphic Design", template: "%s — Marina Barroso" }, description: "Marina Barroso’s graphic design portfolio. Visual identities, editorial design, and creative explorations. Sample projects are clearly marked as placeholders." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body id="top"><a className="skip-link" href="#main">Skip to content</a><SiteHeader />{children}</body></html>;
}
