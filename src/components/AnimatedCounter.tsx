"use client";

import React, { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  value?: string;
  target?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  target: explicitTarget,
  prefix: explicitPrefix,
  suffix: explicitSuffix,
  duration = 2000,
  decimals = 0,
  className = "",
}: AnimatedCounterProps) {
  // Parse string value if provided (e.g., "100%", "+28% YoY", "500K+", "15+")
  let parsedTarget = explicitTarget ?? 0;
  let parsedPrefix = explicitPrefix ?? "";
  let parsedSuffix = explicitSuffix ?? "";

  if (value && explicitTarget === undefined) {
    const match = value.match(/^([^\d.]*)(\d+(?:\.\d+)?)(.*)$/);
    if (match) {
      parsedPrefix = explicitPrefix ?? match[1];
      parsedTarget = parseFloat(match[2]);
      parsedSuffix = explicitSuffix ?? match[3];
    }
  }

  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();
          const startValue = 0;
          const endValue = parsedTarget;

          const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic formula for buttery smooth deceleration
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const current = startValue + (endValue - startValue) * easeOutProgress;

            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(endValue);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [parsedTarget, duration, hasAnimated]);

  const formattedNumber = decimals > 0
    ? count.toFixed(decimals)
    : Math.floor(count).toLocaleString();

  return (
    <span ref={elementRef} className={className}>
      {parsedPrefix}
      {hasAnimated ? formattedNumber : "0"}
      {parsedSuffix}
    </span>
  );
}
