import { type ReactNode } from 'react';

interface AnimatedIconProps {
  name: string;
  className?: string;
}

export default function AnimatedIcon({ name, className = '' }: AnimatedIconProps) {
  const icons: Record<string, ReactNode> = {
    shield: (
      <svg viewBox="0 0 48 48" fill="none" className={`animated-icon icon-shield ${className}`}>
        <path
          d="M24 4L6 12v12c0 11.1 7.7 21.5 18 24 10.3-2.5 18-12.9 18-24V12L24 4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon-shield-path"
        />
        <path
          d="M17 24l5 5 9-9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon-shield-check"
        />
      </svg>
    ),
    clipboard: (
      <svg viewBox="0 0 48 48" fill="none" className={`animated-icon icon-clipboard ${className}`}>
        <rect x="10" y="8" width="28" height="34" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M18 8V6a2 2 0 012-2h8a2 2 0 012 2v2" stroke="currentColor" strokeWidth="2" />
        <line x1="16" y1="20" x2="32" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="icon-clipboard-line1" />
        <line x1="16" y1="27" x2="28" y2="27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="icon-clipboard-line2" />
        <line x1="16" y1="34" x2="24" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="icon-clipboard-line3" />
      </svg>
    ),
    bank: (
      <svg viewBox="0 0 48 48" fill="none" className={`animated-icon icon-bank ${className}`}>
        <path d="M6 20L24 8l18 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="10" y1="20" x2="10" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="icon-bank-col1" />
        <line x1="19" y1="20" x2="19" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="icon-bank-col2" />
        <line x1="29" y1="20" x2="29" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="icon-bank-col3" />
        <line x1="38" y1="20" x2="38" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="icon-bank-col4" />
        <line x1="6" y1="38" x2="42" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="4" y1="42" x2="44" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    lock: (
      <svg viewBox="0 0 48 48" fill="none" className={`animated-icon icon-lock ${className}`}>
        <rect x="12" y="22" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
        <path
          d="M16 22v-6a8 8 0 0116 0v6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="icon-lock-shackle"
        />
        <circle cx="24" cy="31" r="2" fill="currentColor" className="icon-lock-dot" />
        <line x1="24" y1="33" x2="24" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    alert: (
      <svg viewBox="0 0 48 48" fill="none" className={`animated-icon icon-alert ${className}`}>
        <path
          d="M24 6c-1.5 0-3 1-3 3v14l-4 6h14l-4-6V9c0-2-1.5-3-3-3z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="36" r="3" stroke="currentColor" strokeWidth="2" className="icon-alert-bell" />
        <path d="M10 18c0-2 1-4 2-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="icon-alert-wave1" />
        <path d="M38 18c0-2-1-4-2-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="icon-alert-wave2" />
      </svg>
    ),
    document: (
      <svg viewBox="0 0 48 48" fill="none" className={`animated-icon icon-document ${className}`}>
        <path
          d="M12 6h16l10 10v26a2 2 0 01-2 2H14a2 2 0 01-2-2V6z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M28 6v10h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="18" y1="24" x2="30" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="icon-doc-line1" />
        <line x1="18" y1="30" x2="30" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="icon-doc-line2" />
        <line x1="18" y1="36" x2="26" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="icon-doc-line3" />
      </svg>
    ),
    handshake: (
      <svg viewBox="0 0 48 48" fill="none" className={`animated-icon icon-handshake ${className}`}>
        <path
          d="M6 24h6l4-4 6 6 6-6 4 4h6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon-handshake-path"
        />
        <circle cx="12" cy="24" r="2" fill="currentColor" className="icon-handshake-dot1" />
        <circle cx="36" cy="24" r="2" fill="currentColor" className="icon-handshake-dot2" />
        <path d="M18 20v-4M30 20v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="icon-handshake-arrows" />
      </svg>
    ),
    refresh: (
      <svg viewBox="0 0 48 48" fill="none" className={`animated-icon icon-refresh ${className}`}>
        <path
          d="M36 24a12 12 0 01-20.5 8.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="icon-refresh-arc1"
        />
        <path
          d="M12 24a12 12 0 0120.5-8.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="icon-refresh-arc2"
        />
        <path d="M36 18v6h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 30v-6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  };

  return (
    <div className="w-12 h-12 text-gray-900">
      {icons[name] || icons.shield}
    </div>
  );
}
