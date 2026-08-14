"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Play, SkipForward } from "lucide-react";
import content from "@/data/content";

interface VideoIntroProps {
  onVideoEnd: () => void;
  videoEnded: boolean;
}

export default function VideoIntro({ onVideoEnd, videoEnded }: VideoIntroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  const { videoIntro } = content;

  // Custom Ralph Lauren luxury video & background image from user
  const videoSource = "/intro-video.mp4";
  const fallbackPoster = "/hero-bg.jpg";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
  video.pause();
  video.muted = true;
  video.src = "";
  onVideoEnd();
};

    const handlePlay = () => {
      setHasStarted(true);
      setIsPlaying(true);
    };

    video.addEventListener("ended", handleEnded);
    video.addEventListener("play", handlePlay);

    // Attempt autoplay
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay blocked by browser policy, wait for user click or trigger onVideoEnd after timeout
          setIsPlaying(false);
        });
    }

    return () => {
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("play", handlePlay);
    };
  }, [onVideoEnd]);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleManualPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleSkip = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onVideoEnd();
  };

  return (
    <div className="fixed inset-0 w-screen h-screen z-40 overflow-hidden pointer-events-auto select-none bg-black">
      {/* Video element */}
      <video
        ref={videoRef}
        src={videoSource}
        poster={fallbackPoster}
        autoPlay
        muted={isMuted}
        playsInline
        className={`w-full h-full object-cover transition-all duration-1000 ${...}`}
style={{ imageRendering: "auto", willChange: "transform" }}
          videoEnded ? "scale-105 filter brightness-50 contrast-125 blur-[2px]" : "scale-100 brightness-90"
        }`}
      />

      {/* Static Background Image Layer (fades in smoothly when video finishes) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          videoEnded ? "opacity-70" : "opacity-0"
        }`}
      >
        <img
          src={fallbackPoster}
          alt="Ralph Lauren Hero Background"
          className="w-full h-full object-cover filter brightness-50 contrast-125 blur-[1px]"
        />
      </div>

      {/* Freeze overlay when video ended */}
      {videoEnded && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-black/50 pointer-events-none transition-opacity duration-1000" />
      )}

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-luxury-vignette opacity-70 pointer-events-none" />

      {/* Intro Overlay Controls (Visible only while video is playing) */}
      <AnimatePresence>
        {!videoEnded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-50 flex flex-col justify-between p-6 md:p-12 pointer-events-none"
          >
            {/* Top Bar Indicator */}
            <div className="flex justify-between items-center w-full pointer-events-auto">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span className="text-[10px] tracking-[0.3em] uppercase font-mono text-neutral-300">
                  {videoIntro.topBadge}
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleSound}
                  className="p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/40 text-neutral-300 hover:text-white transition-all"
                  aria-label="Toggle Audio"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-white" />}
                </button>
              </div>
            </div>

            {/* Center Autoplay Fallback trigger if browser blocked audio/play */}
            {!isPlaying && (
              <div className="self-center my-auto pointer-events-auto text-center">
                <button
                  onClick={handleManualPlay}
                  className="group relative inline-flex items-center space-x-4 px-8 py-4 rounded-full bg-white text-black font-serif tracking-widest text-sm uppercase transition-all duration-500 hover:scale-105 hover:bg-neutral-200"
                >
                  <Play className="w-4 h-4 fill-black" />
                  <span>{videoIntro.playButton}</span>
                </button>
              </div>
            )}

            {/* Bottom Status & Skip trigger */}
            <div className="flex justify-between items-end w-full pointer-events-auto">
              <div>
                <p className="font-serif italic text-white/70 text-xl md:text-2xl max-w-xl">
                  {videoIntro.quote}
                </p>
                <p className="text-[10px] tracking-widest text-neutral-400 mt-1 uppercase font-sans">
                  {videoIntro.author}
                </p>
              </div>

              <button
                onClick={handleSkip}
                className="group flex items-center space-x-2 text-xs tracking-[0.25em] text-neutral-400 hover:text-white transition-colors duration-300 uppercase py-2 px-4 rounded-full border border-white/10 hover:border-white/30 backdrop-blur-md"
              >
                <span>{videoIntro.skipButton}</span>
                <SkipForward className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
