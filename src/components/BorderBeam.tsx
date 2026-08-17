"use client";

import React from "react";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export function BorderBeam({
  className = "",
  size = 250,
  duration = 8,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#c084fc",
  colorTo = "#9333ea",
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--anchor": anchor,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className={`pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] ${className}`}
    >
      <div
        className="absolute aspect-square w-full"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: `radial-gradient(circle at center, ${colorFrom}, ${colorTo}, transparent 70%)`,
          offsetPath: `rect(0 auto auto 0 round calc(1.5rem))`,
          animation: `borderBeam ${duration}s linear infinite`,
          animationDelay: `-${delay}s`,
        }}
      />
    </div>
  );
}
