"use client";

import { useRef, useState } from "react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function VideoPlayer({ src, poster, className = "" }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function togglePlay() {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }

  return (
    <div className={`relative group cursor-pointer rounded-2xl overflow-hidden bg-charcoal-light ${className}`} onClick={togglePlay}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        playsInline
        onEnded={() => setIsPlaying(false)}
      >
        <track kind="captions" />
      </video>

      {/* Play/Pause overlay */}
      <div className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
        <div className="w-16 h-16 rounded-full bg-orange flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
          {isPlaying ? (
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
