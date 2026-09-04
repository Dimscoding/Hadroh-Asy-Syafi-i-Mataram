import {
  ActivityGallery,
  FloatingNavigation,
  HeroDeck,
  PersonGallery,
  RevealController,
  WelcomeIntro,
} from "./motion-showcase";

export default function Home() {
  return (
    <main className="home-page">
      <WelcomeIntro />
      <RevealController />
      <FloatingNavigation />

      <section className="hero" id="beranda">
        <div className="hero-ornament ornament-left" aria-hidden="true">✦</div>
        <div className="hero-ornament ornament-right" aria-hidden="true">✦</div>
        <div className="hero-copy">
          <p className="eyebrow">Syiar <span>•</span> Sholawat <span>•</span> Silaturahmi</p>
          <h1>Menyatukan hati melalui <em>lantunan sholawat.</em></h1>
          <p>Ruang digital Hadroh Asy-Syafi&apos;i untuk berbagi kegiatan, perjalanan, dan kabar kepada jamaah.</p>
          <div className="hero-actions">
            <a className="button button-ghost" href="#personel">Kenali personel</a>
            <a className="button button-primary" href="#kegiatan">Lihat kegiatan <span>↗</span></a>
          </div>
        </div>
        <HeroDeck />
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
        <div><p className="section-label">Silaturahmi</p><h2>Ingin mengundang Hadroh Asy-Syafi&apos;i?</h2></div>
        <p>Kontak WhatsApp dan Instagram akan ditambahkan setelah data resmi grup tersedia.</p>
      </section>

      <footer><span>© 2026 Hadroh Asy-Syafi&apos;i</span><span>Sholawat menyatukan hati.</span></footer>
    </main>
  );
}
