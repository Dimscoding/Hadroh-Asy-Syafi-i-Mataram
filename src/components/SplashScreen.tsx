"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type SplashSlide = {
  /** Path to the image, e.g. "/splash/kegiatan-1.jpg". Swap these once real photos are ready. */
  src: string;
  alt: string;
  caption: string;
};

type SplashScreenProps = {
  /** Called once the visitor chooses to continue into the site. */
  onEnter: () => void;
  /** Path to the group's logo mark, e.g. "/logo-asy-syafii.svg". */
  logoSrc?: string;
  slides?: SplashSlide[];
  /** Milliseconds between automatic slide changes. */
  autoAdvanceMs?: number;
};

const DEFAULT_SLIDES: SplashSlide[] = [
  { src: "", alt: "Perform sholawat", caption: "Perform Sholawat" },
  { src: "", alt: "Undangan haul", caption: "Undangan Haul" },
  { src: "", alt: "Latihan rutin", caption: "Latihan Rutin" },
  { src: "", alt: "Silaturahmi jamaah", caption: "Silaturahmi Jamaah" },
];

export default function SplashScreen({
  onEnter,
  logoSrc,
  slides = DEFAULT_SLIDES,
  autoAdvanceMs = 3200,
}: SplashScreenProps) {
  const [index, setIndex] = useState(0);
  const [closing, setClosing] = useState(false);

  const goTo = useCallback(
    (i: number) => setIndex(((i % slides.length) + slides.length) % slides.length),
    [slides.length]
  );

  useEffect(() => {
    const t = setInterval(() => goTo(index + 1), autoAdvanceMs);
    return () => clearInterval(t);
  }, [index, goTo, autoAdvanceMs]);

  const handleEnter = () => {
    setClosing(true);
    // Let the exit animation play before unmounting.
    setTimeout(onEnter, 650);
  };

  return (
    <AnimatePresence>
      {!closing && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#06263F] via-sky-deep to-sky-bright"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          {/* Ambient glow particles */}
          <div className="pointer-events-none absolute inset-0">
            {PARTICLES.map((p, i) => (
              <motion.span
                key={i}
                className="absolute rounded-full bg-mint/70 blur-[1px]"
                style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
                initial={{ opacity: 0.15, scale: 0.8 }}
                animate={{ opacity: [0.15, 0.8, 0.15], scale: [0.8, 1.2, 0.8] }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Logo */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-cloud/10 ring-1 ring-cloud/30 backdrop-blur-sm sm:h-24 sm:w-24">
              {logoSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={logoSrc} alt="Logo Hadroh Asy-Syafi'i" className="h-12 w-12 object-contain sm:h-14 sm:w-14" />
              ) : (
                <span className="font-display text-xl italic text-cloud sm:text-2xl">Asy</span>
              )}
            </div>
            <p className="mt-4 font-display text-lg italic text-cloud/90 sm:text-xl">
              Hadroh Asy-Syafi&apos;i
            </p>
          </motion.div>

          {/* Rotating photo card */}
          <motion.div
            className="relative z-10 mt-10 w-[78vw] max-w-xs"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] bg-cloud shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-cloud to-mint/40 px-6 text-center"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {slides[index].src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={slides[index].src}
                      alt={slides[index].alt}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <>
                      <p className="font-display text-lg italic text-sky-deep">
                        {slides[index].caption}
                      </p>
                      <p className="text-sm text-ink/50">Foto menyusul</p>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Prev / next controls */}
            <button
              aria-label="Foto sebelumnya"
              onClick={() => goTo(index - 1)}
              className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-cloud/90 text-sky-deep shadow-md transition hover:bg-cloud focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint"
            >
              ‹
            </button>
            <button
              aria-label="Foto berikutnya"
              onClick={() => goTo(index + 1)}
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-cloud/90 text-sky-deep shadow-md transition hover:bg-cloud focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint"
            >
              ›
            </button>

            {/* Dot indicators */}
            <div className="mt-4 flex justify-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.caption + i}
                  aria-label={`Lihat foto ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-cloud" : "w-1.5 bg-cloud/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Enter button */}
          <motion.button
            onClick={handleEnter}
            className="relative z-10 mt-10 rounded-full bg-cloud px-8 py-3 font-medium text-sky-deep shadow-lg transition hover:bg-mint hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            Masuk ke website
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const PARTICLES = Array.from({ length: 14 }).map((_, i) => ({
  left: `${(i * 37) % 100}%`,
  top: `${(i * 53) % 100}%`,
  size: `${4 + (i % 4) * 3}px`,
  duration: 3 + (i % 5),
  delay: (i % 6) * 0.4,
}));
