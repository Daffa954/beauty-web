"use client";

import React from "react";

interface HeaderProps {
  onOpenMenu: () => void;
  onNavigate: (e: React.MouseEvent, id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  onNavigate,
}) => {
  return (
    <header className="relative w-full bg-[#070707] border-b border-white/10 text-white z-30 transition-all">
      <div className="relative w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 h-20 sm:h-24 flex items-center">
        {/* Left: Menu Trigger */}
        <div className="flex items-center justify-start">
          <button
            onClick={onOpenMenu}
            className="flex items-center gap-3 group cursor-pointer p-2 -ml-2 text-white hover:text-[#d08c81] transition-colors"
            aria-label="Open Navigation Menu"
          >
            <div className="w-6 flex flex-col justify-center space-y-1.5">
              <span className="block h-[1.5px] w-6 bg-white group-hover:bg-[#d08c81] transition-transform group-hover:translate-x-1" />
              <span className="block h-[1.5px] w-4 bg-white group-hover:bg-[#d08c81] transition-all group-hover:w-6" />
            </div>
            <span className="hidden sm:inline font-mono text-[11px] tracking-[0.25em] uppercase text-white/90 group-hover:text-white">
              Menu
            </span>
          </button>
        </div>

        {/* Center: Brand Title */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <a
            href="#top"
            onClick={(e) => onNavigate(e, "top")}
            className="flex flex-col items-center select-none group cursor-pointer text-center"
            aria-label="Beauty Lotion Brand Mark"
          >
            <span className="font-sans text-sm min-[400px]:text-base sm:text-2xl md:text-3xl font-medium tracking-[0.12em] sm:tracking-[0.35em] uppercase text-white group-hover:text-[#e8c5c1] transition-colors leading-none whitespace-nowrap">
              BEAUTY LOTION
            </span>
          </a>
        </div>

      </div>
    </header>
  );
};
