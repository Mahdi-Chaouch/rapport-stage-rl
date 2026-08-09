"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VideoIntro from "./components/VideoIntro";
import EditorialHeader from "./components/EditorialHeader";
import Navigation from "./components/Navigation";
import MaisonSection from "./components/MaisonSection";
import PosteSection from "./components/PosteSection";
import CarnetSection from "./components/CarnetSection";
import StrategieSection from "./components/StrategieSection";
import RencontresSection from "./components/RencontresSection";
import VoyageSection from "./components/VoyageSection";
import OrganigramModal from "./components/OrganigramModal";
import PrintReportModal from "./components/PrintReportModal";
import Footer from "./components/Footer";
import { ArrowDown, Compass } from "lucide-react";
import content from "@/data/content";

export default function Home() {
  const [videoEnded, setVideoEnded] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOrganigramOpen, setIsOrganigramOpen] = useState(false);
  const [isPrintOpen, setIsPrintOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("INTRO");

  const { global } = content;

  useEffect(() => {
    if (videoEnded) {
      const timer = setTimeout(() => setShowIntro(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [videoEnded]);

  useEffect(() => {
    if (!videoEnded) return;
    const sections = [
      { id: "hero",       label: "00 · INTRODUCTION ÉDITORIALE" },
      { id: "maison",     label: "I · LA MAISON RALPH LAUREN" },
      { id: "poste",      label: "II · MON POSTE & RESPONSABILITÉS" },
      { id: "carnet",     label: "III · CARNET DE BORD" },
      { id: "strategie",  label: "IV · ANALYSE STRATÉGIQUE" },
      { id: "rencontres", label: "V · RENCONTRES & INSIGHTS" },
      { id: "voyage",     label: "VI · RETOUR DE VOYAGE" },
    ];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].label);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [videoEnded]);

  const handleSelectSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen bg-[#050505] text-[#F4F4F5] overflow-x-hidden">

      <AnimatePresence>
        {showIntro && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-40"
          >
            <VideoIntro
              videoEnded={videoEnded}
              onVideoEnd={() => setVideoEnded(true)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <EditorialHeader
        visible={videoEnded}
        activeSection={activeSection}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenPrint={() => setIsPrintOpen(true)}
      />

      <AnimatePresence>
        {videoEnded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-[45]"
          >
            <section
              id="hero"
              className="relative min-h-screen flex flex-col justify-between px-6 md:px-16 pt-32 pb-16 border-b border-white/10"
            >
              <div className="my-auto max-w-4xl mx-auto text-center space-y-10">

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-white/20 bg-black/50 backdrop-blur-md"
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-neutral-300">
                    {global.siteSubTitle}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-[10px] font-sans tracking-[0.3em] uppercase text-white font-semibold">
                >
                  Bienvenue<br />à Bord
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="font-serif text-lg sm:text-xl md:text-2xl text-neutral-400 font-normal italic max-w-2xl mx-auto leading-relaxed"
                >
                  Ce portfolio retrace trois mois d&apos;immersion au cœur de la
boutique de la Madeleine, première boutique européenne de Ralph Lauren,
pour un été qui n&apos;aura ressemblé à aucun autre.
                  <span className="block mt-4 text-sm font-sans not-italic uppercase tracking-[0.25em] text-neutral-500 font-normal">
                    {global.heroLocation}
                  </span>
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-wrap items-center justify-center gap-4 pt-4"
                >
                  <button
                    onClick={() => handleSelectSection("maison")}
                    className="group inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-white text-black font-sans text-xs tracking-[0.25em] uppercase font-bold hover:bg-neutral-200 transition-all duration-300 shadow-2xl hover:scale-105"
                  >
                    <span>Commencer le Voyage →</span>
                  </button>

                  <button
                    onClick={() => setIsMenuOpen(true)}
                    className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-black/60 border border-white/20 text-white font-sans text-xs tracking-[0.25em] uppercase font-semibold hover:border-white hover:bg-black transition-all duration-300 backdrop-blur-md"
                  >
                    <Compass className="w-4 h-4 text-white" />
                    <span>{global.exploreSummaryButton}</span>
                  </button>
                </motion.div>

              </div>

              <div className="flex flex-col md:flex-row justify-between items-center text-xs font-sans text-neutral-400 gap-4 pt-8 border-t border-white/10">
                <div className="flex items-center space-x-4">
                  <span className="text-white font-medium">{global.studentName}</span>
                  <span>·</span>
                  <span>{global.academicProgram}</span>
                  <span>·</span>
                  <span className="text-neutral-300">Tuteur de stage : {global.companyTutor}</span>
                </div>
                <button
                  onClick={() => handleSelectSection("maison")}
                  className="flex items-center space-x-2 text-[10px] tracking-[0.3em] uppercase text-neutral-400 hover:text-white transition-colors"
                >
                  <span>{global.scrollPrompt}</span>
                  <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                </button>
              </div>
            </section>

            <MaisonSection onOpenOrganigram={() => setIsOrganigramOpen(true)} />
            <PosteSection />
            <CarnetSection />
            <StrategieSection />
            <RencontresSection />
            <VoyageSection />
            <Footer onSelectSection={handleSelectSection} />

          </motion.div>
        )}
      </AnimatePresence>

      <Navigation
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectSection={handleSelectSection}
      />
      <OrganigramModal
        isOpen={isOrganigramOpen}
        onClose={() => setIsOrganigramOpen(false)}
      />
      <PrintReportModal
        isOpen={isPrintOpen}
        onClose={() => setIsPrintOpen(false)}
      />

    </main>
  );
}
