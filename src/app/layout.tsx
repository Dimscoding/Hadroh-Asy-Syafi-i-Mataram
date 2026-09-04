import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hadroh Asy-Syafi'i",
  description: "Website resmi Hadroh Asy-Syafi'i untuk kegiatan, jadwal, dokumentasi, dan informasi terbaru.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="id"><body>{children}</body></html>;
}
