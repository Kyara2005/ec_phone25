"use client";

import Image from "next/image";

const FLOATERS = [
  { top: "8%", left: "4%", delay: "0s", size: 42, rotate: -18 },
  { top: "18%", left: "88%", delay: "1.2s", size: 36, rotate: 22 },
  { top: "42%", left: "2%", delay: "0.6s", size: 48, rotate: 12 },
  { top: "55%", left: "92%", delay: "1.8s", size: 40, rotate: -14 },
  { top: "78%", left: "8%", delay: "0.9s", size: 34, rotate: 28 },
  { top: "72%", left: "85%", delay: "2.2s", size: 44, rotate: -8 },
  { top: "32%", left: "94%", delay: "0.3s", size: 30, rotate: 16 },
  { top: "88%", left: "48%", delay: "1.5s", size: 38, rotate: -22 },
];

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 40" className={className} fill="none" aria-hidden>
      <rect x="1" y="1" width="22" height="38" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <rect x="8" y="3.5" width="8" height="2" rx="1" fill="currentColor" opacity="0.5" />
      <circle cx="12" cy="35" r="1.5" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M5 12h12m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FloatingPhonesBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="arrow-path absolute inset-x-0 top-1/3 h-24 opacity-30" />
      {FLOATERS.map((item, i) => (
        <div
          key={i}
          className="float-drift absolute text-blue-bright/35"
          style={{
            top: item.top,
            left: item.left,
            animationDelay: item.delay,
            width: item.size,
            height: item.size * 1.6,
            ["--spin" as string]: `${item.rotate}deg`,
          }}
        >
          {i % 3 === 0 ? (
            <ArrowIcon className="h-full w-full" />
          ) : (
            <PhoneIcon className="h-full w-full" />
          )}
        </div>
      ))}
    </div>
  );
}
