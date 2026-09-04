"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";

const members = [
  { name: "Personel 01", role: "Vokal" },
  { name: "Personel 02", role: "Vokal" },
  { name: "Personel 03", role: "Hadroh" },
  { name: "Personel 04", role: "Hadroh" },
  { name: "Personel 05", role: "Hadroh" },
  { name: "Personel 06", role: "Hadroh" },
];

const activities = [
  ["01", "Majelis Sholawat", "Kebersamaan dalam majelis dan lantunan sholawat."],
  ["02", "Undangan Pernikahan", "Mengiringi momen bahagia dengan doa dan sholawat."],
  ["03", "Peringatan Hari Besar", "Turut menyemarakkan syiar dalam kegiatan keislaman."],
  ["04", "Latihan Rutin", "Menjaga kekompakan, irama, dan niat dalam setiap proses."],
  ["05", "Silaturahmi", "Mempererat persaudaraan bersama jamaah dan masyarakat."],
  ["06", "Perjalanan Hadroh", "Catatan langkah Hadroh Asy-Syafi’i dari masa ke masa."],
];

export function WelcomeIntro() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [visible]);

  const enter = () => {
    if (leaving) return;
    setLeaving(true);
    window.setTimeout(() => setVisible(false), 950);
  };

  if (!visible) return null;

  return (
    <section className={`welcome ${leaving ? "welcome-leaving" : ""}`} aria-label="Selamat datang">
      <div className="welcome-noise" />
      <div className="welcome-top">
        <span>HADROH ASY-SYAFI&apos;I</span>
        <button type="button" onClick={enter} aria-label="Masuk ke halaman utama">Masuk <b>→</b></button>
      </div>
      <div className="welcome-logo" aria-label="Tempat logo Hadroh Asy-Syafi'i">
        <i>ASY</i>
      </div>
      <div className="welcome-folders" aria-label="Thumbnail perjalanan Hadroh Asy-Syafi'i">
        {[0, 1, 2].map((index) => (
          <div className={`welcome-folder folder-${index + 1}`} key={index}>
            <div className="folder-thumb"><span>Foto perjalanan {index + 1}</span></div>
            <small>Perjalanan Hadroh Asy-Syafi&apos;i</small>
          </div>
        ))}
      </div>
      <div className="welcome-copy">
        <p lang="ar" dir="rtl">السَّلَامُ عَلَيْكُمْ</p>
        <h1>Assalamu&apos;alaikum</h1>
        <span>Selamat datang di perjalanan Hadroh Asy-Syafi&apos;i</span>
      </div>
      <button className="welcome-enter" type="button" onClick={enter}>Buka Website <b>↗</b></button>
      <div className="welcome-progress"><i /><i /><i className="active" /><i /></div>
    </section>
  );
}

export function HeroDeck() {
  const deck = useRef<HTMLDivElement>(null);
  const cards = ["Majelis", "Sholawat", "Kegiatan", "Asy-Syafi’i", "Undangan", "Jamaah", "Perjalanan"];

  const tilt = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    deck.current?.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width - .5) * 16}px`);
    deck.current?.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height - .5) * 10}px`);
  };

  return (
    <div className="hero-deck" ref={deck} onPointerMove={tilt} onPointerLeave={() => {
      deck.current?.style.setProperty("--mx", "0px");
      deck.current?.style.setProperty("--my", "0px");
    }}>
      {cards.map((title, index) => (
        <article className={`deck-card deck-${index}`} key={title} style={{ "--i": index } as CSSProperties}>
          <span>0{index + 1}</span><strong>{title}</strong><small>Foto kegiatan</small>
        </article>
      ))}
    </div>
  );
}

export function PersonGallery() {
  const [active, setActive] = useState(2);
  const [opened, setOpened] = useState<number | null>(null);
  const pointerStart = useRef<number | null>(null);

  const move = (step: number) => setActive((current) => (current + step + members.length) % members.length);
  const select = (index: number) => index === active ? setOpened(index) : setActive(index);

  return (
    <section className="people section" id="personel">
      <div className="people-heading reveal">
        <p className="section-label">Wajah di Balik Irama</p>
        <h2>Kenali seluruh personel <span>Hadroh Asy-Syafi&apos;i.</span></h2>
        <p>Geser untuk berpindah. Tekan personel yang berada di tengah untuk melihat foto lebih besar.</p>
      </div>
      <div
        className="people-stage reveal"
        onPointerDown={(event) => { pointerStart.current = event.clientX; event.currentTarget.setPointerCapture(event.pointerId); }}
        onPointerUp={(event) => {
          if (pointerStart.current === null) return;
          const distance = event.clientX - pointerStart.current;
          if (Math.abs(distance) > 45) move(distance > 0 ? -1 : 1);
          pointerStart.current = null;
        }}
      >
        {members.map((member, index) => {
          let offset = index - active;
          if (offset > members.length / 2) offset -= members.length;
          if (offset < -members.length / 2) offset += members.length;
          return (
            <button className={`person-card ${offset === 0 ? "person-active" : ""}`} key={member.name}
              style={{ "--offset": offset } as CSSProperties} onClick={() => select(index)} aria-label={`Tampilkan ${member.name}`}>
              <span className="person-image">Foto<br />{member.name}</span>
              <span className="person-info"><strong>{member.name}</strong><small>{member.role}</small></span>
            </button>
          );
        })}
      </div>
      <div className="people-controls reveal">
        <span>{String(active + 1).padStart(2, "0")} / {String(members.length).padStart(2, "0")}</span>
        <div><button onClick={() => move(-1)} aria-label="Personel sebelumnya">←</button><button onClick={() => move(1)} aria-label="Personel berikutnya">→</button></div>
      </div>
      {opened !== null && (
        <div className="person-modal" role="dialog" aria-modal="true" aria-label={members[opened].name} onClick={() => setOpened(null)}>
          <button className="modal-close" onClick={() => setOpened(null)} aria-label="Tutup">×</button>
          <div className="modal-card" onClick={(event) => event.stopPropagation()}>
            <div className="modal-photo">Foto utama<br />{members[opened].name}</div>
            <div><span>{members[opened].role}</span><h3>{members[opened].name}</h3><p>Bagian dari perjalanan dan keluarga besar Hadroh Asy-Syafi&apos;i.</p></div>
          </div>
        </div>
      )}
    </section>
  );
}

export function ActivityGallery() {
  const track = useRef<HTMLDivElement>(null);
  const move = (step: number) => track.current?.scrollBy({ left: step * Math.min(track.current.clientWidth * .72, 430), behavior: "smooth" });
  return (
    <section className="activities section" id="kegiatan">
      <div className="activities-heading reveal">
        <div><p className="section-label">Jejak Kegiatan</p><h2>Setiap pertemuan meninggalkan cerita.</h2></div>
        <div className="gallery-controls"><button onClick={() => move(-1)} aria-label="Kegiatan sebelumnya">←</button><button onClick={() => move(1)} aria-label="Kegiatan berikutnya">→</button></div>
      </div>
      <div className="activities-track reveal" ref={track}>
        {activities.map(([number, title, description], index) => (
          <article className={`journey-card journey-${index + 1}`} key={title}>
            <div className="journey-photo"><span>Foto kegiatan</span><b>{number}</b></div>
            <div><small>{number} / Dokumentasi</small><h3>{title}</h3><p>{description}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function RevealController() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: .14 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return null;
}
