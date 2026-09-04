import { redirect } from "next/navigation";
import { logout } from "@/app/login/actions";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

const panels = [
  ["Kegiatan", "Buat dan perbarui publikasi kegiatan grup."],
  ["Jadwal", "Atur jadwal majelis dan undangan penampilan."],
  ["Galeri", "Kelola dokumentasi foto dan video."],
];

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) redirect("/login");
  return (
    <main className="dashboard">
      <div className="dashboard-shell">
        <header className="dashboard-header">
          <div className="brand"><span className="brand-mark">ا</span><span>Hadroh Asy-Syafi&apos;i</span></div>
          <form action={logout}><button type="submit">Keluar</button></form>
        </header>
        <section className="dashboard-welcome">
          <p className="eyebrow">Dashboard Pengurus</p>
          <h1>Assalamu&apos;alaikum.</h1>
          <p>Login aktif sebagai {String(data.claims.email ?? "pengurus")}.</p>
        </section>
        <section className="dashboard-grid" aria-label="Menu pengelolaan">
          {panels.map(([title, description]) => <article className="dashboard-card" key={title}><strong>{title}</strong><p>{description}</p></article>)}
        </section>
      </div>
    </main>
  );
}
