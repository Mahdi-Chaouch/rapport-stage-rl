"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Volume2, VolumeX, Play, SkipForward } from "lucide-react";
import content from "@/data/content";

interface VideoIntroProps {
  onVideoEnd: () => void;
  videoEnded: boolean;
}

export default function VideoIntro({
  onVideoEnd,
  videoEnded,
}: VideoIntroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const { videoIntro } = content;

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
      setIsPlaying(true);
    };

    video.addEventListener("ended", handleEnded);
    video.addEventListener("play", handlePlay);

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }

    return () => {
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("play", handlePlay);
    };
  }, [onVideoEnd]);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;

    video.muted = nextMuted;
    setIsMuted(nextMuted);

    if (!nextMuted) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
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
    <div className="fixed inset-0 z-40 h-screen w-screen select-none overflow-hidden bg-black">
      {/* VIDEO */}
      <video
        ref={videoRef}
        src={videoSource}
        poster={fallbackPoster}
        autoPlay
        muted={isMuted}
        playsInline
        className={`h-full w-full object-cover transition-all duration-1000 ${
          videoEnded
            ? "scale-105 blur-[2px] brightness-50 contrast-125"
            : "scale-100 brightness-90"
        }`}
      />

      {/* IMAGE DE FIN */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          videoEnded ? "opacity-70" : "opacity-0"
        }`}
      >
        <img
          src={fallbackPoster}
          alt="Ralph Lauren Hero Background"
          className="h-full w-full object-cover brightness-50 contrast-125 blur-[1px]"
        />
      </div>

      {videoEnded && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-black/50" />
      )}

      {/* VIGNETTE */}
      <div className="pointer-events-none absolute inset-0 bg-luxury-vignette opacity-70" />

      <AnimatePresence>
        {!videoEnded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="pointer-events-none absolute inset-0 z-50 flex flex-col justify-between p-6 md:p-12"
          >
            {/* BARRE DU HAUT */}
            <div className="pointer-events-auto flex w-full items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="h-2 w-2 animate-ping rounded-full bg-white" />

                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-300">
                  {videoIntro.topBadge}
                </span>
              </div>

              {/* BOUTON SON DISCRET UNE FOIS L'INTRO LANCÉE */}
              <motion.button
                type="button"
                onClick={toggleSound}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all hover:border-white/50"
              >
                {isMuted ? (
                  <>
                    <VolumeX className="h-4 w-4" />
                    <span className="hidden sm:inline">Son coupé</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="h-4 w-4 text-blue-400" />
                    <span className="hidden sm:inline">Son activé</span>
                  </>
                )}
              </motion.button>
            </div>

            {/* BOUTON PRINCIPAL POUR ACTIVER LE SON */}
            <AnimatePresence>
              {isMuted && isPlaying && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: [1, 1.025, 1],
                  }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{
                    opacity: { duration: 0.6, delay: 0.8 },
                    y: { duration: 0.6, delay: 0.8 },
                    scale: {
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="pointer-events-auto absolute inset-x-0 bottom-32 flex justify-center md:bottom-36"
                >
                  <button
                    type="button"
                    onClick={toggleSound}
                    className="group flex flex-col items-center gap-3 rounded-full border border-white/40 bg-black/60 px-8 py-5 text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white hover:bg-black/80 md:px-10"
                  >
                    <span className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em]">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-12">
                        <Volume2 className="h-4 w-4" />
                      </span>
                      Activer le son
                    </span>

                    <span className="font-serif text-sm italic text-white/65">
                      Pour vivre l’introduction comme prévu.
                    </span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* SI LE LANCEMENT AUTOMATIQUE EST BLOQUÉ */}
            {!isPlaying && (
              <div className="pointer-events-auto my-auto self-center text-center">
                <button
                  type="button"
                  onClick={handleManualPlay}
                  className="group inline-flex items-center space-x-4 rounded-full bg-white px-8 py-4 font-serif text-sm uppercase tracking-widest text-black transition-all duration-500 hover:scale-105 hover:bg-neutral-200"
                >
                  <Play className="h-4 w-4 fill-black" />
                  <span>{videoIntro.playButton}</span>
                </button>
              </div>
            )}

            {/* BAS DE L'INTRO */}
            <div className="pointer-events-auto flex w-full items-end justify-between">
              <div>
                <p className="max-w-xl font-serif text-xl italic text-white/70 md:text-2xl">
                  {videoIntro.quote}
                </p>

                <p className="mt-1 font-sans text-[10px] uppercase tracking-widest text-neutral-400">
                  {videoIntro.author}
                </p>
              </div>

              <button
                type="button"
                onClick={handleSkip}
                className="group flex items-center space-x-2 rounded-full border border-white/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.25em] text-neutral-400 backdrop-blur-md transition-colors duration-300 hover:border-white/30 hover:text-white"
              >
                <span>{videoIntro.skipButton}</span>

                <SkipForward className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
