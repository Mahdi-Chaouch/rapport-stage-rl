"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, History, Sparkles, Layers, Users, ChevronRight } from "lucide-react";
import content from "@/data/content";

interface MaisonSectionProps {
  onOpenOrganigram: () => void;
}

export default function MaisonSection({ onOpenOrganigram }: MaisonSectionProps) {
  const { maison } = content;

  return (
    <section id="maison" className="relative py-24 md:py-36 px-6 md:px-16 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-neutral-400 font-semibold">
              {maison.chapter}
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white mt-3 font-normal tracking-tight">
              {maison.title}
            </h2>
          </div>
          <p className="text-neutral-400 font-sans text-sm md:text-base max-w-md italic">
            {maison.quote}
          </p>
        </div>

        {/* Grid 2 Columns: Identity & History */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Identity & Flagships */}
          <div className="lg:col-span-7 space-y-8">
            <div className="luxury-glass p-8 md:p-10 rounded-2xl relative overflow-hidden">
              <div className="flex items-center space-x-3 mb-6">
                <Building2 className="w-5 h-5 text-neutral-300" />
                <h3 className="font-serif text-2xl text-white tracking-wide">
                  {maison.presentation.title}
                </h3>
              </div>
              <p className="text-neutral-300 font-sans leading-relaxed text-sm md:text-base mb-6">
                Fondée en 1967 à New York par le styliste et entrepreneur visionnaire Ralph Lauren, la Maison incarna d'emblée une redéfinition du luxe mondial à travers le concept du <strong className="text-white">Lifestyle Global</strong>. Plus qu'une marque de prêt-à-porter, Ralph Lauren conçoit un univers cinématographique où chaque collection raconte une histoire.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10 font-sans">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center space-x-2 text-xs text-neutral-400 uppercase tracking-widest mb-1">
                    <MapPin className="w-3.5 h-3.5 text-white" />
                    <span>{maison.presentation.flagship.label}</span>
                  </div>
                  <p className="text-white font-serif text-lg font-medium">{maison.presentation.flagship.address}</p>
                  <p className="text-xs text-neutral-400 mt-1">{maison.presentation.flagship.details}</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center space-x-2 text-xs text-neutral-400 uppercase tracking-widest mb-1">
                    <Building2 className="w-3.5 h-3.5 text-neutral-300" />
                    <span>{maison.presentation.headquarters.label}</span>
                  </div>
                  <p className="text-white font-serif text-lg font-medium">{maison.presentation.headquarters.address}</p>
                  <p className="text-xs text-neutral-400 mt-1">{maison.presentation.headquarters.details}</p>
                </div>
              </div>
            </div>

            {/* History Timeline */}
            <div className="luxury-glass p-8 md:p-10 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <History className="w-5 h-5 text-neutral-300" />
                <h3 className="font-serif text-2xl text-white tracking-wide">
                  {maison.history.title}
                </h3>
              </div>
              <div className="space-y-6 border-l border-white/10 pl-6 ml-2 font-sans">
                {maison.history.timeline.map((item, index) => (
                  <div key={index}>
                    <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">{item.year}</span>
                    <h4 className="font-serif text-lg text-white">{item.title}</h4>
                    <p className="text-xs text-neutral-400 mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Brand Universe & Organigram Trigger */}
          <div className="lg:col-span-5 space-y-8">
            <div className="luxury-glass p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Layers className="w-5 h-5 text-neutral-300" />
                <h3 className="font-serif text-2xl text-white tracking-wide">
                  {maison.universe.title}
                </h3>
              </div>
              <div className="space-y-4">
                {maison.universe.items.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-serif text-base text-white group-hover:translate-x-1 transition-transform">
                        {item.name}
                      </h4>
                      <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 px-2 py-0.5 rounded bg-white/10">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Organigram Banner */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-black border border-white/20 text-white overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-neutral-400 uppercase mb-3">
                  <Users className="w-4 h-4 text-white" />
                  <span>{maison.organigramBanner.badge}</span>
                </div>
                <h3 className="font-serif text-2xl text-white mb-2">
                  {maison.organigramBanner.title}
                </h3>
                <p className="text-xs text-neutral-400 font-sans mb-6 max-w-sm">
                  {maison.organigramBanner.description}
                </p>
                <button
                  onClick={onOpenOrganigram}
                  className="inline-flex items-center space-x-3 px-5 py-3 rounded-full bg-white text-black font-sans text-xs tracking-widest uppercase font-semibold hover:bg-neutral-200 transition-all duration-300"
                >
                  <span>{maison.organigramBanner.buttonText}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
