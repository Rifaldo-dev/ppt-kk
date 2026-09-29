import React from 'react';
import Deck from './deck/Deck';
import Slide from './deck/Slide';
import Reveal from './deck/Reveal';
import Build from './deck/Build';

export default function App() {
  return (
    <Deck>
      {/* ════════════════════════════════════════════════════════════════
          SLIDE 1 — OPENING (Art-Directed Editorial Cover)
          ════════════════════════════════════════════════════════════════ */}
      <Slide
        nav="01. Pembukaan"
        notes="Selamat datang seluruh peserta! Buka sesi dengan menyapa peserta, memperkenalkan komunitas KafeKoding, dan latar belakang pembukaan kelas diskusi 2026 ini."
      >
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
          {/* Header Bar: Prominent Logo + Topic Metadata */}
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24 }}>
              <div>
                <img
                  src="/kk.png"
                  alt="Logo KafeKoding"
                  style={{
                    width: 'clamp(84px, 9vw, 108px)',
                    height: 'clamp(84px, 9vw, 108px)',
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
                  paddingTop: 8,
                }}
              >
                KOMUNITAS KAFEKODING · PEMBUKAAN 2026
              </div>
            </div>
          </Reveal>

          {/* Single Subtle Editorial Rule */}
          <div style={{ width: '100%', height: 1, background: 'var(--hair)', margin: 'clamp(20px, 3vh, 32px) 0' }} />

          {/* Main Headline & Description */}
          <div style={{ maxWidth: 840, textAlign: 'left', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Reveal delay={0.06}>
              <h1
                style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: 'clamp(2.4rem, 5.2vw, 4.4rem)',
                  fontWeight: 700,
                  lineHeight: 1.06,
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
                  fontSize: 'clamp(2rem, 4.2vw, 3.6rem)',
                  fontWeight: 600,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  color: 'var(--primary)',
                  marginBottom: 'clamp(18px, 2.5vh, 28px)',
                }}
              >
                Bersama
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(1.05rem, 1.6vw, 1.3rem)',
                  lineHeight: 1.6,
                  color: 'var(--fg-muted)',
                  maxWidth: '38ch',
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
                paddingTop: 'clamp(16px, 2.5vh, 24px)',
                marginTop: 'clamp(20px, 3vh, 32px)',
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
              <span style={{ fontWeight: 500, color: 'var(--fg-muted)' }}>www.kafekoding.com</span>
              <span>@kafekoding</span>
              <span style={{ fontWeight: 500 }}>Periode 2026</span>
            </div>
          </Reveal>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════
          SLIDE 2 — AGENDA (Editorial Numbered Framework)
          ════════════════════════════════════════════════════════════════ */}
      <Slide
        nav="02. Agenda"
        notes="Sampaikan 4 topik utama pembahasan pada pertemuan hari ini. Navigasi nomor memandu alur presentasi secara runtut."
      >
        <div style={{ textAlign: 'left', width: '100%' }}>
          {/* Header Row */}
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--hair)', paddingBottom: 16, marginBottom: 'clamp(28px, 4vh, 48px)' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-faint)' }}>
                  PANDUAN SESI
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 700, margin: '4px 0 0 0', letterSpacing: '-0.025em' }}>
                  Agenda Pembahasan Hari Ini
                </h2>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600 }}>
                4 Topik Bahasan
              </span>
            </div>
          </Reveal>

          {/* 4-Item Editorial List */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(440px, 100%), 1fr))', gap: 'clamp(20px, 3vh, 36px) 48px' }}>
            {[
              {
                num: '01',
                title: 'KafeKoding Ngapain Aja?',
                desc: 'Visi pembentukan, kultur diskusi, serta 4 pilar aktivitas utama komunitas.',
              },
              {
                num: '02',
                title: 'Mekanisme & Format Kelas',
                desc: 'Penjelasan struktur 15 pertemuan, pembagian materi domain, dan penugasan mingguan.',
              },
              {
                num: '03',
                title: 'Syarat & Benefit Kelulusan',
                desc: 'Ketentuan presensi minimal, ujian kelayakan, sertifikat resmi, dan akses jaringan alumni.',
              },
              {
                num: '04',
                title: 'Sesi Tanya Jawab (Q&A)',
                desc: 'Ruang interaktif untuk peserta bertanya langsung maupun melalui platform diskusi daring.',
              },
            ].map((item, idx) => (
              <Reveal key={item.num} delay={0.06 * (idx + 1)}>
                <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--primary)',
                      lineHeight: 1.2,
                    }}
                  >
                    {item.num}
                  </span>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 600, margin: '0 0 6px 0', letterSpacing: '-0.015em' }}>
                      {item.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.96rem', lineHeight: 1.5, color: 'var(--fg-muted)' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════
          SLIDE 3 — INTRODUCTION (Split Editorial Profile)
          ════════════════════════════════════════════════════════════════ */}
      <Slide
        nav="03. Profil"
        notes="Jelaskan secara singkat apa itu KafeKoding: sejarah inisiatif sejak 2013 hingga menjadi wadah belajar terbuka saat ini."
      >
        <div style={{ textAlign: 'left', width: '100%' }}>
          <Reveal>
            <div style={{ borderBottom: '1px solid var(--hair)', paddingBottom: 16, marginBottom: 'clamp(28px, 4vh, 44px)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-faint)' }}>
                TENTANG KAFEKODING
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 700, margin: '4px 0 0 0', letterSpacing: '-0.025em' }}>
                Apa yang Kami Kerjakan?
              </h2>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: 'clamp(24px, 4vw, 56px)' }}>
            {/* Left Column: Core Narrative */}
            <Reveal delay={0.08}>
              <div>
                <p style={{ fontSize: 'clamp(1.1rem, 1.6vw, 1.25rem)', lineHeight: 1.6, color: 'var(--fg)', margin: '0 0 16px 0', fontWeight: 500 }}>
                  KafeKoding adalah komunitas belajar dan berbagi teknologi independen yang berakar dari semangat kolaborasi nyata sejak tahun 2013.
                </p>
                <p style={{ fontSize: '0.98rem', lineHeight: 1.65, color: 'var(--fg-muted)', margin: 0 }}>
                  Kami menyediakan ruang aman dan terarah bagi mahasiswa, praktisi pemula, maupun pengembang mandiri untuk mengasah keahlian pemrograman melalui mentoring sejawat tanpa sekat formalitas.
                </p>
              </div>
            </Reveal>

            {/* Right Column: 3 Core Principles */}
            <Reveal delay={0.16}>
              <div style={{ borderLeft: '2px solid var(--primary)', paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <h4 style={{ fontSize: '1.08rem', fontWeight: 600, margin: '0 0 4px 0' }}>Ruang Belajar Terbuka</h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--fg-muted)', margin: 0 }}>
                    Inklusif bagi siapa pun yang memiliki kemauan kuat untuk belajar tanpa memandang latar belakang akademis.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.08rem', fontWeight: 600, margin: '0 0 4px 0' }}>Fokus Praktek & Logika</h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--fg-muted)', margin: 0 }}>
                    Pendekatan belajar ditekankan pada pemahaman algoritma, penulisan kode mandiri, dan pembedahan studi kasus nyata.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.08rem', fontWeight: 600, margin: '0 0 4px 0' }}>Ekosistem Bertumbuh</h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--fg-muted)', margin: 0 }}>
                    Alumni kelas berkesempatan kembali menjadi mentor, pengurus, atau kontributor dalam proyek riset teknologi.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════
          SLIDE 4 — 4 PILAR AKTIVITAS (Connected Framework)
          ════════════════════════════════════════════════════════════════ */}
      <Slide
        nav="04. 4 Pilar"
        notes="Jelaskan 4 pilar aktivitas. Berikan penekanan bahwa peserta saat ini sedang berada pada pilar 'Belajar Bersama'."
      >
        <div style={{ textAlign: 'left', width: '100%' }}>
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--hair)', paddingBottom: 16, marginBottom: 'clamp(24px, 3.5vh, 40px)' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-faint)' }}>
                  EKOSISTEM KOMUNITAS
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 700, margin: '4px 0 0 0', letterSpacing: '-0.025em' }}>
                  4 Pilar Aktivitas KafeKoding
                </h2>
              </div>
            </div>
          </Reveal>

          {/* 4-Column Grid with Distinct Hairline Borders */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))', gap: 24 }}>
            {[
              {
                num: '01',
                tag: 'Kamu di Sini',
                title: 'Belajar Bersama',
                desc: 'Saling berbagi pemahaman penggunaan teknologi ke sesama anggota dan peserta kelas secara terarah dan aplikatif.',
                highlight: true,
              },
              {
                num: '02',
                tag: 'Forum Terbuka',
                title: 'Diskusi Teknologi',
                desc: 'Ruang diskusi multi-bidang dari problem tugas perkuliahan, tantangan industri, hingga tren rekayasa perangkat lunak.',
                highlight: false,
              },
              {
                num: '03',
                tag: 'Kompetisi',
                title: 'Terlibat Event',
                desc: 'Menguji batas kemampuan dengan mengikuti hackathon, workshop, dan lomba teknologi yang diadakan pihak luar.',
                highlight: false,
              },
              {
                num: '04',
                tag: 'Kolaborasi',
                title: 'Eksplorasi Projek',
                desc: 'Melatih kerja tim dalam pembuatan software nyata melalui pembentukan squad kecil yang terkoordinasi.',
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
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 600, margin: '0 0 8px 0', letterSpacing: '-0.015em' }}>
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
          SLIDE 5 — COMMUNITY STATEMENT (Typographic Statement)
          ════════════════════════════════════════════════════════════════ */}
      <Slide
        nav="05. Kultur"
        notes="Sampaikan kultur dasar komunitas: tidak ada pertanyaan yang dianggap remeh. Diskusi adalah jalan utama memahami teknologi."
      >
        <div style={{ maxWidth: 880, textAlign: 'left', width: '100%' }}>
          <Reveal>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 600 }}>
              KULTUR & NILAI KOMUNITAS
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2
              style={{
                fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
                fontWeight: 700,
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                color: 'var(--fg)',
                margin: '16px 0 24px 0',
              }}
            >
              "Ya.. Kami Berdiskusi!"
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p
              style={{
                fontSize: 'clamp(1.1rem, 1.7vw, 1.35rem)',
                lineHeight: 1.6,
                color: 'var(--fg-muted)',
                margin: '0 0 32px 0',
                maxWidth: '42ch',
              }}
            >
              Kami percaya bahwa pemahaman terbaik tidak lahir dari instruksi searah, melainkan dari keberanian bertanya, membedah kode bersama, dan saling mendukung saat menghadapi error.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid var(--hair)', paddingTop: 18 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', fontWeight: 600, color: 'var(--fg)' }}>
                Komunitas KafeKoding
              </span>
              <span style={{ color: 'var(--fg-faint)' }}>·</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--fg-faint)' }}>
                Kultur Belajar Sejak 2013
              </span>
            </div>
          </Reveal>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════
          SLIDE 6 — MECHANISM (Horizontal Process Progression)
          ════════════════════════════════════════════════════════════════ */}
      <Slide
        nav="06. Mekanisme"
        notes="Jelaskan alur tahapan pelaksanaan kelas 2026 dari awal orientasi sampai evaluasi kelayakan akhir."
      >
        <div style={{ textAlign: 'left', width: '100%' }}>
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--hair)', paddingBottom: 16, marginBottom: 'clamp(28px, 4vh, 44px)' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-faint)' }}>
                  ALUR PEMBELAJARAN
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 700, margin: '4px 0 0 0', letterSpacing: '-0.025em' }}>
                  Mekanisme Kelas 2026
                </h2>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', color: 'var(--fg-faint)' }}>
                4 Tahapan Utama
              </span>
            </div>
          </Reveal>

          {/* Process Progression */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: 24 }}>
            {[
              {
                step: '01',
                title: 'Orientasi Kelas',
                desc: 'Sesi pembukaan, pengenalan silabus materi, dan pembagian grup pendampingan.',
              },
              {
                step: '02',
                title: '15 Pertemuan Materi',
                desc: 'Pembelajaran terstruktur di kelas bersama 1 - 2 mentor pendamping berpengalaman.',
              },
              {
                step: '03',
                title: 'Penugasan Berkala',
                desc: 'Latihan mandiri mingguan sebagai bahan evaluasi pemahaman topik.',
              },
              {
                step: '04',
                title: 'Ujian Kelayakan',
                desc: 'Uji kompetensi akhir untuk menentukan kelayakan kelulusan peserta.',
              },
            ].map((fase, idx) => (
              <Reveal key={fase.step} delay={0.06 * (idx + 1)}>
                <div style={{ borderTop: '2px solid var(--fg)', paddingTop: 16 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)' }}>
                    FASE {fase.step}
                  </span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 600, margin: '8px 0 6px 0', letterSpacing: '-0.015em' }}>
                    {fase.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: 1.5, color: 'var(--fg-muted)' }}>
                    {fase.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════
          SLIDE 7 — CURRICULUM (Structured Domain Learning Map)
          ════════════════════════════════════════════════════════════════ */}
      <Slide
        nav="07. Domain Materi"
        notes="Perkenalkan 4 domain materi teknologi yang disediakan. Jelaskan keterkaitan kompetensi yang dibangun pada masing-masing bidang."
      >
        <div style={{ textAlign: 'left', width: '100%' }}>
          <Reveal>
            <div style={{ borderBottom: '1px solid var(--hair)', paddingBottom: 16, marginBottom: 'clamp(24px, 3.5vh, 36px)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-faint)' }}>
                KURIKULUM PEMBELAJARAN
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 700, margin: '4px 0 0 0', letterSpacing: '-0.025em' }}>
                Materi yang Dipelajari
              </h2>
            </div>
          </Reveal>

          {/* Structured 4-Domain Learning Matrix */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: 20 }}>
            {[
              {
                domain: 'Web Development',
                focus: 'Frontend & Backend Modern',
                stack: ['HTML5 & CSS3 Fundamental', 'Modern JavaScript (ES6+)', 'PHP Dasar hingga Lanjutan', 'Laravel Framework'],
              },
              {
                domain: 'Mobile Application',
                focus: 'Native Mobile Engineering',
                stack: ['Android Studio & SDK', 'Arsitektur Komponen Mobile', 'Lifecycle & State Management', 'Koneksi REST API'],
              },
              {
                domain: 'Python & Data',
                focus: 'Logic & Database Modeling',
                stack: ['Sintaks & Struktur Data Python', 'Logika Algoritma Terapan', 'Relational Database (MySQL)', 'Manipulasi Query & CRUD'],
              },
              {
                domain: 'UI/UX & Desain',
                focus: 'Interface & User Experience',
                stack: ['Prinsip Desain Antarmuka', 'Wireframing & Typography', 'Prototyping Interaktif di Figma', 'Pengujian Usability'],
              },
            ].map((item, idx) => (
              <Reveal key={item.domain} delay={0.06 * (idx + 1)}>
                <div style={{ border: '1px solid var(--hair)', padding: 20, borderRadius: 'var(--radius)', background: 'var(--surface-2)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {item.focus}
                  </span>
                  <h3 style={{ fontSize: '1.18rem', fontWeight: 700, margin: '6px 0 14px 0', letterSpacing: '-0.015em' }}>
                    {item.domain}
                  </h3>
                  <ul style={{ margin: 0, paddingLeft: 16, fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--fg-muted)' }}>
                    {item.stack.map((stk, sIdx) => (
                      <li key={sIdx} style={{ marginBottom: 4 }}>{stk}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════
          SLIDE 8 — 3 COMPONENTS (Structural Triad Progression)
          ════════════════════════════════════════════════════════════════ */}
      <Slide
        nav="08. Komponen"
        notes="Jabarkan 3 komponen utama kelas: pertemuan materi, tugas mingguan, dan ujian kelayakan di akhir."
      >
        <div style={{ textAlign: 'left', width: '100%' }}>
          <Reveal>
            <div style={{ borderBottom: '1px solid var(--hair)', paddingBottom: 16, marginBottom: 'clamp(28px, 4vh, 48px)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-faint)' }}>
                METODOLOGI KELAS
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 700, margin: '4px 0 0 0', letterSpacing: '-0.025em' }}>
                3 Komponen Utama Kelas
              </h2>
            </div>
          </Reveal>

          {/* Triad Column Progression */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 'clamp(24px, 4vw, 44px)' }}>
            {[
              {
                num: '01',
                title: 'Materi 15 Pertemuan',
                lead: 'Pondasi Teori & Praktek di Kelas',
                desc: 'Dilaksanakan berkala dan didampingi secara langsung oleh 1 - 2 mentor untuk memastikan setiap materi terserap dengan baik.',
              },
              {
                num: '02',
                title: 'Tugas Mingguan',
                lead: 'Penguatan Logika Mandiri',
                desc: 'Latihan mingguan yang dirancang untuk menguji pemahaman konsep dan membiasakan peserta memecahkan error secara mandiri.',
              },
              {
                num: '03',
                title: 'Ujian Kelayakan',
                lead: 'Tolok Ukur Standar Kelulusan',
                desc: 'Tahap pengujian akhir yang mengevaluasi penguasaan materi secara menyeluruh sebagai prasyarat kelulusan resmi.',
              },
            ].map((komp, idx) => (
              <Reveal key={komp.num} delay={0.08 * (idx + 1)}>
                <div style={{ borderLeft: '2px solid var(--hair)', paddingLeft: 20 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>
                    {komp.num}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '10px 0 4px 0', letterSpacing: '-0.015em' }}>
                    {komp.title}
                  </h3>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--fg-faint)', marginBottom: 8 }}>
                    {komp.lead}
                  </div>
                  <p style={{ margin: 0, fontSize: '0.94rem', lineHeight: 1.55, color: 'var(--fg-muted)' }}>
                    {komp.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════
          SLIDE 9 — REQUIREMENTS (Structured Compact Checklist)
          ════════════════════════════════════════════════════════════════ */}
      <Slide
        nav="09. Syarat Kelulusan"
        notes="Jelaskan 6 syarat penyelesaian kelas secara transparan. Semua peserta wajib memenuhi kriteria ini untuk dinyatakan lulus."
      >
        <div style={{ textAlign: 'left', width: '100%' }}>
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--hair)', paddingBottom: 16, marginBottom: 'clamp(24px, 3.5vh, 36px)' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-faint)' }}>
                  KETENTUAN KELULUSAN
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
          SLIDE 10 — 15 MEETINGS ROADMAP (Structured Curriculum Schedule)
          ════════════════════════════════════════════════════════════════ */}
      <Slide
        nav="10. Tahapan 15 Sesi"
        notes="Jelaskan tahapan yang akan dilalui peserta selama 15 pertemuan. Tunjukkan bahwa materi dirancang berjenjang dari dasar ke evaluasi akhir."
      >
        <div style={{ textAlign: 'left', width: '100%' }}>
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--hair)', paddingBottom: 16, marginBottom: 'clamp(24px, 3.5vh, 40px)' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-faint)' }}>
                  PETA PERJALANAN BELAJAR
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 700, margin: '4px 0 0 0', letterSpacing: '-0.025em' }}>
                  Struktur 15 Pertemuan
                </h2>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600 }}>
                15 Sesi Terarah
              </span>
            </div>
          </Reveal>

          {/* 4 Roadmap Blocks */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))', gap: 20 }}>
            {[
              {
                sesi: 'Sesi 01 - 04',
                fase: 'Fondasi & Logika',
                detail: 'Pengenalan lingkungan kerja, pemahaman sintaks dasar, dan logika pemrograman terstruktur.',
              },
              {
                sesi: 'Sesi 05 - 09',
                fase: 'Praktek & Studi Kasus',
                detail: 'Penerapan konsep pada studi kasus terarah, penanganan error, dan latihan logika lanjutan.',
              },
              {
                sesi: 'Sesi 10 - 13',
                fase: 'Integrasi & Data',
                detail: 'Pengembangan fitur menyeluruh, integrasi database, penanganan state, dan optimasi kode.',
              },
              {
                sesi: 'Sesi 14 - 15',
                fase: 'Review & Ujian Kelayakan',
                detail: 'Finalisasi tugas mandiri, review komprehensif, dan pelaksanaan ujian kelayakan akhir.',
              },
            ].map((road, idx) => (
              <Reveal key={road.sesi} delay={0.06 * (idx + 1)}>
                <div style={{ border: '1px solid var(--hair)', padding: 18, borderRadius: 'var(--radius)', background: 'var(--surface-2)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary)', marginBottom: 4 }}>
                    {road.sesi}
                  </div>
                  <h3 style={{ fontSize: '1.12rem', fontWeight: 700, margin: '0 0 8px 0', letterSpacing: '-0.015em' }}>
                    {road.fase}
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.5, color: 'var(--fg-muted)' }}>
                    {road.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════
          SLIDE 11 — OUTCOME (3 Value Pillars)
          ════════════════════════════════════════════════════════════════ */}
      <Slide
        nav="11. Nilai Tambah"
        notes="Tekankan 3 nilai tambah nyata yang didapatkan oleh peserta yang menuntaskan program kelas."
      >
        <div style={{ textAlign: 'left', width: '100%' }}>
          <Reveal>
            <div style={{ borderBottom: '1px solid var(--hair)', paddingBottom: 16, marginBottom: 'clamp(28px, 4vh, 48px)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-faint)' }}>
                MANFAAT & CAPAIAN
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 700, margin: '4px 0 0 0', letterSpacing: '-0.025em' }}>
                Apa yang Kamu Dapatkan?
              </h2>
            </div>
          </Reveal>

          {/* 3 Outcome Columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 'clamp(24px, 4vw, 48px)' }}>
            {[
              {
                num: '01',
                title: 'Ilmu Aplikatif',
                desc: 'Pemahaman fundamental pemrograman yang kokoh dan kebiasaan membedah masalah yang siap digunakan di perkuliahan maupun dunia kerja.',
              },
              {
                num: '02',
                title: 'Teman Diskusi',
                desc: 'Jejaring pertemanan dan rekan belajar suportif yang dapat diajak bertukar pikiran, membedah error, dan berkolaborasi jangka panjang.',
              },
              {
                num: '03',
                title: 'Sertifikat Kelulusan',
                desc: 'Bukti verifikasi resmi dari KafeKoding atas dedikasi dan kelayakan kelulusan peserta setelah menuntaskan seluruh syarat kelas.',
              },
            ].map((val, idx) => (
              <Reveal key={val.num} delay={0.08 * (idx + 1)}>
                <div style={{ borderTop: '2px solid var(--primary)', paddingTop: 18 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>
                    CAPAIAN {val.num}
                  </span>
                  <h3 style={{ fontSize: '1.28rem', fontWeight: 700, margin: '8px 0 8px 0', letterSpacing: '-0.015em' }}>
                    {val.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.94rem', lineHeight: 1.6, color: 'var(--fg-muted)' }}>
                    {val.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════
          SLIDE 12 — COMMUNITY PATHWAY (Journey Progression Map)
          ════════════════════════════════════════════════════════════════ */}
      <Slide
        nav="12. Jenjang Komunitas"
        notes="Jelaskan peluang pasca kelas: peserta yang lulus berkesempatan menjadi bagian dari tim pengembang, mentor, maupun kepengurusan KafeKoding."
      >
        <div style={{ textAlign: 'left', width: '100%' }}>
          <Reveal>
            <div style={{ borderBottom: '1px solid var(--hair)', paddingBottom: 16, marginBottom: 'clamp(28px, 4vh, 44px)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-faint)' }}>
                PELUANG BERLANJUT
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 700, margin: '4px 0 0 0', letterSpacing: '-0.025em' }}>
                Bergabung Menjadi Bagian dari KafeKoding
              </h2>
            </div>
          </Reveal>

          {/* Journey Flow Steps */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: 20 }}>
            {[
              {
                step: 'Langkah 1',
                role: 'Peserta Kelas',
                desc: 'Mengikuti 15 sesi pembelajaran, menyelesaikan tugas berkala, dan menempuh ujian kelayakan.',
              },
              {
                step: 'Langkah 2',
                role: 'Lulusan Terverifikasi',
                desc: 'Memperoleh sertifikat resmi dan fondasi pemahaman logika pemrograman yang matang.',
              },
              {
                step: 'Langkah 3',
                role: 'Anggota Komunitas',
                desc: 'Terhubung ke dalam ekosistem internal, forum diskusi aktif, dan sharing berkala alumni.',
              },
              {
                step: 'Langkah 4',
                role: 'Kontributor & Mentor',
                desc: 'Terlibat dalam Tim Pengembang (Dev Squad), Tim Media, atau menjadi Mentor periode berikutnya.',
              },
            ].map((path, idx) => (
              <Reveal key={path.step} delay={0.06 * (idx + 1)}>
                <div style={{ borderTop: '2px solid var(--hair)', paddingTop: 16 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary)', letterSpacing: '0.04em' }}>
                    {path.step.toUpperCase()}
                  </span>
                  <h3 style={{ fontSize: '1.18rem', fontWeight: 700, margin: '6px 0 6px 0', letterSpacing: '-0.015em' }}>
                    {path.role}
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.5, color: 'var(--fg-muted)' }}>
                    {path.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════
          SLIDE 13 — CLOSING & Q&A (Editorial Functional Closing)
          ════════════════════════════════════════════════════════════════ */}
      <Slide
        nav="13. Tanya Jawab"
        notes="Buka sesi tanya jawab interaktif dan berikan instruksi kepada peserta mengenai jadwal pertemuan pertama."
      >
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', textAlign: 'left' }}>
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
              <span style={{ fontWeight: 500, color: 'var(--fg-muted)' }}>www.kafekoding.com</span>
              <span>@kafekoding</span>
              <span style={{ fontWeight: 500 }}>Periode 2026</span>
            </div>
          </Reveal>
        </div>
      </Slide>
    </Deck>
  );
}
