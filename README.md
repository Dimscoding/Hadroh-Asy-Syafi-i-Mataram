# Hadroh Asy-Syafi'i

Pondasi website publik Hadroh Asy-Syafi'i dengan dashboard pengurus yang dilindungi Supabase Auth.

## Struktur awal

- `/` — website publik
- `/login` — login email dan password khusus pengurus
- `/dashboard` — area privat yang memverifikasi identitas lewat Supabase

## Menjalankan project

1. Salin `.env.example` menjadi `.env.local`.
2. Isi URL dan publishable key dari project Supabase khusus Hadroh Asy-Syafi'i.
3. Jalankan `npm install`, lalu `npm run dev`.

Jangan memasukkan secret key atau service-role key ke variabel `NEXT_PUBLIC_*`.
