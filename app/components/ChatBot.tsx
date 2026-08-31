"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const QA = [
  {
    q: "Pourquoi avoir choisi Ralph Lauren pour ton stage ?",
    a: "Quand on a annoncé à Constantin que Ralph Lauren sera présent sur le campus pour rechercher ses futurs talents, il n'a pas hésité deux secondes et à vite inscrit son prénom sur la liste d'entretien. Pour lui, qui est fasciné par le rêve américain c'était une évidence. Ralph Lauren représente bien plus qu'une simple marque de vêtements : c'est un univers, une histoire et surtout une vision de l'Amérique qui l'a toujours attiré. Rejoindre la maison était donc pour lui l'occasion de découvrir cet univers de l'intérieur et de vivre une expérience qui correspondait pleinement à ses aspirations.",
    audio: "/polo-q1.mp3",
  },
  {
    q: "C'est quoi le PSR GSR et pourquoi c'est important ?",
    a: "Le PSR GSR, c'est le processus par lequel on identifie tous les produits qui sont hors collection, des pièces qui ne correspondent plus à la saison en cours, et qu'on renvoie à l'entrepôt central. C'était l'alternante qui s'en occupait, mais après son départ, Constantin s'est emparé de la mission et à l'aide de ses collègues, ils ont réussi à renvoyer le plus de pièces possibles et inimaginables.",
    audio: "/polo-q2.mp3",
  },
  {
    q: "Quelle est la difference entre Polo Ralph Lauren et Purple Label ?",
    a: "Est-ce que vous avez du Purple Label ? Une des questions qui revenait au moins deux fois par semaine. C'est une question à laquelle il a dû répondre mille et une fois, mais concrètement quelle est la vraie différence ? Polo Ralph Lauren, c'est l'ADN de la maison, le casual chic américain, accessible, iconique. Purple Label, c'est le summum, des costumes tailles sur mesure dans les meilleures étoffes, pour une clientèle d'exception.",
    audio: "/polo-q3.mp3",
  },
  {
    q: "C'est quoi une journee type à la boutique de la Madeleine ?",
    a: "La journée de Constantin commence généralement à 11 heures. Après avoir salué l'équipe, un brief est organisé par l'un des trois managers afin de faire le point sur les résultats de la veille et de fixer les objectifs de la journée. Une fois le brief terminé, chacun rejoint son poste sur le floor. Selon les besoins, Constantin peut commencer par le réassort, puis accueillir les clients, les orienter vers les différents univers de la boutique, Sportswear, Femme, Casual. Après sa pause, lorsque l'activité le permet, il peut également passer sur d'autres missions comme le PSR, le GSR ou donner un coup de main au stock. À partir de 17 heures, lorsque l'affluence augmente, la priorité est claire : retour sur le floor pour accompagner au maximum les vendeurs et les clients. Enfin, une dizaine de minutes avant la fermeture, place au réassort et au rangement du floor. Une fois la boutique remise en ordre, la journée de Constantin se termine.",
    audio: "/polo-q4.mp3",
  },
  {
    q: "Est-ce qu'il y a eu des moments difficiles ?",
    a: "Oui, clairement. Le plus difficile pour Constantin a surtout été de trouver ses repères au début, notamment pendant les périodes de forte affluence. Il fallait rester efficace, accueillir plusieurs clients, comprendre rapidement leurs attentes et parfois gérer plusieurs demandes en même temps click and collecte, demande de taille sur un article, réassort. Mais avec le temps et l'expérience, il a appris à mieux gérer la pression et surtout à garder la même qualité de service, même dans les moments les plus intenses.",
    audio: "/polo-q5.mp3",
  },
  {
    q: "Comment il se sentait le premier jour ?",
    a: "Le premier jour, Constantin était forcément un peu stressé, il était arrivé trente minutes en avance et heureusement pour lui, il a vu son tuteur de stage à l'extérieur donc a très vite pu compter sur lui pour commencer à bien ce stage, mais avant tout ça, il était très impatient. Il découvrait un nouvel environnement, une nouvelle équipe et le retail chez Ralph Lauren. Il avait envie de bien faire et de montrer rapidement ce dont il était capable. Avec le recul, ce premier jour a surtout marqué le début d'une vraie évolution au fil du stage.",
    audio: "/polo-q6.mp3",
  },
  {
    q: "Referais t'il ce stage s'il pouvait revenir en arrière ?",
    a: "Sans aucune hésitation. Si c'était à refaire, il le referait mille fois. L'équipe a été formidable du début à la fin, et les moments partagés avec les clients ont rendu chaque journée mémorable et différente. Il a aussi particulièrement apprécié l'atmosphère de la boutique, à la fois dynamique, élégante et humaine. Il était heureux de pousser les portes de la boutique de la Madeleine chaque matin. Au final, ce stage lui a apporté bien plus qu'une expérience professionnelle : de vrais souvenirs et de belles rencontres.",
    audio: "/polo-q7.mp3",
  },
  {
    q: "Où se voit il dans 5 ans ?",
    a: "Dans cinq ans, Constantin n'a pas encore de plan totalement défini, et c'est peut-être ce qui lui plaît. Il a une idée assez claire de la direction : évoluer dans le luxe, avec pourquoi pas l'objectif de devenir Brand Manager. Son stage lui a surtout confirmé qu'il apprécie énormément le retail et le contact avec les clients. Il sait qu'il lui reste encore beaucoup à découvrir et à apprendre. Mais une chose est certaine : dans cinq ans, il se voit probablement loin. Loin de Paris. Toujours avec cette envie de construire son parcours à l'international.",
    audio: "/polo-q8.mp3",
  },
  {
    q: "Un conseil pour un futur stagiaire chez Ralph Lauren ?",
    a: "Le premier conseil de Constantin serait de ne surtout pas avoir peur de poser des questions, soit curieux. Au début, tout va très vite et il y a énormément de choses à apprendre, mais tiens le coup et apprend tout ce que t'as à apprendre. Il te conseille aussi d'observer les vendeurs, d'être attentif aux clients et de toujours proposer son aide, même pour les petites tâches. Et surtout, de profiter de l'expérience : l'équipe, les clients, l'ambiance… parce qu'au final, ce sont ces moments-là qui rendent le stage vraiment mémorable. Fais le même si t'es pas prêt, c'est ce qui va t'emmener loin.",
    audio: "/polo-q9.mp3",
  },
  {
    q: "Que se passe-t-il apres la fermeture de la boutique ?",
    a: "Je ne suis pas autorise à divulguer cette information. Certaines choses restent confidentielles.",
    audio: "/polo-q10.mp3",
    secret: true,
  },
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeQ, setActiveQ] = useState<number | null>(null);
  const [introduced, setIntroduced] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIntroduced(true);
      const audio = new Audio("/polo-intro.mp3");
      audio.play();
      setCurrentAudio(audio);
    }, 400);
  };

  const handleClose = () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    setIsOpen(false);
    setActiveQ(null);
    setIntroduced(false);
    setCurrentAudio(null);
  };

  const handleQuestion = (i: number) => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    setActiveQ(i);
    const audio = new Audio(QA[i].audio);
    audio.play();
    setCurrentAudio(audio);
  };

  return (
    <>
      <motion.button
        id="polo-trigger"
        onClick={handleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden fixed bottom-8 right-8 z-[200]"
      >
        POLO
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[300] flex items-end md:items-center justify-center md:justify-end p-4 md:p-8"
            style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}
            onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
          >
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 60, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-[620px] bg-[#050505] border border-white/10 shadow-2xl flex flex-col"
              style={{ maxHeight: "88vh" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img src="/polo-player.png" alt="POLO" className="w-6 h-6 object-contain brightness-0 invert" />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-blue-400">POLO</p>
                    <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-neutral-500">Assistant de Constantin</p>
                  </div>
                </div>
                <button onClick={handleClose} className="text-neutral-500 hover:text-white transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4" style={{ scrollbarWidth: "none" as const }}>
                <AnimatePresence>
                  {introduced && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex gap-3"
                    >
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <img src="/polo-player.png" alt="POLO" className="w-6 h-6 object-contain brightness-0 invert" />
                      </div>
                      <div className="bg-white/5 border border-white/10 px-4 py-3 max-w-[85%]">
                        <p className="font-serif text-sm text-white/80 leading-relaxed font-light">
                          Bonjour, je suis <span className="text-blue-400 font-normal">POLO</span>, l'assistant de Constantin. Je reponds a sa place sur son experience chez Ralph Lauren. Choisissez une question ci-dessous.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {activeQ !== null && (
                    <>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex justify-end"
                      >
                        <div className="bg-white/10 border border-white/10 px-4 py-3 max-w-[85%]">
                          <p className="font-sans text-xs text-white leading-relaxed">
                            {QA[activeQ].q}
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex gap-3"
                      >
                        <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 mt-1">
                          <img src="/polo-player.png" alt="POLO" className="w-5 h-5 object-contain brightness-0 invert" />
                        </div>
                        <div className={`border px-4 py-3 max-w-[85%] ${QA[activeQ].secret ? "border-blue-400/20 bg-blue-400/5" : "bg-white/5 border-white/10"}`}>
                          <p className={`font-serif text-sm leading-relaxed font-light ${QA[activeQ].secret ? "text-blue-400 italic" : "text-white/80"}`}>
                            {QA[activeQ].a}
                          </p>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Questions */}
              <div className="border-t border-white/10 px-4 py-4 space-y-2" style={{ maxHeight: "280px", overflowY: "auto", scrollbarWidth: "none" as const }}>
                <p className="text-[9px] font-sans tracking-[0.25em] uppercase text-neutral-600 mb-3 px-2">
                  Questions suggerees
                </p>
                {QA.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuestion(i)}
                    className={`w-full text-left px-4 py-2.5 border transition-all duration-200 ${
                      activeQ === i
                        ? "border-blue-400/50 bg-blue-400/5 text-blue-400"
                        : item.secret
                        ? "border-white/5 text-neutral-600 hover:border-blue-400/20 hover:text-blue-400/60"
                        : "border-white/10 text-neutral-400 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <p className="font-sans text-[11px] leading-relaxed">
                      {item.secret ? "🔒 " : ""}{item.q}
                    </p>
                  </button>
                ))}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
