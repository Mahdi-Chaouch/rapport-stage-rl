"use client";

import { motion } from "framer-motion";
import { Compass, GraduationCap, CheckSquare, Rocket, Sparkles, ArrowRight } from "lucide-react";
import content from "@/data/content";

export default function VoyageSection() {
  const { voyage } = content;

  return (
    <section id="voyage" className="relative py-24 md:py-36 px-6 md:px-16 border-b border-white/10 bg-[#060607]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-neutral-400 font-semibold">
              {voyage.chapter}
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white mt-3 font-normal tracking-tight">
              {voyage.title}
            </h2>
          </div>
          <p className="text-neutral-400 font-sans text-sm md:text-base max-w-md italic">
            {voyage.subtitle}
          </p>
        </div>

        {/* Personal Assessment & Self-Reflection */}
        <div className="luxury-glass p-8 md:p-12 rounded-3xl mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <GraduationCap className="w-5 h-5 text-white" />
            <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide">
              {voyage.assessment.title}
            </h3>
          </div>

          <div className="space-y-4 font-sans text-neutral-300 text-sm md:text-base leading-relaxed">
            {voyage.assessment.paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>
        </div>

        {/* Skills Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Hard Skills */}
          <div className="luxury-glass p-8 rounded-2xl border border-white/10">
            <h4 className="font-serif text-xl text-white mb-6 flex items-center space-x-3">
              <CheckSquare className="w-4 h-4 text-white" />
              <span>Compétences Techniques (Hard Skills)</span>
            </h4>
            <ul className="space-y-3 font-sans text-xs md:text-sm text-neutral-300">
              {voyage.hardSkills.map((skill, index) => (
                <li key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="luxury-glass p-8 rounded-2xl border border-white/10">
            <h4 className="font-serif text-xl text-white mb-6 flex items-center space-x-3">
              <Sparkles className="w-4 h-4 text-white" />
              <span>Savoir-Être &amp; Aptitudes (Soft Skills)</span>
            </h4>
            <ul className="space-y-3 font-sans text-xs md:text-sm text-neutral-300">
              {voyage.softSkills.map((skill, index) => (
                <li key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Career Projection Card */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-neutral-900 to-black border border-white/20 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-neutral-400 uppercase">
              <Rocket className="w-4 h-4 text-white" />
              <span>{voyage.projection.badge}</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-white">
              {voyage.projection.title}
            </h3>
            <p className="text-sm text-neutral-300 font-sans leading-relaxed">
              {voyage.projection.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
