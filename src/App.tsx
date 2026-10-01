import React from 'react';
import Deck from './deck/Deck';
import Slide from './deck/Slide';
import Reveal from './deck/Reveal';
import Build from './deck/Build';

export default function App() {
  return (
    <Deck>
      {/* ════════════════════════════════════════════════════════════════
          SLIDE 1 — OPENING (Editorial Community Opening)
          ════════════════════════════════════════════════════════════════ */}
      <Slide
        nav="01. KafeKoding 2026"
        notes="Selamat datang seluruh peserta! Buka sesi dengan menyapa peserta dan memperkenalkan ruang belajar, diskusi, dan kolaborasi KafeKoding 2026."
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(380px, 100%), 1fr))',
            gap: 'clamp(28px, 4.5vw, 64px)',
            alignItems: 'center',
            textAlign: 'left',
          }}
        >
          {/* Left Column: Understated Logo, Confident Editorial Typography */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', gap: 'clamp(20px, 3vh, 32px)' }}>
            <div>
              {/* Understated Small Logo */}
              <Reveal>
                <div style={{ marginBottom: 'clamp(24px, 3.5vh, 40px)' }}>
                  <img
                    src="/kk.webp"
                    alt="KafeKoding"
                    style={{
                      width: 'clamp(36px, 4vw, 44px)',
                      height: 'clamp(36px, 4vw, 44px)',
                      borderRadius: '50%',
                      display: 'block',
                    }}
                  />
                </div>
              </Reveal>

              {/* Main Title & Supporting Hierarchy */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px, 1.5vh, 16px)' }}>
                <Reveal delay={0.06}>
                  <h1
                    style={{
                      fontFamily: 'var(--font-head)',
                      fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                      fontWeight: 700,
                      lineHeight: 1.05,
                      letterSpacing: '-0.04em',
                      color: 'var(--fg)',
                      margin: 0,
                    }}
                  >
                    KafeKoding 2026
                  </h1>
                </Reveal>

                <Reveal delay={0.12}>
                  <div
                    style={{
                      fontFamily: 'var(--font-head)',
                      fontSize: 'clamp(1.25rem, 2.2vw, 1.85rem)',
                      fontWeight: 600,
                      lineHeight: 1.25,
                      letterSpacing: '-0.02em',
                      color: 'var(--primary)',
                    }}
                  >
                    Belajar. Berdiskusi. Membuat.
                  </div>
                </Reveal>

                <Reveal delay={0.18}>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'clamp(0.98rem, 1.35vw, 1.15rem)',
                      lineHeight: 1.6,
                      color: 'var(--fg-muted)',
                      maxWidth: '38ch',
                      margin: 'clamp(6px, 1vh, 12px) 0 0 0',
                    }}
                  >
                    Ruang untuk bertumbuh bersama melalui teknologi, eksplorasi, dan kolaborasi.
                  </p>
                </Reveal>
              </div>
            </div>

            {/* Subtle Natural Website URL */}
            <Reveal delay={0.24}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: 'var(--fg-faint)',
                  letterSpacing: '0.04em',
                }}
              >
                www.kafekoding.com
              </div>
            </Reveal>
          </div>

          {/* Right Column: Clean Rectangular Community Photo Block */}
          <Reveal delay={0.15}>
            <div
              style={{
                width: '100%',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                border: '1px solid var(--hair)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
                background: 'var(--surface-1)',
              }}
            >
              <div style={{ position: 'relative', width: '100%', paddingTop: '68%', background: '#090d16' }}>
                <img
                  src="/prestasi/suasana-kelas.webp"
                  alt="Komunitas KafeKoding"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════
          SLIDE 2 — EKOSISTEM & KULTUR (Belajar & Bertumbuh Bersama)
          ════════════════════════════════════════════════════════════════ */}
      <Slide
        nav="02. Ekosistem & Kultur"
        notes="Jelaskan 4 pilar aktivitas KafeKoding: belajar bersama, diskusi teknologi, terlibat event, dan eksplorasi projek nyata."
      >
        <div style={{ textAlign: 'left', width: '100%', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
          {/* Header Row */}
          <Reveal>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: 'clamp(12px, 2vw, 28px)',
                borderBottom: '1px solid var(--hair)',
                paddingBottom: 'clamp(16px, 2.5vh, 24px)',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--fg-faint)',
                    fontWeight: 600,
                  }}
                >
                  EKOSISTEM & KULTUR DASAR
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-head)',
                    fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
                    fontWeight: 700,
                    margin: '6px 0 0 0',
                    letterSpacing: '-0.03em',
                    color: 'var(--fg)',
                  }}
                >
                  Belajar & Bertumbuh Bersama
                </h2>
              </div>
              <p
                style={{
                  margin: 0,
                  maxWidth: '42ch',
                  fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                  lineHeight: 1.6,
                  color: 'var(--fg-muted)',
                }}
              >
                Pemahaman terbaik lahir dari keberanian bertanya, membedah kode bersama, dan saling mendukung.
              </p>
            </div>
          </Reveal>

          {/* 4 Points in Open Editorial Columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))',
              gap: 'clamp(24px, 3.5vw, 44px)',
              margin: 'clamp(24px, 4vh, 48px) 0 0 0',
            }}
          >
            {[
              {
                num: '01',
                title: 'Belajar Bersama',
                desc: 'Saling berbagi pemahaman teknologi ke sesama anggota dan peserta kelas secara terarah dan aplikatif.',
                isPrimary: true,
              },
              {
                num: '02',
                title: 'Diskusi Teknologi',
                desc: 'Ruang bedah persoalan tugas, tantangan industri, hingga tren rekayasa perangkat lunak modern.',
                isPrimary: false,
              },
              {
                num: '03',
                title: 'Terlibat Event',
                desc: 'Menguji batas kemampuan dengan mengikuti hackathon, workshop, dan lomba inovasi digital nasional.',
                isPrimary: false,
              },
              {
                num: '04',
                title: 'Eksplorasi Projek',
                desc: 'Melatih kerja tim dalam pembuatan produk digital nyata melalui pembentukan squad terkoordinasi.',
                isPrimary: false,
              },
            ].map((pilar, idx) => (
              <Reveal key={pilar.num} delay={0.06 * (idx + 1)}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    height: '100%',
                  }}
                >
                  {/* Top Hairline Indicator */}
                  <div
                    style={{
                      width: '100%',
                      height: pilar.isPrimary ? 2 : 1,
                      background: pilar.isPrimary ? 'var(--primary)' : 'var(--hair)',
                      marginBottom: 'clamp(14px, 2vh, 20px)',
                    }}
                  />

                  {/* Number */}
                  <span
                    style={{
                      fontFamily: 'var(--font-head)',
                      fontSize: 'clamp(1.8rem, 2.6vw, 2.4rem)',
                      fontWeight: 700,
                      lineHeight: 1,
                      letterSpacing: '-0.03em',
                      color: pilar.isPrimary ? 'var(--primary)' : 'var(--fg)',
                    }}
                  >
                    {pilar.num}
                  </span>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-head)',
                      fontSize: 'clamp(1.15rem, 1.4vw, 1.3rem)',
                      fontWeight: 700,
                      margin: '12px 0 8px 0',
                      letterSpacing: '-0.02em',
                      color: 'var(--fg)',
                    }}
                  >
                    {pilar.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.92rem',
                      lineHeight: 1.6,
                      color: 'var(--fg-muted)',
                    }}
                  >
                    {pilar.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════
          SLIDE 3 — JEJAK & CAPAIAN (Visual Track Record & Real Evidence)
          ════════════════════════════════════════════════════════════════ */}
      <Slide
        nav="03. Jejak Capaian"
        notes="Tekankan bahwa KafeKoding berfokus pada hasil nyata: lulusan dan mentor terbukti berprestasi di tingkat nasional, lolos kompetisi cyber security, dan mendapatkan kontrak kerja sebelum wisuda."
      >
        <div style={{ textAlign: 'left', width: '100%', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
          {/* Header Row */}
          <Reveal>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: 16,
                borderBottom: '1px solid var(--hair)',
                paddingBottom: 'clamp(14px, 2.2vh, 20px)',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--fg-faint)',
                    fontWeight: 600,
                  }}
                >
                  BUKTI NYATA & CAPAIAN
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-head)',
                    fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
                    fontWeight: 700,
                    margin: '6px 0 0 0',
                    letterSpacing: '-0.03em',
                    color: 'var(--fg)',
                  }}
                >
                  Jejak yang Sudah Kami Buat
                </h2>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--primary)',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                }}
              >
                Bukan Sekadar Teori
              </span>
            </div>
          </Reveal>

          {/* 3 Visual Track Record Milestones */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(270px, 100%), 1fr))',
              gap: 'clamp(20px, 3.5vw, 40px)',
              margin: 'clamp(20px, 3.5vh, 36px) 0 0 0',
              alignItems: 'start',
            }}
          >
            {[
              {
                track: '01 / KOMPETISI NASIONAL',
                title: 'Juara II Hackathon Nasional 2023',
                highlight: 'Politeknik Negeri Padang (PNP)',
                detail: 'Tim KafeKoding (Akmal, Citra, Azhari) berhasil meraih Juara 2 dalam kompetisi solusi digital tingkat nasional.',
                img: '/prestasi/juara-hackathon-2023.webp',
                amount: null,
              },
              {
                track: '02 / CYBER SECURITY',
                title: 'SEVIMA Security Challenge 2026',
                highlight: 'Best Writeup',
                amount: 'Rp 26.500.000',
                detail: 'Raihan penghargaan Best Writeup pada ajang kompetisi keamanan siber nasional SEVIMA Security Challenge 2026.',
                img: '/prestasi/sevima-security-challenge.webp',
              },
              {
                track: '03 / INDUSTRI & KARIR',
                title: 'Rekrutmen Sebelum Lulus',
                highlight: 'Universitas Metamedia',
                detail: 'Alif Budiman & Reyhan Dwi Syaputra telah mengantongi kontrak kerja software engineer saat masih berstatus mahasiswa aktif.',
                img: '/prestasi/kontrak-kerja-alif-reyhan.webp',
                amount: null,
              },
            ].map((milestone, idx) => (
              <Reveal key={milestone.title} delay={0.06 * (idx + 1)}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {/* Evidence Photo Container */}
                  <div
                    style={{
                      width: '100%',
                      borderRadius: 'var(--radius)',
                      overflow: 'hidden',
                      border: '1px solid var(--hair)',
                      boxShadow: '0 4px 18px rgba(0, 0, 0, 0.04)',
                      background: '#090d16',
                    }}
                  >
                    <div style={{ position: 'relative', width: '100%', paddingTop: '68%' }}>
                      <img
                        src={milestone.img}
                        alt={milestone.title}
                        loading="lazy"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    </div>
                  </div>

                  {/* Typography & Content Block */}
                  <div>
                    {/* Track Indicator */}
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        color: 'var(--primary)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginBottom: 4,
                      }}
                    >
                      {milestone.track}
                    </div>

                    {/* Milestone Title */}
                    <h3
                      style={{
                        fontFamily: 'var(--font-head)',
                        fontSize: 'clamp(1.08rem, 1.35vw, 1.25rem)',
                        fontWeight: 700,
                        margin: '0 0 4px 0',
                        color: 'var(--fg)',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.3,
                      }}
                    >
                      {milestone.title}
                    </h3>

                    {/* Context & Documented Amount */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: 8,
                        flexWrap: 'wrap',
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        color: 'var(--fg)',
                        marginBottom: 6,
                      }}
                    >
                      <span>{milestone.highlight}</span>
                      {milestone.amount && (
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--primary)',
                            fontWeight: 700,
                            fontSize: '0.92rem',
                          }}
                        >
                          — {milestone.amount}
                        </span>
                      )}
                    </div>

                    {/* Secondary Explanatory Text */}
                    <p
                      style={{
                        margin: 0,
                        fontSize: '0.84rem',
                        lineHeight: 1.5,
                        color: 'var(--fg-muted)',
                      }}
                    >
                      {milestone.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════
          SLIDE 4 — STRUKTUR 15 PERTEMUAN (15-Session Learning Journey & Lab Evidence)
          ════════════════════════════════════════════════════════════════ */}
      <Slide
        nav="04. Struktur 15 Sesi"
        notes="Jelaskan 4 tahapan alur belajar selama 15 pertemuan tatap muka di lab bersama mentor pendamping."
      >
        <div style={{ textAlign: 'left', width: '100%', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
          {/* Header Row */}
          <Reveal>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: 16,
                borderBottom: '1px solid var(--hair)',
                paddingBottom: 'clamp(14px, 2.2vh, 20px)',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--fg-faint)',
                    fontWeight: 600,
                  }}
                >
                  ALUR & METODOLOGI BELAJAR
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-head)',
                    fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
                    fontWeight: 700,
                    margin: '6px 0 0 0',
                    letterSpacing: '-0.03em',
                    color: 'var(--fg)',
                  }}
                >
                  Struktur 15 Sesi Pembelajaran
                </h2>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--primary)',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                }}
              >
                Tatap Muka & Mentoring di Lab
              </span>
            </div>
          </Reveal>

          {/* 2-Column Asymmetric Layout: 4 Phases on Left, Clean Photo on Right */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(360px, 100%), 1fr))',
              gap: 'clamp(24px, 4vw, 56px)',
              margin: 'clamp(20px, 3.5vh, 36px) 0 0 0',
              alignItems: 'center',
            }}
          >
            {/* Left Column: 4 Progressive Learning Phases */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(14px, 2vh, 20px)' }}>
              {[
                {
                  sesi: 'Sesi 01 - 04',
                  fase: 'Fondasi & Logika Dasar',
                  detail: 'Pengenalan lingkungan kerja, sintaks fundamental, dan logika algoritma terstruktur.',
                },
                {
                  sesi: 'Sesi 05 - 09',
                  fase: 'Praktek & Studi Kasus',
                  detail: 'Penerapan konsep pada kasus nyata, teknik debugging, dan pemecahan error bersama.',
                },
                {
                  sesi: 'Sesi 10 - 13',
                  fase: 'Integrasi & Pengolahan Data',
                  detail: 'Pengembangan fitur menyeluruh, integrasi database, dan optimasi performa kode.',
                },
                {
                  sesi: 'Sesi 14 - 15',
                  fase: 'Review & Ujian Kelayakan',
                  detail: 'Finalisasi tugas mandiri, review komprehensif, dan evaluasi kelayakan akhir.',
                },
              ].map((road, idx) => (
                <Reveal key={road.sesi} delay={0.05 * (idx + 1)}>
                  <div style={{ borderLeft: '2px solid var(--primary)', paddingLeft: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          color: 'var(--primary)',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {road.sesi}
                      </span>
                      <span style={{ color: 'var(--hair)' }}>·</span>
                      <h3
                        style={{
                          fontFamily: 'var(--font-head)',
                          fontSize: 'clamp(1.05rem, 1.3vw, 1.2rem)',
                          fontWeight: 700,
                          margin: 0,
                          color: 'var(--fg)',
                          letterSpacing: '-0.015em',
                        }}
                      >
                        {road.fase}
                      </h3>
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: '0.86rem',
                        lineHeight: 1.5,
                        color: 'var(--fg-muted)',
                      }}
                    >
                      {road.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Right Column: Clean Rectangular Classroom Lab Photo Block */}
            <Reveal delay={0.2}>
              <div
                style={{
                  width: '100%',
                  borderRadius: 'var(--radius)',
                  overflow: 'hidden',
                  border: '1px solid var(--hair)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
                  background: 'var(--surface-1)',
                }}
              >
                <div style={{ position: 'relative', width: '100%', paddingTop: '66%', background: '#090d16' }}>
                  <img
                    src="/prestasi/suasana-kelas.webp"
                    alt="Suasana Belajar dan Mentoring Kelas KafeKoding"
                    loading="lazy"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
                <div
                  style={{
                    padding: '12px 18px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid var(--hair)',
                  }}
                >
                  <div>
                    <div style={{ fontFamily: 'var(--font-head)', fontSize: '0.92rem', fontWeight: 700, color: 'var(--fg)' }}>
                      Pembelajaran Tatap Muka di Lab
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--fg-muted)', marginTop: 1 }}>
                      Didampingi 1 - 2 mentor praktisi di setiap pertemuan
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      color: 'var(--primary)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    15 SESI LAB
                  </span>
                </div>
              </div>
            </Reveal>
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
                src="/kk.webp"
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
