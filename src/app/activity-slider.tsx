"use client";

import { useRef } from "react";

const activities = [
  { tone: "sky", label: "Dokumentasi", title: "Majelis Sholawat", copy: "Momen kebersamaan dalam lantunan sholawat." },
  { tone: "lime", label: "Penampilan", title: "Undangan Acara", copy: "Perjalanan syiar di berbagai kegiatan masyarakat." },
  { tone: "blue", label: "Kebersamaan", title: "Latihan Personel", copy: "Proses di balik setiap penampilan Hadroh Asy-Syafi’i." },
  { tone: "mint", label: "Agenda", title: "Kegiatan Terbaru", copy: "Kabar dan jadwal terbaru untuk jamaah." },
];

export default function ActivitySlider() {
  const trackRef = useRef<HTMLDivElement>(null);

  const move = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * Math.min(track.clientWidth * 0.72, 430), behavior: "smooth" });
  };

  return (
    <div className="slider-shell">
      <div className="slider-controls" aria-label="Kontrol galeri">
        <button type="button" onClick={() => move(-1)} aria-label="Geser ke kiri">←</button>
        <span>Geser untuk melihat</span>
        <button type="button" onClick={() => move(1)} aria-label="Geser ke kanan">→</button>
      </div>
      <div className="activity-track" ref={trackRef}>
        {activities.map((activity, index) => (
          <article className={`activity-card activity-${activity.tone}`} key={activity.title}>
            <div className="activity-image" role="img" aria-label={`Tempat foto ${activity.title}`}>
              <span>Foto kegiatan {index + 1}</span>
            </div>
            <div className="activity-content">
              <p className="card-date">{activity.label}</p>
              <h3>{activity.title}</h3>
              <p>{activity.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
