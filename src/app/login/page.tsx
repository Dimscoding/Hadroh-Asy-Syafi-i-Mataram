import Link from "next/link";
import { login } from "./actions";

export const dynamic = "force-dynamic";

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  return (
    <main className="auth-page">
      <section className="auth-intro">
        <p className="eyebrow">Area Pengurus</p>
        <h1>Kelola publikasi dalam satu tempat.</h1>
        <p>Halaman ini khusus pengurus Hadroh Asy-Syafi&apos;i. Pengunjung umum tidak perlu login.</p>
      </section>
      <section className="auth-card">
        <h2>Masuk</h2>
        <p>Gunakan akun pengurus yang terdaftar di Supabase.</p>
        {error ? <div className="auth-error" role="alert">{error}</div> : null}
        <form action={login}>
          <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
          <div className="field"><label htmlFor="password">Password</label><input id="password" name="password" type="password" autoComplete="current-password" required /></div>
          <button className="submit-button" type="submit">Login ke Dashboard</button>
        </form>
        <Link className="back-link" href="/">← Kembali ke website publik</Link>
      </section>
    </main>
  );
}
