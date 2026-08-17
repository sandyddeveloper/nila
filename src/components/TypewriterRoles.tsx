"use client";

import React, { useState, useEffect } from "react";

interface TypewriterRolesProps {
  roles?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

const DEFAULT_ROLES = [
  "Data Analyst",
  "Power BI & DAX Specialist",
  "SQL Data Wrangler",
  "Python Analytics Developer",
  "Quality Assurance Specialist",
];

export function TypewriterRoles({
  roles = DEFAULT_ROLES,
  typingSpeed = 80,
  deletingSpeed = 45,
  pauseDuration = 1800,
  className = "",
}: TypewriterRolesProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentFullText = roles[roleIndex];

    if (!isDeleting) {
      if (displayText.length < currentFullText.length) {
        // Typing characters
        timeout = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing word, pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        // Deleting characters
        timeout = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting word, move to next role
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayText}</span>
      <span className="inline-block w-[3px] h-[1em] ml-1 bg-purple-600 dark:bg-purple-400 animate-cursor-blink rounded-xs" />
    </span>
  );
}
