"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type Personnel = {
  name: string;
  role: string;
  /** Optional photo path once real personnel photos are ready. */
  photo?: string;
};

const DEFAULT_PERSONNEL: Personnel[] = [
  { name: "Ahmad Fauzi", role: "Ketua Majelis" },
  { name: "Siti Rahma", role: "Koordinator Vokal" },
  { name: "Muhammad Ridwan", role: "Pemukul Rebana" },
  { name: "Fatimah Azzahra", role: "Bendahara" },
  { name: "Yusuf Hakim", role: "Pemukul Rebana" },
  { name: "Nur Aini", role: "Koordinator Acara" },
  { name: "Hasan Basri", role: "Pelatih Vokal" },
];

export default function PersonnelCarousel({
  personnel = DEFAULT_PERSONNEL,
}: {
  personnel?: Personnel[];
}) {
  const [active, setActive] = useState(0);

  const go = (i: number) =>
    setActive(((i % personnel.length) + personnel.length) % personnel.length);

  return (
    <section className="bg-cloud px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl italic text-ink sm:text-4xl">
          Wajah-wajah di balik setiap sholawat
        </h2>
        <p className="mt-3 text-ink/60">
          Kenali personel Hadroh Asy-Syafi&apos;i, satu per satu.
        </p>
      </div>

      <div className="relative mx-auto mt-14 flex max-w-4xl items-center justify-center">
        <button
          aria-label="Personel sebelumnya"
          onClick={() => go(active - 1)}
          className="absolute left-0 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-sky-deep text-cloud shadow-md transition hover:bg-sky-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint sm:-left-4"
        >
          ‹
        </button>

        <div className="flex w-full items-center justify-center gap-3 overflow-hidden px-12 sm:gap-4">
          {getVisibleRange(personnel.length, active).map((i) => {
            const isActive = i === active;
            const distance = Math.abs(circularDistance(i, active, personnel.length));
            return (
              <motion.button
                key={i}
                onClick={() => go(i)}
                layout
                className="relative shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint"
                animate={{
                  width: isActive ? 176 : 96,
                  height: isActive ? 220 : 140,
                  opacity: distance > 2 ? 0 : 1,
                }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              >
                <div
                  className={`h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-sky-deep/20 to-mint/30 shadow-md transition-all duration-500 ${
                    isActive ? "grayscale-0" : "grayscale"
                  }`}
                >
                  {personnel[i].photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={personnel[i].photo}
                      alt={personnel[i].name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="font-display text-2xl italic text-sky-deep/50">
                        {initials(personnel[i].name)}
                      </span>
                    </div>
                  )}
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      className="absolute -bottom-4 left-1/2 w-[calc(100%+1rem)] -translate-x-1/2 rounded-xl bg-white px-3 py-2 text-center shadow-lg"
                    >
                      <p className="text-sm font-semibold text-ink">
                        {personnel[i].name}
                      </p>
                      <p className="text-xs text-ink/50">{personnel[i].role}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        <button
          aria-label="Personel berikutnya"
          onClick={() => go(active + 1)}
          className="absolute right-0 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-sky-deep text-cloud shadow-md transition hover:bg-sky-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint sm:-right-4"
        >
          ›
        </button>
      </div>

      <p className="mt-10 text-center text-sm text-ink/50">
        {active + 1} dari {personnel.length} personel
      </p>
    </section>
  );
}

/** Returns up to 5 indices centered on `active`, wrapping around the list circularly. */
function getVisibleRange(total: number, active: number) {
  const span = Math.min(total, 5);
  const half = Math.floor(span / 2);
  return Array.from({ length: span }, (_, k) => {
    const offset = k - half;
    return ((active + offset) % total + total) % total;
  });
}

function circularDistance(i: number, active: number, total: number) {
  const diff = Math.abs(i - active);
  return Math.min(diff, total - diff);
}

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}
