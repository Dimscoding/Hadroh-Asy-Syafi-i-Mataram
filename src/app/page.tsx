import Image from "next/image";
import {
  ActivityGallery,
  FloatingNavigation,
  PersonGallery,
  RevealController,
  WelcomeIntro,
} from "./motion-showcase";

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-1.76-.88-2.91-1.57-4.08-3.56-.31-.53.31-.49.88-1.63.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49 1.89.81 2.63.88 3.58.74.58-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.04 21.5a9.42 9.42 0 0 1-4.8-1.31l-5.33 1.4 1.43-5.21a9.45 9.45 0 1 1 8.7 5.12m0-17.19a7.73 7.73 0 0 0-6.57 11.8l.2.32-.85 3.11 3.19-.84.31.18a7.74 7.74 0 1 0 3.72-14.57" /></svg>;
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.67 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.25-.15-4.77-1.69-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.63 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.69 21.3.27 16.95.07 15.67.01 15.26 0 12 0m0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88" /></svg>;
}

export default function Home() {
  return (
    <main className="home-page">
      <WelcomeIntro />
      <RevealController />
      <FloatingNavigation />

      <section className="hero" id="beranda">
        <div className="hero-landscape" aria-hidden="true">
          <Image src="/hero-landscape.webp" alt="" fill priority sizes="100vw" />
        </div>
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-ornament ornament-left" aria-hidden="true">✦</div>
        <div className="hero-ornament ornament-right" aria-hidden="true">✦</div>
        <div className="hero-copy">
          <p className="eyebrow">Syiar <span>•</span> Sholawat <span>•</span> Silaturahmi</p>
          <h1>Menyatukan hati melalui <em>lantunan sholawat.</em></h1>
          <p>Ruang digital Hadroh Asy-Syafi&apos;i untuk berbagi kegiatan, perjalanan, dan kabar kepada jamaah.</p>
          <div className="hero-actions">
            <a className="button button-ghost" href="#personel">Personel</a>
            <a className="button button-primary" href="#kegiatan">Kegiatan</a>
          </div>
        </div>
      </section>

      <div className="sholawat-ticker" aria-label="Sholawat kepada Nabi Muhammad">
        <div className="sholawat-track">
          {[0, 1].map((copy) => (
            <div className="sholawat-group" key={copy} aria-hidden={copy === 1}>
              <span className="ticker-star">✦</span>
              <strong lang="ar" dir="rtl">اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ</strong>
              <span>Allahumma Sholli Ala Sayyidina Muhammad Wa Ala Ali Sayyidina Muhammad</span>
            </div>
          ))}
        </div>
      </div>

      <PersonGallery />
      <ActivityGallery />

      <section className="faith-section" id="tentang">
        <div className="faith-ornament" aria-hidden="true"><span>✦</span><i /><i /></div>
        <div className="faith-copy reveal">
          <p className="section-label section-label-light">Lebih dari Sebuah Lantunan</p>
          <h2>Bukan sekadar alunan musik hadroh.</h2>
          <p>Setiap tabuhan adalah pengingat, setiap sholawat adalah doa, dan setiap pertemuan adalah jalan untuk mempererat ukhuwah. Hadroh Asy-Syafi&apos;i hadir untuk merawat cinta kepada Rasulullah ﷺ melalui syiar yang teduh dan penuh adab.</p>
          <blockquote>“Dengan sholawat, hati yang jauh kembali dekat.”</blockquote>
        </div>
        <div className="faith-cards reveal">
          <article><span>01</span><h3>Syiar</h3><p>Menyampaikan kebaikan dengan cara yang menenteramkan.</p></article>
          <article><span>02</span><h3>Ukhuwah</h3><p>Menjaga persaudaraan dalam setiap langkah dan pertemuan.</p></article>
          <article><span>03</span><h3>Mahabbah</h3><p>Menumbuhkan cinta kepada Rasulullah ﷺ melalui sholawat.</p></article>
        </div>
      </section>

      <section className="contact section" id="kontak">
        <div className="contact-copy"><p className="section-label">Silaturahmi</p><h2>Ingin mengundang Hadroh Asy-Syafi&apos;i?</h2><p>Hubungi kami untuk undangan majelis, pernikahan, dan kegiatan keislaman.</p></div>
        <div className="contact-links">
          <a href="https://wa.me/6287865863912" target="_blank" rel="noreferrer" aria-label="Hubungi Hadroh Asy-Syafi'i melalui WhatsApp">
            <WhatsAppIcon />
          </a>
          <a href="https://www.instagram.com/hadroh_asysyafii_official/" target="_blank" rel="noreferrer" aria-label="Buka Instagram Hadroh Asy-Syafi'i">
            <InstagramIcon />
          </a>
        </div>
      </section>

      <footer><span>© 2026 Hadroh Asy-Syafi&apos;i</span><span>Sholawat menyatukan hati.</span></footer>
    </main>
  );
}
