import Link from "next/link";

const activities = [
  {
    date: "Segera hadir",
    title: "Agenda Sholawat",
    description: "Jadwal majelis dan penampilan Hadroh Asy-Syafi’i akan dipublikasikan di sini.",
  },
  {
    date: "Dokumentasi",
    title: "Kegiatan Terbaru",
    description: "Foto, video, dan cerita kegiatan akan tersusun rapi agar mudah dilihat jamaah.",
  },
  {
    date: "Terbuka",
    title: "Undangan Acara",
    description: "Informasi kontak dan kebutuhan penampilan dapat diakses langsung dari website.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Hadroh Asy-Syafi'i - Beranda">
          <span className="brand-mark" aria-hidden="true">ا</span>
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
        <div className="hero-ornament" aria-hidden="true"><span /><span /><span /></div>
        <div className="eyebrow">Syiar • Sholawat • Silaturahmi</div>
        <h1>Menghidupkan cinta melalui lantunan sholawat.</h1>
        <p>
          Website resmi Hadroh Asy-Syafi&apos;i untuk berbagi kegiatan, jadwal,
          dokumentasi, dan kabar terbaru kepada jamaah.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#kegiatan">Lihat Kegiatan</a>
          <a className="button button-secondary" href="#kontak">Hubungi Kami</a>
        </div>
        <div className="hero-note">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</div>
      </section>

      <section className="about section" id="tentang">
        <div>
          <p className="section-label">Tentang Kami</p>
          <h2>Ruang digital untuk perjalanan Hadroh Asy-Syafi&apos;i.</h2>
        </div>
        <p className="section-copy">
          Pondasi website ini disiapkan sebagai pusat informasi publik. Profil,
          perjalanan grup, susunan anggota, serta karya dapat ditambahkan dan
          diperbarui oleh pengurus melalui dashboard khusus.
        </p>
      </section>

      <section className="section activity-section" id="kegiatan">
        <div className="section-heading">
          <div><p className="section-label">Publikasi</p><h2>Kegiatan dan kabar terbaru</h2></div>
          <span className="status-pill">Pondasi awal</span>
        </div>
        <div className="activity-grid">
          {activities.map((activity, index) => (
            <article className="activity-card" key={activity.title}>
              <span className="card-number">0{index + 1}</span>
              <p className="card-date">{activity.date}</p>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </article>
          ))}
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
