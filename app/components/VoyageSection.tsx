"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const competences = [
  { label: "Accueil & conseil client", level: 90 },
  { label: "Techniques de vente", level: 85 },
  { label: "Merchandising visuel", level: 80 },
  { label: "Gestion du stock & réassort", level: 90 },
  { label: "Click & Collect", level: 99 },
  { label: "Connaissance produit Polo RL", level: 95 },
  { label: "Travail en équipe", level: 90 },
  { label: "Gestion du stress & rush", level: 80 },
];

const galleryPhotos = [
  { src: "/gallery-1.jpg", alt: "Galerie 1", layout: "md:col-start-1 md:col-span-3 md:row-start-1" },
  { src: "/gallery-2.jpg", alt: "Galerie 2", layout: "md:col-start-4 md:col-span-3 md:row-start-1" },
  { src: "/gallery-3.jpg", alt: "Galerie 3", layout: "md:col-start-7 md:col-span-3 md:row-start-1" },
  { src: "/gallery-4.jpg", alt: "Galerie 4", layout: "md:col-start-10 md:col-span-3 md:row-start-1" },
  { src: "/gallery-5.jpg", alt: "Galerie 5", layout: "md:col-start-1 md:col-span-3 md:row-start-2" },
  { src: "/gallery-6.jpg", alt: "Une rencontre importante", layout: "md:col-start-10 md:col-span-3 md:row-start-2" },
  { src: "/gallery-7.jpg", alt: "Galerie 7", layout: "md:col-start-1 md:col-span-3 md:row-start-3" },
  { src: "/gallery-8.jpg", alt: "Galerie 8", layout: "md:col-start-10 md:col-span-3 md:row-start-3" },
  { src: "/gallery-9.jpg", alt: "Galerie 9", layout: "md:col-start-4 md:col-span-6 md:row-start-4" },
];

const tributeImages = [
  { src: "/dedicace-1.jpg", alt: "Souvenir 1" },
  { src: "/dedicace-2.jpg", alt: "Souvenir 2" },
  { src: "/dedicace-3.jpg", alt: "Souvenir 3" },
  { src: "/dedicace-4.jpg", alt: "Souvenir 4" },
];

export default function VoyageSection() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const [showTribute, setShowTribute] = useState(false);

  return (
    <section id="voyage" className="relative border-b border-white/10 bg-[#050505]">
      {/* HEADER */}
      <div className="px-6 md:px-24 pt-28 pb-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="block text-[10px] font-sans tracking-[0.4em] uppercase text-neutral-500 mb-4"
        >
          VI · Retour de Voyage
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-serif text-5xl sm:text-6xl md:text-8xl text-white font-light tracking-tight leading-none mb-6"
        >
          Bilan
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="pinyon text-4xl sm:text-5xl md:text-7xl text-neutral-400 font-light"
        >
          On ne revient jamais vraiment inchangé.
        </motion.p>
      </div>

      {/* TEXTE BILAN */}
      <div className="px-6 md:px-24 pb-24 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-600 block mb-8">
              CE QUE CE STAGE M'A APPRIS
            </span>

            <p className="font-serif text-xl md:text-2xl text-white font-light leading-relaxed">
              Trois mois. Douze semaines. Quatre-vingt-quatre jours à pousser les portes de la boutique de Madeleine avec la même impatience que le premier jour. Ce stage m'a appris que le luxe ne se résume pas à un produit ou à un prix, c'est une expérience exclusive, une attention portée à chaque détail, à chaque client, à chaque rencontre.
            </p>

            <p className="font-serif text-xl md:text-2xl text-neutral-400 font-light leading-relaxed mt-6">
              J'arrivais avec des connaissances théoriques, je repars avec quelque chose de plus concret : une posture professionnelle, une vision du commerce observée d'un autre point de vue et un rythme de vie qu'aucun cours ne peut nous préparer. Ralph Lauren m'a appris que l'excellence n'est pas un effort ponctuel, c'est une habitude.
            </p>
          </motion.div>

          {/* COMPETENCES */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-600 block mb-8">
              COMPÉTENCES ACQUISES
            </span>

            <div className="space-y-5">
              {competences.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                      {c.label}
                    </span>

                    <span className="font-mono text-[10px] text-blue-400">
                      {c.level}%
                    </span>
                  </div>

                  <div className="w-full h-[1px] bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${c.level}%` }}
                      transition={{
                        duration: 1.2,
                        delay: i * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      viewport={{ once: true }}
                      className="h-full bg-blue-400"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* PROJECTION PRO */}
      <div className="px-6 md:px-24 pb-24 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-600 block mb-8">
            PROJECTION PROFESSIONNELLE
          </span>

          <h3 className="font-serif text-4xl md:text-6xl text-white font-light leading-tight mb-8">
            Brand Manager.
            <br />
            <span className="text-neutral-500">À l'international.</span>
          </h3>

          <p className="font-serif text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
            Ce stage a confirmé mon envie d'évoluer dans l'univers du luxe, pas seulement le vendre, mais le construire. Devenir Brand Manager, c'est être celui qui pense la stratégie, qui construit l'identité d'une marque, qui crée les expériences que les clients viennent chercher. Ralph Lauren n'aura été que le premier chapitre d'un voyage qui ne fait que commencer.
          </p>
        </motion.div>
      </div>

      {/* GALERIE PHOTO */}
      <div className="border-t border-white/10 pt-20 pb-24 px-6 md:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-600 block mb-3">
            EN IMAGES
          </span>

          <h3 className="font-serif text-4xl md:text-6xl text-white font-light">
            Trois mois en coulisses
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:grid-rows-[190px_280px_280px_190px]">
          {/* PHOTO PRINCIPALE AU CENTRE */}
          <motion.button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage({
                src: "/gallery-main.jpg",
                alt: "The art of doing it anyway",
              });
            }}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            className="group relative col-span-2 overflow-hidden md:col-start-4 md:col-span-6 md:row-start-2 md:row-span-2"
          >
            <img
              src="/gallery-main.jpg"
              alt="The art of doing it anyway"
              className="h-[62vh] w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105 md:h-full"
            />

            <div
              className="absolute inset-x-0 bottom-0 p-6"
              style={{
                background: "linear-gradient(transparent, rgba(5,5,5,0.9))",
              }}
            >
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/80">
                The art of doing it anyway
              </p>
            </div>

            <span className="absolute right-4 top-4 font-mono text-[9px] tracking-[0.2em] text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              AGRANDIR +
            </span>
          </motion.button>

          {/* PHOTOS AUTOUR */}
          {galleryPhotos.map((photo, index) => (
            <motion.button
              key={photo.src}
              type="button"
              onClick={(event) => {
                event.stopPropagation();

                if (photo.src === "/gallery-6.jpg") {
                  setShowTribute(true);
                  return;
                }

                setSelectedImage({
                  src: photo.src,
                  alt: photo.alt,
                });
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden ${photo.layout}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-44 w-full object-cover object-center transition-transform duration-700 group-hover:scale-110 md:h-full"
              />

              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />

              <span className="absolute bottom-3 left-3 font-mono text-[8px] tracking-[0.2em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {photo.src === "/gallery-6.jpg" ? "DÉCOUVRIR +" : "OUVRIR +"}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* PHOTO AGRANDIE */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-6 md:p-16"
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] text-white/70 transition-colors hover:text-white"
            >
              FERMER LA PHOTO ×
            </button>

            <motion.img
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[85vh] max-w-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* DÉDICACE — GALLERY 6 */}
      <AnimatePresence>
        {showTribute && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] overflow-y-auto bg-[#050505] px-6 py-16 md:px-24 md:py-24"
          >
            <button
              type="button"
              onClick={() => setShowTribute(false)}
              className="fixed bottom-8 left-1/2 z-[120] -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] text-white/70 transition-colors hover:text-white"
            >
              RETOUR AU RAPPORT ×
            </button>

            <div className="mx-auto max-w-6xl pb-24">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-5 font-mono text-[10px] tracking-[0.4em] uppercase text-blue-400"
              >
                UNE RENCONTRE IMPORTANTE
              </motion.p>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-5xl font-light leading-none text-white md:text-8xl"
              >
                Plus qu'une
                <br />
                <span className="text-neutral-500">collègue.</span>
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-10 max-w-2xl font-serif text-xl font-light leading-relaxed text-neutral-300 md:text-2xl"
              >
                Ce stage m'a appris beaucoup de choses, mais il m'a aussi offert
                de très belles rencontres. Parmi elles, il y en a une qui a
                rendu chaque journée plus légère, plus drôle et plus mémorable.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-6 max-w-2xl font-serif text-lg font-light leading-relaxed text-neutral-500 md:text-xl"
              >
                Merci pour les fous rires, les conseils, les moments de stress
                partagés et tous ces petits souvenirs qui ont fait de cette
                expérience quelque chose de bien plus personnel qu'un simple
                stage. Tu as vraiment compté dans cette aventure.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.35 }}
                className="relative mt-16 overflow-hidden"
              >
                <img
                  src="/gallery-6.jpg"
                  alt="Une rencontre importante"
                  className="h-[65vh] w-full object-cover object-center md:h-[80vh]"
                />

                <div
                  className="absolute inset-x-0 bottom-0 p-8 md:p-12"
                  style={{
                    background: "linear-gradient(transparent, rgba(5,5,5,0.95))",
                  }}
                >
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/70">
                    Madeleine · Été 2026
                  </p>
                </div>
              </motion.div>

              <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                {tributeImages.map((image, index) => (
                  <motion.div
                    key={image.src}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 + index * 0.1 }}
                    className="overflow-hidden"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-56 w-full object-cover object-center transition-transform duration-700 hover:scale-105 md:h-72"
                    />
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="mt-16 text-center font-serif text-2xl italic text-neutral-400 md:text-3xl"
              >
                À toi, à nos souvenirs et à cette aventure.
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CLOSING VISUEL — LOGO RL */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center py-48 md:py-56 border-t border-white/10"
      >
        <img
          src="/polo-player.png"
          alt="Ralph Lauren"
          className="h-40 md:h-48 w-auto object-contain opacity-35 invert mb-10"
        />

        <p className="font-mono text-xs md:text-sm tracking-[0.5em] uppercase text-neutral-500">
          PARIS · MADELEINE · 2026
        </p>

        <p className="font-serif text-lg md:text-xl text-neutral-500 mt-4 italic">
          Constantin LESLEY JEYAKANTHAN · ISG Luxury Program
        </p>
      </motion.div>
    </section>
  );
}
