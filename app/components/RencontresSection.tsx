"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const interviews = [
  {
    id: "leo",
    firstName: "Léo",
    lastName: "Szymanski-Foucault",
    age: "24 ans",
    role: "Vendeur senior · Ralph Lauren Madeleine",
    image: "/leo.jpg",
    number: "DOSSIER 01",
    cardLine: "Explorer sa vision du lien client.",
    intro:
      "Un regard sur le métier, le client et l’importance du lien créé en boutique.",
    questions: [
      {
        question:
          "Quelles sont les particularités d’un vendeur senior comparé à un vendeur junior ?",
        answer:
          "Un vendeur senior doit faire plus que de la vente. Il connaît les différents process de la boutique, ainsi que les spécificités légales qui encadrent une vente. Il doit aussi savoir créer et développer un portefeuille client, sans pour autant négliger les autres tâches nécessaires au bon fonctionnement de la boutique.",
      },
      {
        question:
          "Parmi les différents univers de la maison, dans lequel êtes-vous le plus à l’aise ?",
        answer:
          "Je suis particulièrement à l’aise dans l’univers du casual chic : les pulls câble, les quarter zips, le cachemire, les chinos ou encore les pantalons de costume décontractés. J’aime la versatilité des looks que l’on peut créer autour de ces pièces.",
      },
      {
        question: "Comment l’équipe s’organise-t-elle pendant une journée normale ?",
        answer:
          "Le matin, nous nous réunissons pour un brief sur les chiffres réalisés la veille, l’objectif du jour et les informations importantes concernant la marque ou la boutique : nouvelles collections, arrivages ou nouveautés produits.",
      },
      {
        question: "Comment proposez-vous des pièces complémentaires ?",
        answer:
          "Il faut l’amener de manière naturelle, spontanée et toujours cohérente avec les pièces déjà essayées. Si un client essaie une chemise, on peut lui proposer une cravate ou une veste. S’il essaie un pantalon, une ceinture peut naturellement compléter la silhouette.",
      },
      {
        question:
          "Qu’est-ce qui vous semble le plus important dans l’expérience client Ralph Lauren ?",
        answer:
          "Le plus important, c’est la connexion et le lien que l’on crée avec le client. L’idée n’est pas simplement d’avoir un rapport vendeur-client, mais une relation plus humaine, faite d’écoute, de compréhension et d’émotion. Le but n’est pas uniquement de conclure une vente, mais de créer un moment privilégié.",
      },
    ],
  },
  {
    id: "celine",
    firstName: "Céline",
    lastName: "Cheung",
    age: "24 ans",
    role: "Vendeuse junior · Ralph Lauren Madeleine",
    image: "/celine.jpg",
    imagePosition: "object-[center_30%]",
    number: "DOSSIER 02",
    cardLine: "Découvrir son cheminement vers la confiance.",
    intro:
      "Un regard sur l’apprentissage, la confiance en soi et l’attention portée à chaque client.",
    questions: [
      {
        question: "Est-ce que votre manière de vendre a évolué depuis vos débuts ?",
        answer:
          "Oui, ma manière de vendre a beaucoup évolué. Au début, j’ai ressenti un certain syndrome de l’imposteur : je ne connaissais pas encore assez les produits, leur histoire ou les valeurs de la maison, ce qui pouvait me faire manquer de confiance. Avec l’onboarding, les formations, les ressources internes et les échanges avec les équipes, j’ai progressivement développé mes connaissances et mon assurance. Aujourd’hui, je suis plus proactive, plus à l’aise pour aller vers le client, poser des questions et proposer des solutions en m’appuyant aussi sur mon propre regard.",
      },
      {
        question:
          "Qu’est-ce qui fait qu’un client garde un bon souvenir de son passage en boutique ?",
        answer:
          "L’accueil est essentiel, car il représente la première impression donnée au client. Il faut ensuite savoir s’adapter à sa personnalité et à ses attentes. Même sans achat, l’important est qu’il reparte après avoir passé un bon moment, en se sentant écouté, respecté et bien accompagné. C’est ce qui permet de créer une relation de confiance et une expérience durable.",
      },
      {
        question:
          "Comment apprenez-vous à bien connaître les nouvelles collections et les produits ?",
        answer:
          "La diversité des méthodes d’apprentissage est essentielle. Les briefs du matin, les mini-workshops, les présentations de collections ou les vidéos de défilés permettent de mieux comprendre l’univers de la maison. Lorsqu’une collection arrive, nous pouvons aussi faire nos propres recherches sur les matières, les textures, les couleurs ou les prix. Je complète cela avec les formations, les échanges avec mes collègues, l’observation des produits et les retours des clients.",
      },
      {
        question: "Quelles sont les qualités qu’un vendeur doit mettre en avant ?",
        answer:
          "La proactivité est essentielle : elle permet de ne pas seulement attendre une demande, mais d’aller vers le client, d’anticiper ses besoins et de créer des opportunités. Elle doit cependant être accompagnée d’écoute et d’adaptation, pour trouver le juste équilibre entre être présent et laisser son espace au client. La curiosité, l’empathie et la confiance en soi sont également indispensables pour créer une relation de confiance et donner envie au client de revenir.",
      },
    ],
  },
  {
    id: "gregoire",
    firstName: "Grégoire",
    lastName: "Plagnol",
    age: "24 ans",
    role: "Vendeur junior · Ralph Lauren Madeleine",
    image: "/gregoire.jpg",
    number: "DOSSIER 03",
    cardLine: "Observer sa manière de rassurer le client.",
    intro:
      "Un regard sur l’écoute, l’entraide et la manière d’accompagner chaque hésitation.",
    questions: [
      {
        question: "Comment gérez-vous un client qui hésite ?",
        answer:
          "Lorsqu’un client hésite, j’essaie de lui donner davantage d’informations sur le produit et de lui montrer comment il pourrait le porter. Je peux lui proposer différentes associations ou plusieurs tenues afin de l’aider à se projeter. Je prends en compte son style, ses besoins et les indications qu’il me donne. S’il reste indécis, je préfère ne pas forcer la vente : il vaut mieux lui laisser le temps de réfléchir que provoquer un achat qu’il pourrait regretter.",
      },
      {
        question:
          "Qu’est-ce qui peut influencer vos performances sur une journée ?",
        answer:
          "Le flux de clients influence naturellement les occasions de vente, mais la qualité des échanges compte tout autant. Une bonne conversation permet de mieux comprendre les attentes et de proposer des produits adaptés. L’ambiance au sein de l’équipe joue aussi un rôle essentiel : une équipe dynamique, disponible et solidaire permet de rester motivé et d’offrir une meilleure expérience aux clients.",
      },
      {
        question:
          "Comment vous entraidez-vous lorsqu’un collègue est occupé avec un client ?",
        answer:
          "L’entraide se fait spontanément : replier ou ranger des articles, effectuer le réassort, chercher une taille ou récupérer un produit demandé. Cela permet au vendeur de rester concentré sur son client et d’éviter une attente trop longue. L’objectif reste collectif : assurer un floor fluide et un service de qualité pour chacun.",
      },
      {
        question: "Qu’est-ce qui peut donner envie à un client de revenir ?",
        answer:
          "Le client peut revenir grâce à la qualité de l’échange avec son conseiller. Le feeling, l’écoute et l’ambiance générale peuvent lui laisser un souvenir positif. Une pièce peut aussi lui rester en tête, même sans achat immédiat. Il revient autant pour les produits que pour retrouver un accueil, des conseils personnalisés et une expérience dans laquelle il s’est senti à l’aise.",
      },
    ],
  },
];

export default function RencontresSection() {
  const [selectedInterview, setSelectedInterview] = useState<
    (typeof interviews)[number] | null
  >(null);

  return (
    <section
      id="rencontres"
      className="relative overflow-hidden border-b border-white/10 bg-[#050505] px-6 py-28 md:px-24 md:py-36"
    >
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <span className="block text-[10px] uppercase tracking-[0.42em] text-neutral-500">
          V · Rencontres
        </span>

        <div className="mt-8 max-w-5xl">
          <h2 className="font-serif text-5xl font-light leading-[0.9] text-white md:text-8xl">
            Les voix
            <br />
            <span className="text-neutral-500">de la Madeleine.</span>
          </h2>

          <p className="mt-10 max-w-2xl font-serif text-lg font-light leading-relaxed text-neutral-400 md:text-xl">
            Derrière un stage, il y a une équipe. Une équipe avec qui l’on
            apprend, avec qui l’on rigole, et qui rend chaque journée
            différente. Ces dossiers donnent la parole à ceux qui font vivre la
            boutique au quotidien.
          </p>
        </div>

        <div className="mt-24">
          <p className="mb-8 text-[10px] uppercase tracking-[0.4em] text-neutral-600">
            Dossiers de l’équipe
          </p>

          <div className="grid gap-6 lg:grid-cols-2">
            {interviews.map((interview, index) => (
              <motion.button
                key={interview.id}
                type="button"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                onClick={() => setSelectedInterview(interview)}
                className={`group relative min-h-[520px] w-full overflow-hidden border border-white/15 bg-[#080808] text-left transition-colors hover:border-[#4c9ce9]/70 ${
                  index === 2
                    ? "lg:col-span-2 lg:mx-auto lg:w-[calc(50%-0.75rem)]"
                    : ""
                }`}
              >
                <div className="absolute inset-0">
                  <img
                    src={interview.image}
                    alt={`${interview.firstName} ${interview.lastName}`}
                    className="h-full w-full object-cover object-center grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
                </div>

                <div className="relative flex min-h-[520px] flex-col justify-end p-7 md:p-10">
                  <div className="mb-auto flex items-start justify-between">
                    <span className="text-[10px] uppercase tracking-[0.35em] text-white/55">
                      {interview.number}
                    </span>

                    <span className="rounded-full border border-[#4c9ce9]/50 px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-[#67b3ff]">
                      Entretien
                    </span>
                  </div>

                  <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#67b3ff]">
                    Entretien enregistré
                  </p>

                  <h3 className="font-serif text-5xl font-light leading-[0.9] text-white md:text-6xl">
                    {interview.firstName}
                    <br />
                    <span className="text-neutral-400">
                      {interview.lastName}.
                    </span>
                  </h3>

                  <p className="mt-6 text-[10px] uppercase tracking-[0.28em] text-neutral-400">
                    {interview.age} · {interview.role}
                  </p>

                  <div className="mt-10 flex items-center justify-between border-t border-white/15 pt-5">
                    <span className="font-serif text-base italic text-neutral-400">
                      {interview.cardLine}
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.28em] text-white transition group-hover:text-[#67b3ff]">
                      Consulter le dossier →
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedInterview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] overflow-y-auto bg-[#050505]"
          >
            <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-16 md:py-24">
              <button
                type="button"
                onClick={() => setSelectedInterview(null)}
                className="absolute right-6 top-8 border-b border-white/30 pb-2 text-[10px] uppercase tracking-[0.28em] text-neutral-400 transition hover:border-[#67b3ff] hover:text-[#67b3ff] md:right-16 md:top-14"
              >
                ← Retour aux dossiers
              </button>

              <div className="grid gap-12 border-b border-white/10 pb-16 pt-16 md:grid-cols-[0.85fr_1.15fr] md:items-end md:pt-10">
                <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
                  <img
                    src={selectedInterview.image}
                    alt={`${selectedInterview.firstName} ${selectedInterview.lastName}`}
                    className="h-full w-full object-cover grayscale"
                  />

                  <span className="absolute bottom-5 left-5 text-[9px] uppercase tracking-[0.35em] text-white/50">
                    Ralph Lauren Madeleine
                  </span>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[#67b3ff]">
                    Regard croisé
                  </p>

                  <h2 className="mt-8 font-serif text-6xl font-light leading-[0.88] text-white md:text-8xl">
                    {selectedInterview.firstName}
                    <br />
                    <span className="text-neutral-500">
                      {selectedInterview.lastName}.
                    </span>
                  </h2>

                  <p className="mt-8 text-[10px] uppercase tracking-[0.32em] text-neutral-400">
                    {selectedInterview.age} · {selectedInterview.role}
                  </p>

                  <p className="mt-10 max-w-xl font-serif text-2xl font-light leading-relaxed text-neutral-300 md:text-3xl">
                    {selectedInterview.intro}
                  </p>
                </div>
              </div>

              <div className="mt-20 space-y-20">
                {selectedInterview.questions.map((item, index) => (
                  <motion.article
                    key={item.question}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    className="grid gap-7 md:grid-cols-[140px_1fr]"
                  >
                    <span className="text-[10px] tracking-[0.35em] text-[#67b3ff]">
                      0{index + 1}
                    </span>

                    <div className="border-l border-white/10 pl-6 md:pl-10">
                      <h3 className="max-w-3xl font-serif text-3xl font-light leading-tight text-white md:text-4xl">
                        {item.question}
                      </h3>

                      <p className="mt-8 max-w-3xl text-justify font-serif text-lg font-light leading-relaxed text-neutral-400 md:text-xl">
                        {item.answer}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>

              <div className="mt-28 border-t border-white/10 pt-10 text-center">
                <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-600">
                  Ralph Lauren · Madeleine · Paris
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedInterview(null)}
                  className="mt-10 inline-flex items-center gap-3 border-b border-white/30 pb-2 text-[10px] uppercase tracking-[0.32em] text-neutral-300 transition hover:border-[#67b3ff] hover:text-[#67b3ff]"
                >
                  ← Retour aux dossiers
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
