"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export type ActivityCard = {
  title: string;
  meta: string;
  /** Optional image path once real documentation photos are ready. */
  image?: string;
};

const DEFAULT_CARDS: ActivityCard[] = [
  { title: "Rutinan Malam Jumat", meta: "Setiap pekan" },
  { title: "Haul Akbar", meta: "Tahunan" },
  { title: "Silaturahmi Jamaah", meta: "Dokumentasi" },
  { title: "Latihan Personel", meta: "Setiap pekan" },
  { title: "Undangan Perform", meta: "Sesuai jadwal" },
];

// Spread the cards along a shallow arc, tallest in the middle.
const ARC_POSITIONS = [
  { x: -46, y: 34, rotate: -10 },
  { x: -24, y: 8, rotate: -5 },
  { x: 0, y: -4, rotate: 0 },
  { x: 24, y: 8, rotate: 5 },
  { x: 46, y: 34, rotate: 10 },
];

export default function HeroSection({ cards = DEFAULT_CARDS }: { cards?: ActivityCard[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Layered parallax: clouds drift slowest, cards a little faster, text fades first.
  const cloudsY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] flex-col items-center overflow-hidden bg-gradient-to-b from-sky-deep via-sky-bright to-cloud pt-28 pb-40"
    >
      {/* Centered headline */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-20 mx-auto max-w-2xl px-6 text-center"
      >
        <p className="text-sm font-medium tracking-wide text-cloud/80">
          Syiar, sholawat, silaturahmi
        </p>
        <h1 className="mt-4 font-display text-4xl italic leading-tight text-cloud sm:text-5xl">
          Berkumpul dalam sholawat, tumbuh dalam kebersamaan
        </h1>
        <p className="mt-5 text-base text-cloud/85 sm:text-lg">
          Ruang digital Hadroh Asy-Syafi&apos;i untuk berbagi kegiatan,
          jadwal, dan cerita jamaah dari satu majelis ke majelis lainnya.
        </p>
      </motion.div>

      {/* Cloud layer */}
      <motion.div
        style={{ y: cloudsY }}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0"
        aria-hidden
      >
        <CloudLayer />
      </motion.div>

      {/* Arc of activity cards floating above the clouds */}
      <motion.div
        style={{ y: cardsY }}
        className="relative z-10 mt-16 h-56 w-full max-w-4xl px-4 sm:mt-24 sm:h-64"
      >
        {cards.slice(0, 5).map((card, i) => {
          const pos = ARC_POSITIONS[i] ?? ARC_POSITIONS[ARC_POSITIONS.length - 1];
          return (
            <motion.div
              key={card.title}
              className="absolute left-1/2 top-1/2 w-32 -translate-x-1/2 -translate-y-1/2 sm:w-40"
              style={{
                marginLeft: `${pos.x}%`,
                marginTop: `${pos.y}px`,
              }}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: pos.rotate }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: "easeOut" }}
            >
              <div className="aspect-[4/5] w-full rounded-2xl bg-cloud p-3 shadow-[0_18px_40px_-12px_rgba(11,79,130,0.45)]">
                <div className="flex h-full flex-col justify-between">
                  <div className="h-2/3 w-full rounded-xl bg-gradient-to-br from-mint/50 to-sky-bright/20" />
                  <div>
                    <p className="text-xs font-semibold text-ink">{card.title}</p>
                    <p className="text-[11px] text-ink/50">{card.meta}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

function CloudLayer() {
  return (
    <svg
      viewBox="0 0 1440 220"
      className="h-40 w-full sm:h-56"
      preserveAspectRatio="none"
    >
      <path
        d="M0,140 C120,100 200,180 320,150 C420,126 480,90 600,110 C720,130 780,170 900,150 C1020,130 1100,90 1220,110 C1320,127 1380,150 1440,140 L1440,220 L0,220 Z"
        fill="#EAF6F1"
        opacity="0.9"
      />
      <path
        d="M0,170 C140,150 260,200 400,180 C520,163 620,140 760,155 C880,168 960,190 1100,178 C1220,168 1320,150 1440,165 L1440,220 L0,220 Z"
        fill="#EAF6F1"
      />
    </svg>
  );
}
