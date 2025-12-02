import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Yuni Portfolio",
  description: "A playful and curious portfolio by Yuni",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* header */}
        <header className="w-full px-6 py-8">
          <div className="mx-auto max-w-5xl flex justify-between">
            <a href="/" className="font-medium">Yuni Chun</a>

            <nav className="flex gap-14 text-sm">
              <a href="/projects" className="hover:text-pink-500 transition">Projects</a>
              <a href="/yuni" className="hover:text-pink-500 transition">Yuni</a>
              <a href="/contact" className="hover:text-pink-500 transition">Contact</a>
            </nav>
          </div>
        </header>

        {children}

        {/* footer */}
        <footer className="mx-auto max-w-3xl px-6 py-8 text-sm text-neutral-500">
          © {new Date().getFullYear()} Yunyoung Chun
        </footer>
      </body>
    </html>
  );
}