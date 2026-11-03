"use client";

import React, { useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { SENSORY_REELS } from "@/constants/product";
import { useVideoPlayer } from "@/hooks/useVideoPlayer";

export const CinemaSection: React.FC = () => {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const {
    videoRef,
    isPlaying,
    setIsPlaying,
    isMuted,
    togglePlay,
    toggleMute,
  } = useVideoPlayer(true, true);

  const handleSelectReel = (index: number) => {
    setActiveReelIndex(index);
    setIsPlaying(true);
  };

  const currentReel = SENSORY_REELS[activeReelIndex];

  return (
    <section
      id="cinema"
      className="py-24 sm:py-36 bg-black text-white relative overflow-hidden border-b border-white/10"
    >
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="mx-auto mb-20 max-w-4xl text-center sm:mb-28">
          <span className="mb-6 block text-[10px] font-mono uppercase tracking-[0.25em] text-[#d08c81] sm:mb-8">
            Our Philosophy
          </span>
          <h2 className="text-[clamp(2.5rem,10vw,6.25rem)] font-medium uppercase leading-[0.95] tracking-tight text-white">
            <span className="block">Sanitas in</span>
            <span className="block text-[#e8c5c1]">corpore vivido</span>
          </h2>
          <div className="mx-auto mt-8 h-px w-12 bg-[#d08c81]/70 sm:mt-10" />
        </div>

        {/* Cinema Theatre Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 border-b border-white/15 pb-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/50 block">
              02 // FILMS
            </span>
            <h3 className="text-xl sm:text-2xl font-medium uppercase tracking-tight text-white">
              In Motion
            </h3>
          </div>

          {/* Reel Tabs */}
          <div aria-label="Choose a film"
            className="flex w-full items-center border-b border-white/15 md:w-auto md:gap-1 md:rounded-[2px] md:border md:border-white/20 md:bg-[#0c0c0c] md:p-1">
            {SENSORY_REELS.map((reel, idx) => (
              <button
                key={reel.id}
                onClick={() => handleSelectReel(idx)}
                aria-pressed={activeReelIndex === idx}
                className={`min-w-0 flex-1 whitespace-nowrap px-1 py-3 text-center text-[10px] font-mono uppercase tracking-wide transition-all cursor-pointer md:flex-none md:rounded-[2px] md:px-5 md:text-[11px] md:tracking-wider ${
                  activeReelIndex === idx
                    ? "border-b border-[#d08c81] text-white md:border-0 md:bg-white md:text-black md:font-semibold"
                    : "border-b border-transparent text-stone-400 hover:text-white md:border-0"
                }`}
              >
                {reel.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Cinema Screen */}
        <div className="relative aspect-[4/5] sm:aspect-video w-full rounded-[2px] overflow-hidden border border-white/20 bg-neutral-950 shadow-2xl group">
          <video
            ref={videoRef}
            key={currentReel.src}
            src={currentReel.src}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Central Play/Pause Trigger */}
          <button
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-2xl hover:scale-110"
            aria-label={isPlaying ? "Pause Cinema Video" : "Play Cinema Video"}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6 ml-1" />
            )}
          </button>

          {/* Bottom Screen Overlay */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-8 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 z-20">
            <div className="space-y-1">
              <h4 className="text-lg sm:text-xl font-medium uppercase text-white tracking-tight">
                {currentReel.title}
              </h4>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className="rounded-[2px] px-3.5 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[10px] font-mono tracking-widest uppercase transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{isPlaying ? "PAUSE" : "PLAY"}</span>
              </button>

              <button
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                className="rounded-[2px] px-3.5 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[10px] font-mono tracking-widest uppercase transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {isMuted ? (
                  <VolumeX className="w-3.5 h-3.5 text-[#d08c81]" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                )}
                <span className="hidden sm:inline">{isMuted ? "UNMUTE" : "MUTE"}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
