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
import { ArrowDown, Compass, Award } from "lucide-react";
import content from "@/data/content";

export default function Home() {
  const [videoEnded, setVideoEnded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOrganigramOpen, setIsOrganigramOpen] = useState(false);
  const [isPrintOpen, setIsPrintOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("INTRO");

  const { global } = content;

  // Déclenche l'affichage du contenu 500ms après la fin de la vidéo
  useEffect(() => {
    if (videoEnded) {
      const timer = setTimeout(() => setShowContent(true), 500);
      return () => clearTimeout(timer);
    }
  }, [videoEnded]);

  // Scroll listener to update active section in header
  useEffect(() => {
    if (!videoEnded) return;

    const sections = [
      { id: "hero", label: "00 · INTRODUCTION ÉDITORIALE" },
      { id: "maison", label: "I · LA MAISON RALPH LAUREN" },
      { id: "poste", label: "II · MON POSTE & RESPONSABILITÉS" },
      { id: "carnet", label: "III · CARNET DE BORD" },
      { id: "strategie", label: "IV · ANALYSE STRATÉGIQUE" },
      { id: "rencontres", label: "V · RENCONTRES & INSIGHTS" },
      { id: "voyage", label: "VI · RETOUR DE VOYAGE" },
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
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen bg-[#050505] text-[#F4F4F5] overflow-x-hidden">
      {/* 1. Fullscreen Video Intro Mechanic */}
      <VideoIntro
        videoEnded={videoEnded}
        onVideoEnd={() => setVideoEnded(true)}
      />

      {/* 2. Fixed Top Editorial Navigation Header */}
      <EditorialHeader
        visible={videoEnded}
        activeSection={activeSection}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenPrint={() => setIsPrintOpen(true)}
      />

      {/* 3. Main Editorial Hero & Sections (Fades in ONLY when video ends) */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-30"
          >
            {/* HERO SECTION - INTRODUCTION ÉDITORIALE */}
            <section
              id="hero"
              className="relative min-h-screen flex flex-col justify-between px-6 md:px-16 pt-32 pb-16 border-b border-white/10"
            >
              {/* Central Title Block */}
              <div className="my-auto max-w-6xl mx-auto text-center space-y-8">
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

                {/* Titre de l'introduction éditoriale */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="font-serif text-5xl sm:text-7xl md:text-9xl text-white font-light tracking-tight leading-[0.95] uppercase"
                >
                  {global.siteTitle}
                </motion.h1>

                {/* Paragraphe de présentation de l'immersion */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="font-serif text-xl sm:text-2xl md:text-3xl text-neutral-300 font-light italic max-w-3xl mx-auto"
                >
                  {global.heroQuote} 
                  <br />
                  <span className="text-sm font-sans not-italic uppercase tracking-[0.25em] text-neutral-400 font-normal mt-4 block">
                    {global.heroLocation}
                  </span>
                </motion.p>

                {/* Boutons d'action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-wrap items-center justify-center gap-4 pt-6"
                >
                  <button
                    onClick={() => handleSelectSection("poste")}
                    className="group relative inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-white text-black font-sans text-xs tracking-[0.25em] uppercase font-bold hover:bg-neutral-200 transition-all duration-300 shadow-2xl hover:scale-105"
                  >
                    <Award className="w-4 h-4 text-black" />
                    <span>{global.discoverRoleButton}</span>
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

              {/* Barre de métadonnées bas de page */}
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

            {/* SECTIONS DU RAPPORT */}
            <MaisonSection onOpenOrganigram={() => setIsOrganigramOpen(true)} />
            <PosteSection />
            <CarnetSection />
            <StrategieSection />
            <RencontresSection />
            <VoyageSection />

            {/* FOOTER */}
            <Footer onSelectSection={handleSelectSection} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODALES */}
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
