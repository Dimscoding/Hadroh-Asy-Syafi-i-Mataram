"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CSSProperties, useEffect, useRef, useState } from "react";

const members = [
  { name: "Roby", role: "Ketua", image: "/personnel/roby-ketua.webp" },
  { name: "Yunus", role: "Munsyid", image: "/personnel/yunus-munsyid.webp" },
  { name: "Ariel", role: "Munsyid", image: "/personnel/ariel-munsyid.webp" },
  { name: "Aziz", role: "Munsyid", image: "/personnel/aziz-munsyid.webp" },
  { name: "Deri", role: "Munsyid", image: "/personnel/deri-munsyid.webp" },
  { name: "Fathi", role: "Munsyid", image: "/personnel/fathi-munsyid.webp" },
  { name: "Handre", role: "Munsyid", image: "/personnel/handre-munsyid.webp" },
  { name: "Abay", role: "Keprak", image: "/personnel/abay-keprak.webp" },
  { name: "Abdi", role: "Keprak", image: "/personnel/abdi-keprak.webp" },
  { name: "Dimas", role: "Darbuka", image: "/personnel/dimas-darbuka.webp" },
  { name: "Farhan", role: "Bass", image: "/personnel/farhan-bass.webp" },
  { name: "Ahmad", role: "Tam", image: "/personnel/ahmad-tam.webp" },
  { name: "Abror", role: "Terbangan", image: "/personnel/abror-terbangan.webp" },
  { name: "Hada", role: "Terbangan", image: "/personnel/hada-terbangan.webp" },
  { name: "Ikhlas", role: "Terbangan", image: "/personnel/ikhlas-terbangan.webp" },
  { name: "Rizqi", role: "Terbangan", image: "/personnel/rizqi-terbangan.webp" },
  { name: "Roza", role: "Terbangan", image: "/personnel/roza-terbangan.webp" },
];

const activities = [
  ["01", "Majelis Sholawat", "Kebersamaan dalam majelis dan lantunan sholawat."],
  ["02", "Undangan Pernikahan", "Mengiringi momen bahagia dengan doa dan sholawat."],
  ["03", "Peringatan Hari Besar", "Turut menyemarakkan syiar dalam kegiatan keislaman."],
  ["04", "Latihan Rutin", "Menjaga kekompakan, irama, dan niat dalam setiap proses."],
  ["05", "Silaturahmi", "Mempererat persaudaraan bersama jamaah dan masyarakat."],
  ["06", "Perjalanan Hadroh", "Catatan langkah Hadroh Asy-Syafi’i dari masa ke masa."],
];

const navigationItems = [
  { id: "beranda", label: "Beranda", icon: "⌂" },
  { id: "personel", label: "Personel", icon: "◇" },
  { id: "kegiatan", label: "Kegiatan", icon: "✦" },
  { id: "tentang", label: "Tentang", icon: "○" },
  { id: "kontak", label: "Kontak", icon: "↗" },
];

function wrapOffset(index: number, active: number, total: number) {
  let offset = index - active;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

export function WelcomeIntro() {
  const [visible, setVisible] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!visible) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.section className="welcome" aria-label="Selamat datang" initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -70, filter: "blur(14px)", scale: 1.035 }} transition={{ duration: reducedMotion ? 0.15 : 0.9, ease: [0.2, 0.8, 0.2, 1] }}>
          <div className="welcome-aura aura-one" aria-hidden="true" />
          <div className="welcome-aura aura-two" aria-hidden="true" />
          <motion.div className="welcome-logo" aria-label="Logo Hadroh Asy-Syafi'i" initial={reducedMotion ? false : { y: 70, opacity: 0, filter: "blur(20px)" }} animate={{ y: 0, opacity: 1, filter: "blur(0px)" }} transition={{ duration: 1.25, ease: [0.2, 0.8, 0.2, 1] }}>
            <Image src="/logo-asy-syafii.png" alt="Logo Hadroh Asy-Syafi'i" width={434} height={572} priority />
          </motion.div>
          <div className="welcome-folders" aria-label="Perjalanan Hadroh Asy-Syafi'i">
            {[members[2], members[1], members[0]].map((member, index) => (
              <motion.div className={`welcome-folder folder-${index + 1}`} key={member.name} initial={reducedMotion ? false : { y: 160, opacity: 0, filter: "blur(16px)" }} animate={{ y: 0, opacity: 1, filter: "blur(0px)" }} transition={{ duration: 1, delay: 0.2 + index * 0.16, ease: [0.2, 0.8, 0.2, 1] }}>
                <div className="folder-thumb"><Image src={member.image} alt="" fill sizes="(max-width: 760px) 66vw, 360px" /></div>
                <small>Perjalanan Hadroh Asy-Syafi&apos;i</small>
              </motion.div>
            ))}
          </div>
          <motion.div className="welcome-copy" initial={reducedMotion ? false : { y: 46, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.85, delay: 0.75 }}>
            <p lang="ar" dir="rtl">السَّلَامُ عَلَيْكُمْ</p>
            <h1>Assalamu&apos;alaikum</h1>
            <span>Selamat datang di perjalanan Hadroh Asy-Syafi&apos;i</span>
            <button type="button" onClick={() => setVisible(false)}>Masuk <b>↗</b></button>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export function FloatingNavigation() {
  const [active, setActive] = useState("beranda");

  useEffect(() => {
    const sections = navigationItems.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-25% 0px -55%", threshold: [0, 0.2, 0.55] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="floating-nav" aria-label="Navigasi utama">
      {navigationItems.map((item) => (
        <a href={`#${item.id}`} key={item.id} className={active === item.id ? "nav-active" : ""} onClick={() => setActive(item.id)}>
          {active === item.id && <motion.span className="nav-pill" layoutId="active-nav-pill" transition={{ type: "spring", stiffness: 430, damping: 34 }} />}
          <i aria-hidden="true">{item.icon}</i><b>{item.label}</b>
        </a>
      ))}
    </nav>
  );
}

export function HeroDeck() {
  const featured = members.slice(0, 9);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const move = (step: number) => setActive((current) => (current + step + featured.length) % featured.length);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % featured.length), 5200);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, featured.length]);

  return (
    <div className="hero-deck-wrap" onPointerEnter={() => setPaused(true)} onPointerLeave={() => setPaused(false)}>
      <motion.div className="hero-deck" drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.12} onDragEnd={(_, info) => { if (Math.abs(info.offset.x) > 45) move(info.offset.x > 0 ? -1 : 1); }}>
        {featured.map((member, index) => {
          const offset = wrapOffset(index, active, featured.length);
          const distance = Math.abs(offset);
          const hidden = distance > 3;
          return (
            <motion.button type="button" className="deck-card" key={member.name} aria-label={`Tampilkan ${member.name}`} aria-hidden={hidden} tabIndex={hidden ? -1 : 0} onClick={() => offset === 0 ? document.getElementById("personel")?.scrollIntoView() : setActive(index)} animate={{ x: `calc(${offset} * var(--deck-step))`, y: distance * distance * 15, rotate: offset * 7, scale: offset === 0 ? 1.08 : 1 - Math.min(distance * 0.08, 0.24), opacity: hidden ? 0 : 1 }} transition={{ type: "spring", stiffness: 240, damping: 28, mass: 0.9 }} style={{ zIndex: 10 - distance }}>
              <span className="deck-glow" aria-hidden="true" />
              <Image src={member.image} alt="" fill sizes="(max-width: 760px) 32vw, 170px" />
              <small>{member.name}</small>
            </motion.button>
          );
        })}
      </motion.div>
      <div className="deck-controls"><button onClick={() => move(-1)} aria-label="Geser ke kiri">←</button><span>{String(active + 1).padStart(2, "0")} / {String(featured.length).padStart(2, "0")}</span><button onClick={() => move(1)} aria-label="Geser ke kanan">→</button></div>
    </div>
  );
}

export function PersonGallery() {
  const [active, setActive] = useState(0);
  const [opened, setOpened] = useState<number | null>(null);
  const pointerStart = useRef<number | null>(null);
  const move = (step: number) => setActive((current) => (current + step + members.length) % members.length);
  const select = (index: number) => index === active ? setOpened(index) : setActive(index);

  useEffect(() => {
    if (opened === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpened(null);
      if (event.key === "ArrowLeft") setOpened((current) => current === null ? null : (current - 1 + members.length) % members.length);
      if (event.key === "ArrowRight") setOpened((current) => current === null ? null : (current + 1) % members.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [opened]);

  return (
    <section className="people section" id="personel">
      <div className="people-heading reveal">
        <p className="section-label">Wajah di Balik Irama</p>
        <h2>Kenali 17 personel <span>Hadroh Asy-Syafi&apos;i.</span></h2>
        <p>Geser untuk berpindah. Tekan kartu yang berada di tengah untuk melihat foto lebih besar.</p>
      </div>
      <div className="people-stage reveal" onPointerDown={(event) => { pointerStart.current = event.clientX; event.currentTarget.setPointerCapture(event.pointerId); }} onPointerUp={(event) => { if (pointerStart.current === null) return; const distance = event.clientX - pointerStart.current; if (Math.abs(distance) > 45) move(distance > 0 ? -1 : 1); pointerStart.current = null; }} onPointerCancel={() => { pointerStart.current = null; }}>
        {members.map((member, index) => {
          const offset = wrapOffset(index, active, members.length);
          const distance = Math.abs(offset);
          return (
            <button className={`person-card ${offset === 0 ? "person-active" : ""} ${distance > 2 ? "person-far" : ""}`} key={member.name} style={{ "--person-x": `${offset * 238}px`, "--person-x-mobile": `${offset * 138}px`, "--person-scale": 1 - distance * 0.085, "--person-scale-mobile": 1 - distance * 0.1, "--person-rotate": `${offset * -7}deg`, "--person-opacity": Math.max(0, 1 - distance * 0.13), "--card-z": 20 - distance } as CSSProperties} onClick={() => select(index)} aria-label={`Tampilkan ${member.name}, ${member.role}`} aria-hidden={distance > 4} tabIndex={distance > 4 ? -1 : 0}>
              <span className="person-image"><Image src={member.image} alt="" fill sizes="(max-width: 760px) 62vw, 290px" /></span>
              <span className="person-info"><strong>{member.name}</strong><small>{member.role}</small></span>
            </button>
          );
        })}
      </div>
      <div className="people-controls reveal"><span>{String(active + 1).padStart(2, "0")} / {String(members.length).padStart(2, "0")}</span><div><button onClick={() => move(-1)} aria-label="Personel sebelumnya">←</button><button onClick={() => move(1)} aria-label="Personel berikutnya">→</button></div></div>
      <AnimatePresence>
        {opened !== null && (
          <motion.div className="person-modal" role="dialog" aria-modal="true" aria-label={members[opened].name} onClick={() => setOpened(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="modal-close" onClick={() => setOpened(null)} aria-label="Tutup">×</button>
            <button className="modal-arrow modal-prev" onClick={(event) => { event.stopPropagation(); setOpened((opened - 1 + members.length) % members.length); }} aria-label="Personel sebelumnya">←</button>
            <motion.div className="modal-card" onClick={(event) => event.stopPropagation()} initial={{ opacity: 0, y: 70, scale: 0.82 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 45, scale: 0.9 }} transition={{ type: "spring", stiffness: 240, damping: 26 }}>
              <div className="modal-photo"><Image src={members[opened].image} alt={`Foto ${members[opened].name}`} fill sizes="(max-width: 760px) 86vw, 440px" priority /></div>
              <div><span>{members[opened].role}</span><h3>{members[opened].name}</h3><p>Bagian dari perjalanan dan keluarga besar Hadroh Asy-Syafi&apos;i.</p></div>
            </motion.div>
            <button className="modal-arrow modal-next" onClick={(event) => { event.stopPropagation(); setOpened((opened + 1) % members.length); }} aria-label="Personel berikutnya">→</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export function ActivityGallery() {
  const track = useRef<HTMLDivElement>(null);
  const move = (step: number) => track.current?.scrollBy({ left: step * Math.min(track.current.clientWidth * 0.72, 430), behavior: "smooth" });
  return (
    <section className="activities section" id="kegiatan">
      <div className="activities-heading reveal">
        <div><p className="section-label">Jejak Kegiatan</p><h2>Setiap pertemuan meninggalkan cerita.</h2></div>
        <div className="gallery-controls"><button onClick={() => move(-1)} aria-label="Kegiatan sebelumnya">←</button><button onClick={() => move(1)} aria-label="Kegiatan berikutnya">→</button></div>
      </div>
      <div className="activities-track reveal" ref={track}>
        {activities.map(([number, title, description], index) => (
          <article className={`journey-card journey-${index + 1}`} key={title}>
            <div className="journey-visual" aria-hidden="true"><span>{number}</span><i>✦</i><b>ASY</b></div>
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
    }), { threshold: 0.14 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return null;
}
