import Link from "next/link";
import { ActivityGallery, HeroDeck, PersonGallery, RevealController, WelcomeIntro } from "./motion-showcase";

export default function Home() {
  return (
    <main className="home-page">
      <WelcomeIntro />
      <RevealController />
      <section className="hero">
        <header className="site-header">
          <Link className="brand" href="/" aria-label="Hadroh Asy-Syafi'i - Beranda">
            <span className="brand-mark" aria-hidden="true">ASY</span>
            <span>Hadroh Asy-Syafi&apos;i</span>
          </Link>
          <nav aria-label="Navigasi utama">
            <a href="#tentang">Tentang</a>
            <a href="#kegiatan">Kegiatan</a>
            <a href="#personel">Personel</a>
            <a href="#kontak">Kontak</a>
          </nav>
          <a className="nav-contact" href="#kontak">Hubungi Kami</a>
        </header>
        <div className="hero-copy">
          <div className="eyebrow">Syiar <span>•</span> Sholawat <span>•</span> Silaturahmi</div>
          <h1>Menyatukan hati melalui <em>lantunan sholawat.</em></h1>
          <p>Ruang digital Hadroh Asy-Syafi&apos;i untuk berbagi kegiatan, perjalanan, dan kabar kepada jamaah.</p>
          <div className="hero-actions">
            <a className="button button-ghost" href="#kegiatan">Lihat kegiatan</a>
            <a className="button button-primary" href="#kontak">Hubungi kami <span>↗</span></a>
          </div>
        </div>
        <HeroDeck />
        <div className="cloud-field" aria-hidden="true">
          <i /><i /><i /><i /><i />
        </div>
      </section>

      <div className="value-ticker" aria-label="Nilai Hadroh Asy-Syafi'i">
        <div><span>✦ Sholawat</span><span>✦ Syiar</span><span>✦ Silaturahmi</span><span>✦ Kebersamaan</span><span>✦ Sholawat</span><span>✦ Syiar</span><span>✦ Silaturahmi</span></div>
      </div>

      <PersonGallery />
      <ActivityGallery />

      <section className="faith-section" id="tentang">
        <div className="faith-orbit" aria-hidden="true"><i /><i /><i /></div>
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
        <div><p className="section-label section-label-light">Silaturahmi</p><h2>Ingin mengundang Hadroh Asy-Syafi&apos;i?</h2></div>
        <p>Kontak WhatsApp dan Instagram akan ditambahkan setelah data resmi grup tersedia.</p>
      </section>

      <footer><span>© 2026 Hadroh Asy-Syafi&apos;i</span><span>Sholawat menyatukan hati.</span></footer>
    </main>
  );
}
