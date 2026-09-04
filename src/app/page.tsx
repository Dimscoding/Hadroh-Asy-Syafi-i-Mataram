import Link from "next/link";
import ActivitySlider from "./activity-slider";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Hadroh Asy-Syafi'i - Beranda">
          <span className="brand-mark" aria-hidden="true">ASY</span>
          <span>Hadroh Asy-Syafi&apos;i</span>
        </Link>
        <nav aria-label="Navigasi utama">
          <a href="#tentang">Tentang</a>
          <a href="#kegiatan">Kegiatan</a>
          <a href="#kontak">Kontak</a>
          <Link className="nav-login" href="/login">Login Pengurus</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="cloud cloud-one" aria-hidden="true" />
        <div className="cloud cloud-two" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> Syiar • Sholawat • Silaturahmi</div>
          <h1>Sholawat yang meneduhkan, silaturahmi yang menguatkan.</h1>
          <p>Ruang digital Hadroh Asy-Syafi&apos;i untuk berbagi kegiatan, perjalanan, dan lantunan cinta kepada Rasulullah.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#kegiatan">Lihat Kegiatan <span>↗</span></a>
            <a className="button button-secondary" href="#kontak">Hubungi Kami</a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Tempat foto utama seluruh personel Hadroh Asy-Syafi'i">
          <div className="person-photo"><span>Foto bersama personel</span><small>Gambar utama</small></div>
          <div className="floating-card floating-left"><span>01</span><strong>Kegiatan</strong></div>
          <div className="floating-card floating-right"><span>02</span><strong>Sholawat</strong></div>
        </div>
      </section>

      <section className="about section" id="tentang">
        <div>
          <p className="section-label">Tentang Kami</p>
          <h2>Tumbuh bersama dalam syiar dan sholawat.</h2>
        </div>
        <p className="section-copy">
          Setiap lantunan membawa doa, setiap pertemuan menguatkan persaudaraan.
          Di sini perjalanan, personel, dan kegiatan Hadroh Asy-Syafi&apos;i dirangkum
          agar lebih dekat dengan jamaah.
        </p>
      </section>

      <section className="section activity-section" id="kegiatan">
        <div className="section-heading">
          <div><p className="section-label">Dokumentasi</p><h2>Cerita dalam setiap kegiatan</h2></div>
          <p className="heading-note">Geser kartu ke kanan dan kiri untuk menjelajahi momen.</p>
        </div>
        <ActivitySlider />
      </section>

      <section className="contact section" id="kontak">
        <div><p className="section-label section-label-light">Silaturahmi</p><h2>Ingin mengundang Hadroh Asy-Syafi&apos;i?</h2></div>
        <p>Kontak WhatsApp dan Instagram akan ditambahkan setelah data resmi grup tersedia.</p>
      </section>

      <footer><span>© 2026 Hadroh Asy-Syafi&apos;i</span><span>Sholawat menyatukan hati.</span></footer>
    </main>
  );
}
