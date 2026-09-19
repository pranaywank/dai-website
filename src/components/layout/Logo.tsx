"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/assets/logo/DAI Logo-08-thick.png";

/**
 * Brand logo. Uses public/assets/logo/DAI Logo-08-thick.png.
 * `dark` inverts it for dark backgrounds (footer).
 */
export function Logo({ dark = false }: { dark?: boolean }) {
  const [missing, setMissing] = useState(false);
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Digital Agents — home">
      {!missing ? (
        <span className="relative block h-10 w-[120px]">
          <Image
            src={LOGO_SRC}
            alt="Digital Agents Interactive"
            fill
            className={cn("object-contain object-left", dark && "brightness-0 invert")}
            sizes="120px"
            onError={() => setMissing(true)}
          />
        </span>
      ) : (
        <span className="flex items-center gap-2.5">
          <span className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#a13ddf] to-[#2BB2FC] grid place-items-center font-extrabold text-white">D</span>
          <span className="leading-none">
            <span className={cn("block font-extrabold tracking-tight text-[15px]", dark ? "text-white" : "text-[#1F2A2E]")}>
              Digital Agents
            </span>
            <span className={cn("block text-[10px] uppercase tracking-[0.22em]", dark ? "text-white/60" : "text-[#626a6d]")}>
              XR Studio
            </span>
          </span>
        </span>
      )}
    </Link>
  );
}
