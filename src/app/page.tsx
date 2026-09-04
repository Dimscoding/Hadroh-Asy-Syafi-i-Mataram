import Link from "next/link";
import { HeroDeck, MemberCarousel } from "./motion-showcase";

export default function Home() {
  return (
    <main className="home-page">
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
          <Link className="nav-login" href="/login">Login Pengurus</Link>
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

      <section className="about section" id="tentang">
        <div className="about-title">
          <p className="section-label">Tentang Kami</p>
          <h2>Bukan sekadar irama. Ini tentang <span>doa</span>, persaudaraan, dan cinta.</h2>
        </div>
        <div className="about-grid">
          <div className="feature-card feature-photo"><span>Foto utama grup</span><strong>Hadroh Asy-Syafi&apos;i</strong></div>
          <div className="feature-card feature-quote"><small>Kebersamaan</small><strong>Satu majelis,<br />satu cinta.</strong><p>Menjaga syiar melalui sholawat dan silaturahmi.</p></div>
          <div className="mini-stack"><div><small>Semangat</small><strong>100%</strong></div><div><small>Tujuan</small><strong>Syiar</strong></div></div>
        </div>
      </section>

      <section className="section activity-section" id="kegiatan">
        <div className="section-heading">
          <div><p className="section-label">Dokumentasi</p><h2>Momen yang tumbuh bersama jamaah.</h2></div>
          <p className="heading-note">Kartu pada bagian pembuka akan berisi foto-foto kegiatan asli.</p>
        </div>
        <div className="activity-callout"><span>01</span><p>Majelis • Undangan • Latihan • Perjalanan</p><a href="#personel">Kenali personel <b>↘</b></a></div>
      </section>

      <MemberCarousel />

      <section className="contact section" id="kontak">
        <div><p className="section-label section-label-light">Silaturahmi</p><h2>Ingin mengundang Hadroh Asy-Syafi&apos;i?</h2></div>
        <p>Kontak WhatsApp dan Instagram akan ditambahkan setelah data resmi grup tersedia.</p>
      </section>

      <footer><span>© 2026 Hadroh Asy-Syafi&apos;i</span><span>Sholawat menyatukan hati.</span></footer>
    </main>
  );
}
