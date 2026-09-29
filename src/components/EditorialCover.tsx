import React from 'react';
import Reveal from '../deck/Reveal';

interface EditorialCoverProps {
  nav?: string;
  notes?: string;
}

export default function EditorialCover({ nav = 'Cover', notes }: EditorialCoverProps) {
  return (
    <div className="slide" style={{ padding: 'var(--gutter-y) var(--gutter)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* ── TOP BAR: Large Brand Anchor (Left) & Metadata (Right) ── */}
      <Reveal>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 24,
            width: '100%',
          }}
        >
          {/* Logo KafeKoding: Prominent, authoritative, not a watermark or tiny badge */}
          <div style={{ flexShrink: 0 }}>
            <img
              src="/kk.png"
              alt="Logo KafeKoding"
              style={{
                width: 'clamp(80px, 9vw, 104px)',
                height: 'clamp(80px, 9vw, 104px)',
                display: 'block',
                borderRadius: '50%',
              }}
            />
          </div>

          {/* Category / Topic Header */}
          <div
            style={{
              textAlign: 'right',
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.75rem, 1.1vw, 0.9rem)',
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

      {/* ── ONE SUBTLE EDITORIAL DEVICE: Single architectural rule ── */}
      <div
        style={{
          width: '100%',
          height: '1px',
          background: 'var(--hair)',
          margin: 'clamp(20px, 3vh, 32px) 0 clamp(24px, 4vh, 40px) 0',
        }}
      />

      {/* ── MAIN EDITORIAL CONTENT: Asymmetric, Strong Grid ── */}
      <div style={{ maxWidth: 880, textAlign: 'left', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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

      {/* ── BOTTOM ROW: Restrained Metadata System ── */}
      <Reveal delay={0.24}>
        <div
          style={{
            borderTop: '1px solid var(--hair)',
            paddingTop: 'clamp(16px, 2.5vh, 24px)',
            marginTop: 'clamp(24px, 3.5vh, 36px)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.8rem, 1.1vw, 0.92rem)',
            color: 'var(--fg-faint)',
            letterSpacing: '0.02em',
          }}
        >
          <span style={{ fontWeight: 500, color: 'var(--fg-muted)' }}>www.kafekoding.com</span>
          <span>@kafekoding</span>
          <span style={{ fontWeight: 500 }}>Periode 2026</span>
        </div>
      </Reveal>
    </div>
  );
}
