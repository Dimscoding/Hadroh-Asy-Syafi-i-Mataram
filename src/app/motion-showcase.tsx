"use client";

import { CSSProperties, useRef, useState } from "react";

const moments = [
  { eyebrow: "Majelis", title: "Sholawat", tone: "paper" },
  { eyebrow: "Perjalanan", title: "Silaturahmi", tone: "lime" },
  { eyebrow: "Dokumentasi", title: "Kegiatan", tone: "photo" },
  { eyebrow: "Hadroh", title: "Asy-Syafi’i", tone: "dark" },
  { eyebrow: "Agenda", title: "Undangan", tone: "blue" },
  { eyebrow: "Bersama", title: "Jamaah", tone: "paper" },
  { eyebrow: "Kabar", title: "Terbaru", tone: "lime" },
];

const members = ["Personel 01", "Personel 02", "Personel 03", "Personel 04", "Personel 05"];

export function HeroDeck() {
  const deck = useRef<HTMLDivElement>(null);

  const tilt = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    deck.current?.style.setProperty("--mx", `${x * 16}px`);
    deck.current?.style.setProperty("--my", `${y * 10}px`);
  };

  const reset = () => {
    deck.current?.style.setProperty("--mx", "0px");
    deck.current?.style.setProperty("--my", "0px");
  };

  return (
    <div className="hero-deck" ref={deck} onPointerMove={tilt} onPointerLeave={reset}>
      {moments.map((moment, index) => (
        <article
          className={`deck-card deck-${moment.tone}`}
          key={moment.title}
          style={{ "--i": index } as CSSProperties}
        >
          <span>{moment.eyebrow}</span>
          <strong>{moment.title}</strong>
          <small>Foto akan ditempatkan di sini</small>
        </article>
      ))}
    </div>
  );
}

export function MemberCarousel() {
  const [active, setActive] = useState(2);

  const move = (step: number) => {
    setActive((current) => (current + step + members.length) % members.length);
  };

  return (
    <section className="members" id="personel">
      <div className="members-head">
        <p className="dark-label">Personel Kami</p>
        <h2>Orang-orang yang menjaga irama dan kebersamaan.</h2>
        <p>Setiap personel membawa warna, tetapi kami bergerak dalam satu lantunan.</p>
      </div>
      <div className="member-stage" aria-live="polite">
        {members.map((name, index) => {
          let offset = index - active;
          if (offset > members.length / 2) offset -= members.length;
          if (offset < -members.length / 2) offset += members.length;
          return (
            <button
              className={`member-card ${offset === 0 ? "member-active" : ""}`}
              key={name}
              onClick={() => setActive(index)}
              style={{ "--offset": offset } as CSSProperties}
              aria-label={`Tampilkan ${name}`}
            >
              <span className="member-photo">Foto<br />{name}</span>
              <span className="member-name"><strong>{name}</strong><small>Hadroh Asy-Syafi’i</small></span>
            </button>
          );
        })}
      </div>
      <div className="member-controls">
        <span>{String(active + 1).padStart(2, "0")} / {String(members.length).padStart(2, "0")}</span>
        <div>
          <button onClick={() => move(-1)} aria-label="Personel sebelumnya">←</button>
          <button onClick={() => move(1)} aria-label="Personel berikutnya">→</button>
        </div>
      </div>
    </section>
  );
}
