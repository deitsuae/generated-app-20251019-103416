import React from 'react';
export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-deits-gold"
      >
        <path
          d="M10 30C14.4183 30 18 26.4183 18 22C18 17.5817 14.4183 14 10 14"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 26C26.4183 26 30 22.4183 30 18C30 13.5817 26.4183 10 22 10"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 35L35 5"
          stroke="#0b3d91"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-display text-xl font-bold text-deits-blue dark:text-white">
        DEITS
      </span>
    </div>
  );
}