"use client";

import { motion } from "framer-motion";
import { Quote, MessageSquare, UserCheck, Sparkles, Award } from "lucide-react";
import content from "@/data/content";

interface Interview {
  quote: string;
  author: string;
  role: string;
  keyInsight: string;
  portrait: string;
}

export default function RencontresSection() {
  const { rencontres } = content;
  const interviews = rencontres.interviews as Interview[];

  return (
    <section id="rencontres" className="relative py-24 md:py-36 px-6 md:px-16 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-white/10 gap-6">
          <div>
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-neutral-400 font-semibold">
              {rencontres.chapter}
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white mt-3 font-normal tracking-tight">
              {rencontres.title}
            </h2>
          </div>
          <p className="text-neutral-400 font-sans text-sm md:text-base max-w-md italic">
            {rencontres.subtitle}
          </p>
        </div>

        {/* Magazine-Style Oversized Blockquote Featured Card */}
        <div className="mb-24 relative p-10 md:p-16 rounded-3xl bg-gradient-to-br from-neutral-900 via-black to-neutral-950 border border-white/20 overflow-hidden">
          <Quote className="absolute -top-6 -left-6 w-40 h-40 text-white/[0.04] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
            <span className="inline-block text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
              {rencontres.editorialQuote.badge}
            </span>

            <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl text-white font-light italic leading-tight">
              {rencontres.editorialQuote.quote}
            </blockquote>

            <div className="pt-6 border-t border-white/10 max-w-xs mx-auto">
              <p className="font-serif text-xl text-white font-normal">{rencontres.editorialQuote.author}</p>
              <p className="text-[10px] font-sans tracking-widest text-neutral-400 uppercase mt-0.5">
                {rencontres.editorialQuote.role}
              </p>
            </div>
          </div>
        </div>

        {/* Mentor Interviews Grid */}
        <div className="space-y-16">
          <div className="flex items-center space-x-3 mb-8">
            <UserCheck className="w-5 h-5 text-white" />
            <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide">
              {rencontres.interviewsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {interviews.map((item, index) => (
              <div
                key={index}
                className="luxury-glass p-8 rounded-2xl flex flex-col justify-between border border-white/10 hover:border-white/30 transition-all duration-500 group"
              >
                <div className="space-y-6">
                  {/* Portrait & Author details */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.portrait}
                      alt={item.author}
                      className="w-14 h-14 rounded-full object-cover border border-white/20 filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div>
                      <h4 className="font-serif text-lg text-white font-medium">
                        {item.author}
                      </h4>
                      <p className="text-xs text-neutral-400 font-sans">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Quote content */}
                  <blockquote className="font-serif text-base text-neutral-200 italic leading-relaxed pt-4 border-t border-white/5">
                    “ {item.quote} ”
                  </blockquote>
                </div>

                {/* Key insight footer */}
                <div className="mt-8 pt-4 border-t border-white/5">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-400 block mb-1">
                    KEY INSIGHT RETENU
                  </span>
                  <p className="text-xs text-white font-sans font-medium">
                    {item.keyInsight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
