import React from 'react';
import Deck from './deck/Deck';
import Slide from './deck/Slide';
import Reveal from './deck/Reveal';
import Build from './deck/Build';

export default function App() {
  return (
    <Deck>
      {/* ════════════════════════════════════════════════════════════════
          SLIDE 1 — OPENING (Editorial Cover with Hero Video)
          ════════════════════════════════════════════════════════════════ */}
      <Slide
        nav="01. Pembukaan"
        notes="Selamat datang seluruh peserta! Buka sesi dengan menyapa peserta, memperkenalkan komunitas KafeKoding, dan latar belakang pembukaan kelas diskusi 2026 ini."
      >
        {/* Background Video Layer Khusus Slide 1 */}
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            overflow: 'hidden',
          }}
          aria-hidden="true"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
              opacity: 0.22,
              filter: 'grayscale(10%) contrast(105%)',
            }}
          >
            <source src="/bg.mp4" type="video/mp4" />
            <source src="https://kafekoding.vercel.app/assets/dokumentasi/bg.mp4" type="video/mp4" />
          </video>
        </div>

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 'clamp(18px, 2.5vh, 28px)' }}>
          {/* Header Bar */}
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, borderBottom: '1px solid var(--hair)', paddingBottom: 16 }}>
              <div>
                <img
                  src="/kk.png"
                  alt="Logo KafeKoding"
                  style={{
                    width: 'clamp(76px, 8.5vw, 100px)',
                    height: 'clamp(76px, 8.5vw, 100px)',
                    display: 'block',
                    borderRadius: '50%',
                  }}
                />
              </div>
              <div
                style={{
                  textAlign: 'right',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(0.78rem, 1.1vw, 0.9rem)',
                  letterSpacing: '0.12em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  color: 'var(--fg-faint)',
                }}
              >
                KOMUNITAS KAFEKODING · PEMBUKAAN 2026
              </div>
            </div>
          </Reveal>

          {/* Main Headline */}
          <div style={{ maxWidth: 860, textAlign: 'left', margin: 'clamp(6px, 1.2vh, 14px) 0' }}>
            <Reveal delay={0.06}>
              <h1
                style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: 'clamp(2.2rem, 4.6vw, 3.8rem)',
                  fontWeight: 700,
                  lineHeight: 1.08,
                  letterSpacing: '-0.035em',
                  color: 'var(--fg)',
                  margin: '0 0 6px 0',
                }}
              >
                Kelas Diskusi & Belajar
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <div
                style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: 'clamp(1.8rem, 3.8vw, 3.2rem)',
                  fontWeight: 600,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  color: 'var(--primary)',
                  marginBottom: 'clamp(14px, 2vh, 22px)',
                }}
              >
                Bersama KafeKoding 2026
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(1.02rem, 1.5vw, 1.25rem)',
                  lineHeight: 1.6,
                  color: 'var(--fg-muted)',
                  maxWidth: '42ch',
                  margin: 0,
                }}
              >
                Membangun pemahaman teknologi melalui diskusi aktif, mentoring terarah, dan kolaborasi nyata.
              </p>
            </Reveal>
          </div>

          {/* Bottom Information Row */}
          <Reveal delay={0.24}>
            <div
              style={{
                borderTop: '1px solid var(--hair)',
                paddingTop: 'clamp(14px, 2vh, 20px)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 16,
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.8rem, 1.1vw, 0.92rem)',
                color: 'var(--fg-faint)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ fontWeight: 600, color: 'var(--fg-muted)' }}>www.kafekoding.com</span>
                <span style={{ color: 'var(--hair)' }}>|</span>
                <span>@kafekoding</span>
              </div>
              <span style={{ fontWeight: 600 }}>Periode 2026</span>
            </div>
          </Reveal>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════
          SLIDE 2 — EKOSISTEM & KULTUR (4 Pilar + Nilai Komunitas)
          ════════════════════════════════════════════════════════════════ */}
      <Slide
        nav="02. Ekosistem & Kultur"
        notes="Jelaskan kultur 'Ya.. Kami Berdiskusi!' dan 4 pilar aktivitas komunitas. Tekankan bahwa posisi peserta saat ini ada pada pilar 'Belajar Bersama'."
      >
        <div style={{ textAlign: 'left', width: '100%' }}>
          {/* Header Row with Community Motto */}
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--hair)', paddingBottom: 16, marginBottom: 'clamp(20px, 3vh, 32px)' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-faint)' }}>
                  EKOSISTEM & KULTUR DASAR
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 700, margin: '4px 0 0 0', letterSpacing: '-0.025em' }}>
                  "Ya.. Kami Berdiskusi!"
                </h2>
              </div>
              <p style={{ margin: 0, maxWidth: '40ch', fontSize: '0.92rem', lineHeight: 1.5, color: 'var(--fg-muted)', display: 'none', md: { display: 'block' } }}>
                Pemahaman terbaik lahir dari keberanian bertanya, membedah kode bersama, dan saling mendukung.
              </p>
            </div>
          </Reveal>

          {/* 4 Pilar Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))', gap: 20 }}>
            {[
              {
                num: '01',
                tag: 'Kamu di Sini',
                title: 'Belajar Bersama',
                desc: 'Saling berbagi pemahaman teknologi ke sesama anggota dan peserta kelas secara terarah dan aplikatif.',
                highlight: true,
              },
              {
                num: '02',
                tag: 'Forum Terbuka',
                title: 'Diskusi Teknologi',
                desc: 'Ruang bedah persoalan tugas, tantangan industri, hingga tren rekayasa perangkat lunak modern.',
                highlight: false,
              },
              {
                num: '03',
                tag: 'Kompetisi',
                title: 'Terlibat Event',
                desc: 'Menguji batas kemampuan dengan mengikuti hackathon, workshop, dan lomba inovasi digital nasional.',
                highlight: false,
              },
              {
                num: '04',
                tag: 'Kolaborasi',
                title: 'Eksplorasi Projek',
                desc: 'Melatih kerja tim dalam pembuatan produk digital nyata melalui pembentukan squad terkoordinasi.',
                highlight: false,
              },
            ].map((pilar, idx) => (
              <Reveal key={pilar.num} delay={0.06 * (idx + 1)}>
                <div
                  style={{
                    borderTop: pilar.highlight ? '3px solid var(--primary)' : '1px solid var(--hair)',
                    paddingTop: 16,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.15rem', fontWeight: 700, color: pilar.highlight ? 'var(--primary)' : 'var(--fg-faint)' }}>
                        {pilar.num}
                      </span>
                      {pilar.highlight && (
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 600, color: 'var(--primary)', background: '#eff6ff', padding: '2px 8px', borderRadius: 4 }}>
                          {pilar.tag}
                        </span>
                      )}
                    </div>
                    <h3 style={{ fontSize: '1.18rem', fontWeight: 600, margin: '0 0 8px 0', letterSpacing: '-0.015em' }}>
                      {pilar.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: 1.55, color: 'var(--fg-muted)' }}>
                      {pilar.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════
          SLIDE 3 — HASIL & REKAM JEJAK KAFEKODING (Dedicated Real Proof Showcase)
          ════════════════════════════════════════════════════════════════ */}
      <Slide
        nav="03. Hasil & Rekam Jejak"
        notes="Tekankan bahwa KafeKoding berfokus pada hasil nyata: lulusan dan mentor terbukti berprestasi di tingkat nasional, lolos magang industri BUMN/startup, dan mendapatkan kontrak kerja sebelum wisuda."
      >
        <div style={{ textAlign: 'left', width: '100%' }}>
          {/* Header */}
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--hair)', paddingBottom: 14, marginBottom: 'clamp(18px, 2.5vh, 26px)' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 600 }}>
                  BUKTI NYATA & CAPAIAN
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 700, margin: '4px 0 0 0', letterSpacing: '-0.025em' }}>
                  Hasil & Rekam Jejak KafeKoding
                </h2>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', color: 'var(--fg-faint)', fontWeight: 600 }}>
                Bukan Sekadar Teori
              </span>
            </div>
          </Reveal>

          {/* 3 Prominent Real Achievement Cards (WebP) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: 'clamp(16px, 2.5vw, 24px)', marginBottom: 20 }}>
            {[
              {
                img: '/prestasi/juara-hackathon-2023.webp',
                badge: 'JUARA 2 NASIONAL',
                title: 'Juara II Hackathon Nasional 2023',
                highlight: 'Politeknik Negeri Padang (PNP)',
                detail: 'Tim KafeKoding (Akmal, Citra, Azhari) berhasil meraih Juara 2 dalam kompetisi solusi digital tingkat nasional.',
              },
              {
                img: '/prestasi/sevima-security-challenge.webp',
                badge: 'CYBER SECURITY AWARD',
                title: 'SEVIMA Security Challenge 2026',
                highlight: 'Best Writeup — Rp 26.500.000',
                detail: 'Raihan penghargaan Best Writeup pada ajang kompetisi keamanan siber nasional SEVIMA Security Challenge 2026.',
              },
              {
                img: '/prestasi/kontrak-kerja-alif-reyhan.webp',
                badge: 'KONTRAK KERJA INDUSTRI',
                title: 'Rekrutmen Sebelum Lulus',
                highlight: 'Universitas Metamedia',
                detail: 'Alif Budiman & Reyhan Dwi Syaputra telah mengantongi kontrak kerja software engineer saat masih berstatus mahasiswa aktif.',
              },
            ].map((prestasi, idx) => (
              <Reveal key={prestasi.title} delay={0.06 * (idx + 1)}>
                <div
                  style={{
                    border: '1px solid var(--hair)',
                    borderRadius: 'var(--radius)',
                    overflow: 'hidden',
                    background: 'var(--surface-1)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <div style={{ position: 'relative', width: '100%', paddingTop: '72%', background: '#090d16' }}>
                    <img
                      src={prestasi.img}
                      alt={prestasi.title}
                      loading="lazy"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                    <div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.05em' }}>
                        {prestasi.badge}
                      </span>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '4px 0 2px 0', color: 'var(--fg)', letterSpacing: '-0.015em' }}>
                        {prestasi.title}
                      </h3>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--fg)', marginBottom: 6 }}>
                        {prestasi.highlight}
                      </div>
                      <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--fg-muted)', lineHeight: 1.45 }}>
                        {prestasi.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════
          SLIDE 4 — MATERI & ALUR 15 PERTEMUAN (Curriculum & Learning Journey)
          ════════════════════════════════════════════════════════════════ */}
      <Slide
        nav="04. Kurikulum & Alur"
        notes="Jelaskan 4 domain kurikulum yang diajarkan dan bagaimana materi tersebut didistribusikan dalam 15 pertemuan berjenjang."
      >
        <div style={{ textAlign: 'left', width: '100%' }}>
          {/* Header */}
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--hair)', paddingBottom: 14, marginBottom: 'clamp(18px, 2.5vh, 26px)' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-faint)' }}>
                  KURIKULUM & PETA PERJALANAN
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', fontWeight: 700, margin: '4px 0 0 0', letterSpacing: '-0.025em' }}>
                  Domain Materi & Struktur 15 Sesi
                </h2>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', color: 'var(--primary)', fontWeight: 600 }}>
                15 Pertemuan Terarah
              </span>
            </div>
          </Reveal>

          {/* Top: 4 Domain Kurikulum */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: 12, marginBottom: 18 }}>
            {[
              { domain: 'Web Development', stack: 'HTML5, Modern JS, PHP, Laravel' },
              { domain: 'Mobile Application', stack: 'Android SDK, Architecture, REST API' },
              { domain: 'Python & Data', stack: 'Sintaks, Algoritma, Database MySQL' },
              { domain: 'UI/UX & Desain', stack: 'Wireframe, Typography, Figma Prototype' },
            ].map((item, idx) => (
              <Reveal key={item.domain} delay={0.04 * (idx + 1)}>
                <div style={{ border: '1px solid var(--hair)', padding: '10px 14px', borderRadius: 'var(--radius)', background: 'var(--surface-2)' }}>
                  <h3 style={{ fontSize: '0.94rem', fontWeight: 700, margin: '0 0 2px 0', color: 'var(--fg)' }}>
                    {item.domain}
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--fg-muted)', lineHeight: 1.35 }}>
                    {item.stack}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom: 4 Roadmap Phases */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: 14 }}>
            {[
              {
                sesi: 'Sesi 01 - 04',
                fase: 'Fondasi & Logika',
                detail: 'Setup lingkungan kerja, sintaks dasar, dan logika komputasi terstruktur.',
              },
              {
                sesi: 'Sesi 05 - 09',
                fase: 'Praktek Studi Kasus',
                detail: 'Penerapan konsep pada studi kasus nyata, debugging, dan pemecahan error.',
              },
              {
                sesi: 'Sesi 10 - 13',
                fase: 'Integrasi & Data',
                detail: 'Pengembangan fitur lengkap, integrasi database, dan optimasi performa.',
              },
              {
                sesi: 'Sesi 14 - 15',
                fase: 'Review & Ujian Kelayakan',
                detail: 'Finalisasi tugas mandiri, review komprehensif, dan ujian kelayakan akhir.',
              },
            ].map((road, idx) => (
              <Reveal key={road.sesi} delay={0.05 * (idx + 1)}>
                <div style={{ borderTop: '2px solid var(--primary)', paddingTop: 12 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 600, color: 'var(--primary)', marginBottom: 2 }}>
                    {road.sesi}
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 4px 0', letterSpacing: '-0.015em' }}>
                    {road.fase}
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.82rem', lineHeight: 1.45, color: 'var(--fg-muted)' }}>
                    {road.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════
          SLIDE 5 — SYARAT KELULUSAN KELAS 2026 (6 Core Checklist)
          ════════════════════════════════════════════════════════════════ */}
      <Slide
        nav="05. Syarat Kelulusan"
        notes="Jelaskan 6 syarat kelulusan secara lugas. Tekankan batas toleransi kehadiran (maksimal 4 kali) dan kewajiban mengumpulkan tugas."
      >
        <div style={{ textAlign: 'left', width: '100%' }}>
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--hair)', paddingBottom: 16, marginBottom: 'clamp(24px, 3.5vh, 36px)' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-faint)' }}>
                  KETENTUAN & STANDAR KELULUSAN
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 700, margin: '4px 0 0 0', letterSpacing: '-0.025em' }}>
                  6 Syarat Penyelesaian Kelas 2026
                </h2>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', color: 'var(--primary)', fontWeight: 600 }}>
                Wajib Terpenuhi
              </span>
            </div>
          </Reveal>

          {/* 2-Column Compact Numbered Checklist */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))', gap: '14px 40px' }}>
            {[
              { num: '01', text: 'Melakukan pendaftaran resmi sebagai peserta kelas KafeKoding 2026.' },
              { num: '02', text: 'Mengikuti Sesi Pembukaan dan orientasi kelas (sesi saat ini).' },
              { num: '03', text: 'Menghadiri sesi pertemuan minimal 12 kali (maksimal 4 kali toleransi tidak hadir).' },
              { num: '04', text: 'Menyelesaikan dan mengumpulkan seluruh penugasan mingguan dari mentor.' },
              { num: '05', text: 'Mengikuti dan dinyatakan lulus pada ujian kelayakan akhir.' },
              { num: '06', text: 'Mematuhi peraturan, tata tertib, dan etika yang ditetapkan oleh KafeKoding.' },
            ].map((syarat, idx) => (
              <Build key={syarat.num} at={idx + 1}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '10px 0', borderBottom: '1px solid var(--hair-2)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', paddingTop: 1 }}>
                    {syarat.num}
                  </span>
                  <span style={{ fontSize: '0.98rem', lineHeight: 1.5, color: 'var(--fg)' }}>
                    {syarat.text}
                  </span>
                </div>
              </Build>
            ))}
          </div>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════
          SLIDE 6 — MANFAAT & JENJANG KOMUNITAS (Merged Value & Pathway)
          ════════════════════════════════════════════════════════════════ */}
      <Slide
        nav="06. Manfaat & Jenjang"
        notes="Sampaikan manfaat nyata yang didapat peserta dan jalur jenjang kelanjutan setelah lulus menjadi kontributor maupun mentor."
      >
        <div style={{ textAlign: 'left', width: '100%' }}>
          {/* Header */}
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--hair)', paddingBottom: 14, marginBottom: 'clamp(20px, 3vh, 32px)' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-faint)' }}>
                  NILAI TAMBAH & PELUANG
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', fontWeight: 700, margin: '4px 0 0 0', letterSpacing: '-0.025em' }}>
                  Apa yang Kamu Dapatkan & Jenjang Karir
                </h2>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', color: 'var(--primary)', fontWeight: 600 }}>
                Ekosistem Berkelanjutan
              </span>
            </div>
          </Reveal>

          {/* 2-Section Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))', gap: 'clamp(20px, 3.5vw, 40px)' }}>
            {/* Left: 3 Manfaat Kelulusan */}
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', marginBottom: 14 }}>
                Capaian Bagi Lulusan
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { num: '01', title: 'Ilmu Aplikatif', desc: 'Pondasi logika dan kebiasaan membedah masalah yang siap digunakan di perkuliahan & industri.' },
                  { num: '02', title: 'Teman Diskusi & Relasi', desc: 'Jejaring belajar suportif untuk bertukar pikiran, bedah error, dan kolaborasi jangka panjang.' },
                  { num: '03', title: 'Sertifikat Kelulusan Resmi', desc: 'Verifikasi kelulusan resmi atas dedikasi dan penguasaan kompetensi selama program.' },
                ].map((val, idx) => (
                  <Reveal key={val.num} delay={0.05 * (idx + 1)}>
                    <div style={{ borderLeft: '2px solid var(--primary)', paddingLeft: 14 }}>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 2px 0' }}>{val.title}</h3>
                      <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--fg-muted)', lineHeight: 1.5 }}>{val.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right: 4 Langkah Jenjang Komunitas */}
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--fg-faint)', textTransform: 'uppercase', marginBottom: 14 }}>
                Jalur Pengembangan Komunitas
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[
                  { step: '01', role: 'Peserta Kelas', desc: '15 sesi belajar & ujian kelayakan.' },
                  { step: '02', role: 'Lulusan Resmi', desc: 'Fondasi matang & sertifikat resmi.' },
                  { step: '03', role: 'Anggota Komunitas', desc: 'Ekosistem internal & sharing alumni.' },
                  { step: '04', role: 'Dev Squad & Mentor', desc: 'Tim developer & mentor periode baru.' },
                ].map((pth, idx) => (
                  <Reveal key={pth.step} delay={0.06 * (idx + 1)}>
                    <div style={{ border: '1px solid var(--hair)', padding: 12, borderRadius: 'var(--radius)', background: 'var(--surface-2)' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', fontWeight: 700, color: 'var(--primary)' }}>
                        FASE {pth.step}
                      </span>
                      <h4 style={{ fontSize: '0.96rem', fontWeight: 700, margin: '2px 0 4px 0' }}>{pth.role}</h4>
                      <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--fg-muted)', lineHeight: 1.4 }}>{pth.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════
          SLIDE 7 — CLOSING & Q&A (Editorial Functional Closing)
          ════════════════════════════════════════════════════════════════ */}
      <Slide
        nav="07. Tanya Jawab"
        notes="Buka sesi tanya jawab interaktif dan berikan instruksi kepada peserta mengenai jadwal pertemuan pertama."
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 3vh, 32px)', textAlign: 'left' }}>
          {/* Header */}
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--hair)', paddingBottom: 16 }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 600 }}>
                  SESI TANYA JAWAB
                </span>
                <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', fontWeight: 700, margin: '4px 0 0 0', letterSpacing: '-0.03em' }}>
                  Ada Pertanyaan?
                </h2>
              </div>
              <img
                src="/kk.png"
                alt="Logo KafeKoding"
                style={{ width: 44, height: 44, borderRadius: '50%' }}
              />
            </div>
          </Reveal>

          {/* Center Info: Q&A Link & Next Steps */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: 'clamp(24px, 4vw, 56px)', margin: 'auto 0' }}>
            <Reveal delay={0.08}>
              <div>
                <p style={{ fontSize: '1.08rem', lineHeight: 1.6, color: 'var(--fg)', margin: '0 0 16px 0' }}>
                  Silakan ajukan pertanyaan seputar teknis kelas, materi, maupun mekanisme pembelajaran.
                </p>
                <div style={{ borderLeft: '2px solid var(--primary)', paddingLeft: 18 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--fg-faint)', textTransform: 'uppercase', marginBottom: 4 }}>
                    Link Pertanyaan Daring
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.4rem, 2.4vw, 1.8rem)', fontWeight: 700, color: 'var(--primary)' }}>
                    s.id/kk2026qa
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div style={{ borderTop: '1px solid var(--hair)', paddingTop: 16 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--fg-faint)', textTransform: 'uppercase', marginBottom: 6 }}>
                  Slogan & Semangat
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--fg)', marginBottom: 8 }}>
                  "Kami Memilih Turun Tangan."
                </div>
                <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--fg-muted)', lineHeight: 1.5 }}>
                  Sampai jumpa di pertemuan pertama kelas diskusi dan belajar bersama KafeKoding 2026.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Bottom Info Bar */}
          <Reveal delay={0.24}>
            <div
              style={{
                borderTop: '1px solid var(--hair)',
                paddingTop: 16,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 16,
                fontFamily: 'var(--font-mono)',
                fontSize: '0.88rem',
                color: 'var(--fg-faint)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ fontWeight: 600, color: 'var(--fg-muted)' }}>www.kafekoding.com</span>
                <span style={{ color: 'var(--hair)' }}>|</span>
                <span>@kafekoding</span>
              </div>
              <span style={{ fontWeight: 600 }}>Periode 2026</span>
            </div>
          </Reveal>
        </div>
      </Slide>
    </Deck>
  );
}
