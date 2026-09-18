"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Brand logo.
 * To use your own logo: save the file as `public/logo.png`
 * (transparent PNG, dark text version for the light navbar).
 * The component uses it automatically with a text fallback.
 */
export function Logo({ dark = false }: { dark?: boolean }) {
  const [missing, setMissing] = useState(false);
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Digital Agents — home">
      {!missing && (
        <span className="relative block h-9 w-[132px]">
          <Image
            src="/logo.png"
            alt="Digital Agents Interactive"
            fill
            className="object-contain object-left"
            sizes="132px"
            onError={() => setMissing(true)}
          />
        </span>
      )}
      <span className="leading-none">
        <span className={`block font-extrabold tracking-tight text-[15px] ${dark ? "text-white" : "text-[#1F2A2E]"}`}>
          Digital Agents
        </span>
        <span className={`block text-[10px] uppercase tracking-[0.22em] ${dark ? "text-white/60" : "text-[#626a6d]"}`}>
          XR Studio
        </span>
      </span>
    </Link>
  );
}
