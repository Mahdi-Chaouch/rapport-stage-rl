"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Printer, Download, CheckCircle2, Award } from "lucide-react";
import content from "@/data/content";

interface PrintReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrintReportModal({ isOpen, onClose }: PrintReportModalProps) {
  const { global, printSummary } = content;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[130] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10 overflow-y-auto"
        >
          <div className="relative w-full max-w-4xl bg-[#0A0A0C] border border-white/20 rounded-3xl p-6 md:p-12 text-white max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-8">
              <div>
                <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-400 uppercase">
                  {printSummary.badge}
                </span>
                <h3 className="font-serif text-2xl md:text-4xl text-white mt-1">
                  {printSummary.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-3 rounded-full border border-white/20 hover:border-white text-white hover:bg-white hover:text-black transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Printable Document Body */}
            <div id="printable-area" className="space-y-8 font-sans text-neutral-200">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex justify-between items-center text-xs text-neutral-400 font-mono">
                  <span>{printSummary.headerLogo}</span>
                  <span>{printSummary.session}</span>
                </div>
                <h4 className="font-serif text-2xl text-white">
                  {printSummary.documentTitle}
                </h4>
                <p className="text-xs text-neutral-300">
                  Étudiant(e) : <strong className="text-white">{global.studentName}</strong> · {global.academicProgram}
                </p>
                <p className="text-xs text-neutral-300">
                  Entreprise d'accueil : <strong className="text-white">{global.company}</strong>
                </p>
              </div>

              {/* Executive Summary */}
              <div className="space-y-4 text-xs md:text-sm leading-relaxed">
                <h5 className="font-serif text-lg text-white font-medium border-b border-white/10 pb-2">
                  {printSummary.executiveSummaryTitle}
                </h5>
                <p>
                  {printSummary.executiveSummaryText}
                </p>

                <div className="grid grid-cols-2 gap-4 font-mono text-xs my-4">
                  {printSummary.kpis.map((kpi, index) => (
                    <div key={index} className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-neutral-400 text-[10px] block">{kpi.label}</span>
                      <span className="text-white text-xl font-serif font-bold">{kpi.value}</span>
                    </div>
                  ))}
                </div>

                <h5 className="font-serif text-lg text-white font-medium border-b border-white/10 pb-2 pt-4">
                  {printSummary.conclusionTitle}
                </h5>
                <p>
                  {printSummary.conclusionText}
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-8 pt-6 border-t border-white/10 flex justify-end space-x-4">
              <button
                onClick={handlePrint}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white text-black font-sans text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-all"
              >
                <Printer className="w-4 h-4" />
                <span>{printSummary.printButton}</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
