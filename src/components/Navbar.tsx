"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Kegiatan", href: "#kegiatan" },
  { label: "Personel", href: "#personel" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 sm:px-8">
        <a href="#beranda" className="flex items-center gap-2.5">
          <LogoMark />
          <span className="font-display text-lg italic text-cloud">
            Asy-Syafi&apos;i
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-cloud/80 transition-colors hover:text-cloud"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#kontak"
          className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] md:inline-block"
        >
          Hubungi Kami
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Buka menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-cloud/30 text-cloud md:hidden"
        >
          <MenuIcon open={open} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-6 overflow-hidden rounded-2xl bg-sky-deep/95 backdrop-blur md:hidden"
          >
            {LINKS.map((link) => (
              <li key={link.href} className="border-b border-cloud/10 last:border-none">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 text-sm text-cloud"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="p-4">
              <a
                href="#kontak"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-gold px-5 py-2.5 text-center text-sm font-semibold text-ink"
              >
                Hubungi Kami
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}

function LogoMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#EAF6F1" opacity="0.12" />
      <path
        d="M20.5 9a7.5 7.5 0 1 0 0 14 6 6 0 1 1 0-14Z"
        fill="#D8B26B"
      />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      {open ? (
        <path
          d="M5 5l10 10M15 5L5 15"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      ) : (
        <>
          <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
