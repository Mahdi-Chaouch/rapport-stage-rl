"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Filter, AlertTriangle, CheckCircle, Eye, Sparkles } from "lucide-react";
import content from "@/data/content";

interface TimelineEntry {
  week: string;
  category: string;
  title: string;
  concreteTasks: string[];
  behindTheScenes: string;
  challenge: string;
  solution: string;
}

export default function CarnetSection() {
  const { carnet } = content;
  const [filter, setFilter] = useState<string>("all");

  const entries = carnet.entries as TimelineEntry[];
  const filteredEntries = filter === "all" ? entries : entries.filter((e) => e.category === filter);

  return (
    <section id="carnet" className="relative py-24 md:py-36 px-6 md:px-16 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-neutral-400 font-semibold">
              {carnet.chapter}
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white mt-3 font-normal tracking-tight">
              {carnet.title}
            </h2>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {carnet.filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-full text-xs font-sans tracking-widest uppercase transition-all ${
                  filter === f.key
                    ? "bg-white text-black font-semibold"
                    : "bg-white/5 border border-white/10 text-neutral-400 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Entries */}
        <div className="space-y-12 relative before:absolute before:left-4 md:before:left-8 before:top-4 before:bottom-4 before:w-[1px] before:bg-white/10">
          <AnimatePresence mode="wait">
            {filteredEntries.map((entry, index) => (
              <motion.div
                key={entry.week}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline Node Dot */}
                <div className="absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full bg-black border-2 border-white flex items-center justify-center -translate-x-1/2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>

                <div className="luxury-glass p-8 md:p-10 rounded-2xl space-y-6">
                  {/* Entry Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/10 pb-4">
                    <div>
                      <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
                        {entry.week}
                      </span>
                      <h3 className="font-serif text-2xl text-white mt-1">
                        {entry.title}
                      </h3>
                    </div>
                    <span className="self-start md:self-auto text-[9px] font-sans tracking-widest uppercase px-3 py-1 rounded-full bg-white/10 text-white font-medium border border-white/10">
                      {entry.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Concrete Tasks Grid */}
                  <div>
                    <h4 className="text-xs font-sans tracking-widest text-neutral-400 uppercase mb-3 flex items-center space-x-2">
                      <CheckCircle className="w-3.5 h-3.5 text-white" />
                      <span>TÂCHES CONCRÈTES EXÉCUTÉES</span>
                    </h4>
                    <ul className="space-y-2 font-sans text-xs md:text-sm text-neutral-300">
                      {entry.concreteTasks.map((task, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 flex-shrink-0" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Behind the Scenes & Challenge Resolution Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10 font-sans text-xs">
                    {/* Behind the scenes */}
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex items-center space-x-2 text-neutral-300 font-semibold mb-2">
                        <Eye className="w-3.5 h-3.5 text-white" />
                        <span>LES COULISSES DU FLAGSHIP</span>
                      </div>
                      <p className="text-neutral-400 italic leading-relaxed">
                        “ {entry.behindTheScenes} ”
                      </p>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                      <div className="flex items-center space-x-2 text-amber-300 font-semibold">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>DÉFI ENCONTRÉ & SOLUTION</span>
                      </div>
                      <p className="text-neutral-300">
                        <strong className="text-white">Défi :</strong> {entry.challenge}
                      </p>
                      <p className="text-neutral-400">
                        <strong className="text-white">Solution :</strong> {entry.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
