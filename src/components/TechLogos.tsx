"use client";

import React, { useState } from "react";

interface LogoProps {
  className?: string;
  alt?: string;
}

// Helper wrapper that loads official CDN vector image with inline SVG fallback
function RealLogoImage({
  src,
  alt,
  className = "w-8 h-8",
  fallback,
}: {
  src: string;
  alt: string;
  className?: string;
  fallback: React.ReactNode;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return <>{fallback}</>;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`object-contain ${className}`}
      loading="lazy"
      onError={() => setError(true)}
    />
  );
}

export function PythonLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <RealLogoImage
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
      alt="Python"
      className={className}
      fallback={
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M11.914 2C8.36 2 8.583 3.541 8.583 3.541l.004 1.597h3.385v.478H5.16S2 5.26 2 8.847c0 3.588 1.777 3.488 1.777 3.488h1.06v-1.493s-.058-1.787 1.76-1.787h3.045V7.994s.04-1.285 1.306-1.285c1.266 0 2.158 0 2.158 0s1.173.04 1.173-1.134V3.54S14.856 2 11.914 2zm-1.83 1.084a.65.65 0 110 1.3.65.65 0 010-1.3z"
            fill="#3776AB"
          />
          <path
            d="M12.086 22c3.554 0 3.33-1.541 3.33-1.541l-.004-1.597h-3.385v-.478h6.812s3.16.356 3.16-3.23c0-3.589-1.777-3.489-1.777-3.489h-1.06v1.493s.058 1.787-1.76 1.787h-3.045v1.061s-.04 1.285-1.306 1.285c-1.266 0-2.158 0-2.158 0s-1.173-.04-1.173 1.134v2.036s-.365 1.54 2.576 1.54zm1.83-1.084a.65.65 0 110-1.3.65.65 0 010 1.3z"
            fill="#FFD43B"
          />
        </svg>
      }
    />
  );
}

export function PowerBILogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <RealLogoImage
      src="https://raw.githubusercontent.com/microsoft/PowerBI-Icons/main/SVG/Power-BI.svg"
      alt="Power BI"
      className={className}
      fallback={
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="2" y="11" width="4.5" height="10" rx="1.5" fill="#E6AD10" />
          <rect x="9.5" y="6" width="4.5" height="15" rx="1.5" fill="#F2C811" />
          <rect x="17" y="2" width="4.5" height="19" rx="1.5" fill="#F9E053" />
        </svg>
      }
    />
  );
}

export function ExcelLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <RealLogoImage
      src="https://cdn.simpleicons.org/microsoftexcel/107C41"
      alt="Microsoft Excel"
      className={className}
      fallback={
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M21 4.5A1.5 1.5 0 0019.5 3H10l-8 3.5v11l8 3.5h9.5a1.5 1.5 0 001.5-1.5v-15z"
            fill="#107C41"
          />
          <path d="M10 3v18l10-1.8V4.8L10 3z" fill="#185C37" opacity="0.6" />
          <path
            d="M5.5 8.5l2.2 3.5-2.2 3.5h1.6l1.4-2.4 1.4 2.4h1.6L9.3 12l2.2-3.5H9.9L8.5 10.9 7.1 8.5H5.5z"
            fill="#ffffff"
          />
        </svg>
      }
    />
  );
}

export function PostgreSQLLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <RealLogoImage
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
      alt="PostgreSQL"
      className={className}
      fallback={
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            fill="#336791"
          />
        </svg>
      }
    />
  );
}

export function MySQLLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <RealLogoImage
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
      alt="MySQL"
      className={className}
      fallback={
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
            fill="#00758F"
          />
        </svg>
      }
    />
  );
}

export function PandasLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <RealLogoImage
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
      alt="Pandas"
      className={className}
      fallback={
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="4" y="3" width="4" height="18" rx="1" fill="#150458" />
          <rect x="10" y="7" width="4" height="14" rx="1" fill="#FF4A00" />
          <rect x="16" y="11" width="4" height="10" rx="1" fill="#E70488" />
        </svg>
      }
    />
  );
}

export function NumPyLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <RealLogoImage
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"
      alt="NumPy"
      className={className}
      fallback={
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M4 4h4.5l7 11V4H20v16h-4.5l-7-11v11H4V4z" fill="#013243" />
        </svg>
      }
    />
  );
}

export function MatplotlibLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <RealLogoImage
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg"
      alt="Matplotlib"
      className={className}
      fallback={
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#11557c" />
        </svg>
      }
    />
  );
}

export function DjangoLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <RealLogoImage
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
      alt="Django"
      className={className}
      fallback={
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#092E20" />
        </svg>
      }
    />
  );
}

export function GitLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <RealLogoImage
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
      alt="Git"
      className={className}
      fallback={
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M21.62 10.97L13.03 2.38a2.03 2.03 0 00-2.88 0L8.2 4.33l3.65 3.65a2.41 2.41 0 013.05 3.05l3.51 3.51a2.4 2.4 0 11-1.44 1.44l-3.32-3.32v4.88a2.41 2.41 0 11-2.03 0V12.4a2.4 2.4 0 01-1.3-3.15L6.68 5.61 2.38 9.91a2.03 2.03 0 000 2.88l8.59 8.59a2.03 2.03 0 002.88 0l7.77-7.77a2.03 2.03 0 000-2.64z"
            fill="#F05032"
          />
        </svg>
      }
    />
  );
}

export function GitHubLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <RealLogoImage
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
      alt="GitHub"
      className={className}
      fallback={
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      }
    />
  );
}

export function PowerQueryLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <RealLogoImage
      src="https://raw.githubusercontent.com/microsoft/PowerBI-Icons/main/SVG/Power-BI.svg"
      alt="Power Query"
      className={className}
      fallback={
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="20" height="18" rx="4" fill="#20744A" />
          <path
            d="M7 8h10M7 12h10M7 16h6"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      }
    />
  );
}

export function DaxLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <RealLogoImage
      src="https://cdn.simpleicons.org/powerbi/F2C811"
      alt="DAX"
      className={className}
      fallback={
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#7E22CE" />
          <path
            d="M6 7h3.5a5 5 0 010 10H6V7zm3.3 7.8c1.6 0 2.7-1.1 2.7-2.8s-1.1-2.8-2.7-2.8H8.2v5.6h1.1z"
            fill="#ffffff"
          />
        </svg>
      }
    />
  );
}

export function TableauLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <RealLogoImage
      src="https://cdn.simpleicons.org/tableau/E97627"
      alt="Tableau"
      className={className}
      fallback={
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M11 2h2v4h-2V2z" fill="#E8762D" />
          <path d="M11 18h2v4h-2v-4z" fill="#E8762D" />
          <path d="M2 11h4v2H2v-2z" fill="#2B5B84" />
          <path d="M18 11h4v2h-4v-2z" fill="#2B5B84" />
          <path d="M10 6h4v12h-4V6z" fill="#E8443A" />
          <path d="M6 10h12v4H6v-4z" fill="#E8443A" />
        </svg>
      }
    />
  );
}

export function HTMLLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <RealLogoImage
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
      alt="HTML5"
      className={className}
      fallback={
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M3 2l1.65 18.55L12 23l7.35-2.45L21 2H3zm14.8 5.7H8.7l.2 2.3h8.7l-.7 7.4-4.7 1.3-4.7-1.3-.3-3.6h2.2l.2 1.8 2.6.7 2.6-.7.3-3.2H6.3L5.6 5.5h12.5l-.3 2.2z"
            fill="#E34F26"
          />
        </svg>
      }
    />
  );
}

export function CSSLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <RealLogoImage
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
      alt="CSS3"
      className={className}
      fallback={
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M3 2l1.65 18.55L12 23l7.35-2.45L21 2H3zm14.8 5.7H8.7l.2 2.3h8.7l-.7 7.4-4.7 1.3-4.7-1.3-.3-3.6h2.2l.2 1.8 2.6.7 2.6-.7.3-3.2H6.3L5.6 5.5h12.5l-.3 2.2z"
            fill="#1572B6"
          />
        </svg>
      }
    />
  );
}
