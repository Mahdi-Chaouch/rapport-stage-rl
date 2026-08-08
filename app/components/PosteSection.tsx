"use client";

import { motion } from "framer-motion";
import { Award, Target, TrendingUp, ShieldCheck, Sparkles, CheckCircle2, Star } from "lucide-react";
import content from "@/data/content";

export default function PosteSection() {
  const { poste } = content;

  return (
    <section id="poste" className="relative py-28 md:py-40 px-6 md:px-16 bg-[#08080A] border-b border-white/10 overflow-hidden">
      {/* Decorative Highlighting Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Highlighted Banner Badge */}
        <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8">
          <Star className="w-3.5 h-3.5 text-white fill-white" />
          <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-white font-bold">
            {poste.badge}
          </span>
        </div>

        {/* High-Impact Main Heading */}
        <div className="mb-20">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-neutral-400 font-semibold block mb-3">
            {poste.chapter}
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-white font-light tracking-tight leading-[1.08] max-w-5xl">
            {poste.title} <br className="hidden md:block" />
            <span className="italic font-normal text-stroke-white text-white">{poste.subtitle}</span>
          </h2>
          <p className="text-neutral-400 font-sans text-base md:text-xl max-w-3xl mt-6 font-light leading-relaxed">
            {poste.description}
          </p>
        </div>

        {/* Organigram Positioning Card */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-black border border-white/20 mb-20 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-neutral-400 uppercase">
                <Target className="w-4 h-4 text-white" />
                <span>{poste.positioning.badge}</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-white">
                {poste.positioning.title}
              </h3>
              <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                Rattaché(e) directement à la <strong className="text-white">Directrice Merchandising Retail France</strong> et travaillant au quotidien aux côtés de la <strong className="text-white">Directrice du Flagship Saint-Germain</strong>, mon rôle assure le lien stratégique entre la vision artistique édictée à New York et son exécution opérationnelle en boutique.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 font-sans min-w-[280px]">
              {poste.positioning.hierarchy.map((item, index) => (
                <div key={index} className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <span className="text-neutral-400 uppercase text-[9px] tracking-widest block">{item.label}</span>
                  <span className="text-white font-serif text-base font-medium">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quantitative KPIs Grid */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <TrendingUp className="w-5 h-5 text-white" />
            <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide">
              {poste.kpiTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {poste.kpis.map((kpi, index) => (
              <div
                key={index}
                className="luxury-glass p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 group"
              >
                <span className="font-serif text-4xl md:text-5xl text-white font-medium block group-hover:scale-105 transition-transform duration-300">
                  {kpi.value}
                </span>
                <h4 className="font-serif text-lg text-neutral-200 mt-3 font-semibold">
                  {kpi.label}
                </h4>
                <p className="text-xs text-neutral-400 font-sans mt-2 leading-relaxed">
                  {kpi.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Expectations & Standards */}
        <div className="luxury-glass p-8 md:p-12 rounded-3xl">
          <div className="flex items-center space-x-3 mb-8">
            <ShieldCheck className="w-5 h-5 text-white" />
            <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide">
              {poste.expectationsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
            {poste.expectations.map((exp, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                  <h4 className="font-serif text-lg text-white font-medium">
                    {exp.title}
                  </h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed pl-7">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
