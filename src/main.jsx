import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BatteryCharging,
  ChevronRight,
  CircleDot,
  Crown,
  Gamepad2,
  HeartPulse,
  MapPin,
  Medal,
  Menu,
  Mic2,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Star,
  TicketCheck,
  Trophy,
  Users,
  Wifi,
  X,
  Zap,
} from "lucide-react";
import "./styles.css";

const translations = {
  en: {
    nav: {
      home: "Home",
      editions: "Editions",
      rankings: "Rankings",
      tournament: "Tournament",
      history: "History",
      safety: "Safety",
      sponsors: "Sponsors",
      join: "Join Tournament",
      menu: "Toggle navigation",
      homeAria: "MOZPLAY Arena home",
      language: "Select language",
    },
    hero: {
      badge: "Tete Chapter opens 2026",
      title: "Mozambique’s Gaming Journey",
      highlight: "Starts Here",
      subtitle:
        "Tete → Maputo → Beira. Three cities. One arena. A new generation of players, creators, and champions.",
      primaryCta: "Join Tournament",
      secondaryCta: "Explore Editions",
      signal: "National Signal",
      mapTitle: "Arena Map",
      stats: [
        { value: "3", label: "Cities" },
        { value: "12+", label: "Matches" },
        { value: "1", label: "National Champion" },
        { value: "2026", label: "First Edition" },
      ],
    },
    editions: {
      eyebrow: "City Chapters",
      title: "Three editions. One national movement.",
      text: "Each city has its own mood, audience, and route into the MOZPLAY Arena story.",
      view: "View Edition",
      cards: [
        {
          title: "The Origin",
          badge: "First Stop",
          description:
            "The launch city for raw talent, mobile gaming, and the community players who ignite Mozambique’s first arena chapter.",
          focus: ["First edition", "Tournament launch city", "Community players"],
        },
        {
          title: "The Capital Stage",
          badge: "Coming Next",
          description:
            "A bigger stage built for creators, sponsor activations, livestreams, and a premium esports culture moment.",
          focus: ["Creator showcases", "Sponsor village", "Livestream stage"],
        },
        {
          title: "The Coastal Showdown",
          badge: "Future Edition",
          description:
            "Festival energy meets last-chance qualifiers in a coastal celebration of gaming lifestyle, music, and community.",
          focus: ["Music energy", "Final qualifiers", "Lifestyle festival"],
        },
      ],
    },
    rankings: {
      eyebrow: "Arena Database",
      title: "A futuristic national esports ranking system.",
      text: "Prototype standings transform local hype into a visible competitive ladder for players, teams, and future champions.",
      topPlayers: "Top Players",
      liveConcept: "Live concept",
      points: "pts",
      risingStar: "Rising Star",
      risingText:
        "A Tete mobile player climbing fast through open qualifiers with fearless late-game rotations.",
      teamRankings: "Team Rankings",
      rankTiers: "Rank Tiers",
      tiers: ["Bronze", "Silver", "Elite", "National Contender", "Arena Champion"],
    },
    tournament: {
      eyebrow: "First Edition Tournament",
      title: "Open qualifiers built for Mozambique’s next champions.",
      text: "The Tete launch creates a clear path from registration to finals stage with modern brackets and memorable awards.",
      featuredGames: "Featured Games",
      featuresTitle: "Tournament Features",
      features: [
        "Open qualifiers",
        "Team registration",
        "Live brackets",
        "Finals stage",
        "MVP awards",
      ],
      roadTitle: "Road to National Finals",
      road: ["Register", "Qualify", "Compete", "Become Champion"],
    },
    history: {
      eyebrow: "History of the Arena",
      title: "A future legacy, written one city at a time.",
      text: "MOZPLAY Arena begins as a spark and is designed to become a national archive of champions, moments, and community pride.",
      future: "Future",
      items: [
        {
          year: "2026",
          title: "The First Spark",
          text: "Tete hosts the first MOZPLAY tournament.",
        },
        {
          year: "2027",
          title: "The Movement Grows",
          text: "Maputo joins the arena.",
        },
        {
          year: "2028",
          title: "The Coastal Showdown",
          text: "Beira brings festival energy.",
        },
        {
          year: "Future",
          title: "National Finals",
          text: "Mozambique crowns its national champion.",
        },
      ],
      hall: "Hall of Champions",
      loading: "First name loading...",
      archive:
        "A premium archive for winners, MVPs, team captains, and the players who define each chapter.",
      moments: [
        "Biggest comeback",
        "First champion",
        "Crowd favorite",
        "Rising star story",
      ],
      placeholder: "Placeholder story card",
    },
    safety: {
      eyebrow: "Trust & Safety",
      title: "Built for safe, credible, family-aware events.",
      text: "Professional event operations help communities, parents, players, and sponsors trust every MOZPLAY Arena chapter.",
      description:
        "Clear protocols, visible staff, and transparent communication across the venue experience.",
      items: [
        "Verified QR ticketing",
        "Controlled safe venues",
        "Security staff",
        "Medical support",
        "Family-friendly hours",
        "Anti-harassment policy",
      ],
    },
    sponsors: {
      eyebrow: "Sponsor Opportunities",
      title: "Partner with Mozambique’s emerging gaming movement.",
      text: "MOZPLAY Arena creates room for brands to show up through infrastructure, content, prizes, creators, and fan experiences.",
      cards: [
        {
          title: "Telecom Partner",
          text: "Power connectivity, streams, and fan engagement.",
        },
        {
          title: "Gaming Gear Partner",
          text: "Equip player stations and premium demo zones.",
        },
        {
          title: "Banking/Fintech Partner",
          text: "Support ticketing, prizes, and youth finance.",
        },
        {
          title: "Energy Drink Partner",
          text: "Fuel high-energy moments and creator content.",
        },
        {
          title: "Creator Partner",
          text: "Amplify stories through streamers and hosts.",
        },
      ],
      ctaTitle: "Ready to power the arena?",
      ctaText:
        "Create memorable experiences, support youth talent, and connect with Mozambique’s next generation of digital culture.",
      ctaButton: "Become a Sponsor",
    },
    footer: {
      tagline: "Where Mozambique Games.",
      copyright:
        "© 2026 MOZPLAY Arena. Prototype concept for Mozambique’s gaming movement.",
    },
  },
  pt: {
    nav: {
      home: "Início",
      editions: "Edições",
      rankings: "Classificações",
      tournament: "Torneio",
      history: "História",
      safety: "Segurança",
      sponsors: "Patrocinadores",
      join: "Entrar no Torneio",
      menu: "Abrir ou fechar navegação",
      homeAria: "Início da MOZPLAY Arena",
      language: "Seleccionar idioma",
    },
    hero: {
      badge: "Capítulo de Tete abre em 2026",
      title: "A jornada gaming de Moçambique",
      highlight: "começa aqui",
      subtitle:
        "Tete → Maputo → Beira. Três cidades. Uma arena. Uma nova geração de jogadores, criadores e campeões.",
      primaryCta: "Entrar no Torneio",
      secondaryCta: "Explorar Edições",
      signal: "Sinal Nacional",
      mapTitle: "Mapa da Arena",
      stats: [
        { value: "3", label: "Cidades" },
        { value: "12+", label: "Partidas" },
        { value: "1", label: "Campeão Nacional" },
        { value: "2026", label: "Primeira Edição" },
      ],
    },
    editions: {
      eyebrow: "Capítulos por Cidade",
      title: "Três edições. Um movimento nacional.",
      text: "Cada cidade tem a sua energia, o seu público e o seu caminho dentro da história da MOZPLAY Arena.",
      view: "Ver Edição",
      cards: [
        {
          title: "A Origem",
          badge: "Primeira Paragem",
          description:
            "A cidade de lançamento para talento puro, gaming móvel e jogadores da comunidade que acendem o primeiro capítulo da arena em Moçambique.",
          focus: [
            "Primeira edição",
            "Cidade de lançamento do torneio",
            "Jogadores da comunidade",
          ],
        },
        {
          title: "O Palco da Capital",
          badge: "Em Breve",
          description:
            "Um palco maior para criadores, activações de patrocinadores, transmissões em directo e um momento premium da cultura esports.",
          focus: [
            "Mostras de criadores",
            "Aldeia de patrocinadores",
            "Palco de transmissão em directo",
          ],
        },
        {
          title: "O Duelo Costeiro",
          badge: "Edição Futura",
          description:
            "Energia de festival com qualificações de última oportunidade numa celebração costeira de lifestyle gaming, música e comunidade.",
          focus: [
            "Energia musical",
            "Qualificações finais",
            "Festival de lifestyle",
          ],
        },
      ],
    },
    rankings: {
      eyebrow: "Base de Dados da Arena",
      title: "Um sistema futurista de classificações nacionais de esports.",
      text: "Classificações-protótipo transformam a energia local numa escada competitiva visível para jogadores, equipas e futuros campeões.",
      topPlayers: "Melhores Jogadores",
      liveConcept: "Conceito ao vivo",
      points: "pts",
      risingStar: "Estrela em Ascensão",
      risingText:
        "Um jogador mobile de Tete a subir rapidamente nas qualificações abertas com rotações finais corajosas.",
      teamRankings: "Classificações de Equipas",
      rankTiers: "Níveis de Classificação",
      tiers: ["Bronze", "Prata", "Elite", "Candidato Nacional", "Campeão da Arena"],
    },
    tournament: {
      eyebrow: "Torneio da Primeira Edição",
      title: "Qualificações abertas criadas para os próximos campeões de Moçambique.",
      text: "O lançamento em Tete cria um percurso claro desde a inscrição até ao palco das finais, com brackets modernos e prémios memoráveis.",
      featuredGames: "Jogos em Destaque",
      featuresTitle: "Funcionalidades do Torneio",
      features: [
        "Qualificações abertas",
        "Inscrição de equipas",
        "Brackets ao vivo",
        "Palco das finais",
        "Prémios MVP",
      ],
      roadTitle: "Caminho até às Finais Nacionais",
      road: ["Inscrever", "Qualificar", "Competir", "Tornar-se Campeão"],
    },
    history: {
      eyebrow: "História da Arena",
      title: "Um legado futuro, escrito cidade a cidade.",
      text: "A MOZPLAY Arena começa como uma faísca e foi pensada para se tornar num arquivo nacional de campeões, momentos e orgulho comunitário.",
      items: [
        {
          year: "2026",
          title: "A Primeira Faísca",
          text: "Tete recebe o primeiro torneio MOZPLAY.",
        },
        {
          year: "2027",
          title: "O Movimento Cresce",
          text: "Maputo junta-se à arena.",
        },
        {
          year: "2028",
          title: "O Duelo Costeiro",
          text: "Beira traz energia de festival.",
        },
        {
          year: "Futuro",
          title: "Finais Nacionais",
          text: "Moçambique coroa o seu campeão nacional.",
        },
      ],
      hall: "Galeria dos Campeões",
      loading: "Primeiro nome a carregar...",
      archive:
        "Um arquivo premium para vencedores, MVPs, capitães de equipa e jogadores que definem cada capítulo.",
      moments: [
        "Maior recuperação",
        "Primeiro campeão",
        "Favorito do público",
        "História de estrela em ascensão",
      ],
      placeholder: "Cartão de história provisório",
    },
    safety: {
      eyebrow: "Confiança e Segurança",
      title: "Criado para eventos seguros, credíveis e atentos às famílias.",
      text: "Operações profissionais de evento ajudam comunidades, pais, jogadores e patrocinadores a confiar em cada capítulo da MOZPLAY Arena.",
      description:
        "Protocolos claros, equipa visível e comunicação transparente em toda a experiência no recinto.",
      items: [
        "Bilhetes QR verificados",
        "Recintos seguros e controlados",
        "Equipa de segurança",
        "Apoio médico",
        "Horários adequados para famílias",
        "Política anti-assédio",
      ],
    },
    sponsors: {
      eyebrow: "Oportunidades para Patrocinadores",
      title: "Associe-se ao movimento gaming emergente de Moçambique.",
      text: "A MOZPLAY Arena cria espaço para marcas através de infra-estrutura, conteúdos, prémios, criadores e experiências para fãs.",
      cards: [
        {
          title: "Parceiro de Telecomunicações",
          text: "Impulsiona conectividade, transmissões e envolvimento dos fãs.",
        },
        {
          title: "Parceiro de Equipamento Gaming",
          text: "Equipa estações de jogadores e zonas premium de demonstração.",
        },
        {
          title: "Parceiro Bancário/Fintech",
          text: "Apoia bilheteira, prémios e literacia financeira jovem.",
        },
        {
          title: "Parceiro de Bebida Energética",
          text: "Dá energia aos momentos intensos e ao conteúdo de criadores.",
        },
        {
          title: "Parceiro de Criadores",
          text: "Amplifica histórias através de streamers e apresentadores.",
        },
      ],
      ctaTitle: "Pronto para dar energia à arena?",
      ctaText:
        "Crie experiências memoráveis, apoie talento jovem e ligue-se à próxima geração de cultura digital em Moçambique.",
      ctaButton: "Tornar-se Patrocinador",
    },
    footer: {
      tagline: "Onde Moçambique joga.",
      copyright:
        "© 2026 MOZPLAY Arena. Conceito-protótipo para o movimento gaming de Moçambique.",
    },
  },
};

const navLinks = [
  { id: "home", labelKey: "home" },
  { id: "editions", labelKey: "editions" },
  { id: "rankings", labelKey: "rankings" },
  { id: "tournament", labelKey: "tournament" },
  { id: "history", labelKey: "history" },
  { id: "safety", labelKey: "safety" },
  { id: "sponsors", labelKey: "sponsors" },
];

const editionMeta = [
  {
    city: "Tete",
    gradient: "from-orange-400 via-amber-300 to-yellow-200",
    glow: "shadow-orange",
    icon: Zap,
  },
  {
    city: "Maputo",
    gradient: "from-fuchsia-400 via-purple-400 to-pink-300",
    glow: "shadow-glow",
    icon: RadioTower,
  },
  {
    city: "Beira",
    gradient: "from-cyan-300 via-sky-400 to-blue-400",
    glow: "shadow-cyan",
    icon: WavesIcon,
  },
];

const players = [
  { name: "KMC Ghost", city: "Tete", points: 980 },
  { name: "MaputoRage", city: "Maputo", points: 920 },
  { name: "BeiraNinja", city: "Beira", points: 870 },
  { name: "CyberMamba", city: "Tete", points: 830 },
  { name: "NovaX", city: "Maputo", points: 790 },
];

const teams = [
  { name: "Zambezi Volt", city: "Tete", score: "2.8K", accent: "orange" },
  { name: "Capital Pulse", city: "Maputo", score: "2.5K", accent: "purple" },
  { name: "Coastal Byte", city: "Beira", score: "2.2K", accent: "cyan" },
];

const games = ["Free Fire", "EA Sports FC", "Call of Duty Mobile", "Tekken"];
const safetyIcons = [TicketCheck, ShieldCheck, BadgeCheck, HeartPulse, Users, Sparkles];
const sponsorIcons = [Wifi, Gamepad2, Banknote, BatteryCharging, Mic2];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

function WavesIcon(props) {
  return <MapPin {...props} />;
}

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [lang, setLang] = React.useState("en");
  const t = translations[lang];

  return (
    <main className="min-h-screen overflow-hidden bg-arena-ink text-white selection:bg-arena-cyan selection:text-arena-ink">
      <AmbientBackground />
      <Navbar
        isOpen={isOpen}
        lang={lang}
        setIsOpen={setIsOpen}
        setLang={setLang}
        t={t}
      />
      <Hero t={t} />
      <Editions t={t} />
      <Rankings t={t} />
      <Tournament t={t} />
      <History t={t} />
      <Safety t={t} />
      <Sponsors t={t} />
      <Footer t={t} />
    </main>
  );
}

function Navbar({ isOpen, lang, setIsOpen, setLang, t }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-arena-ink/70 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="group flex shrink-0 items-center gap-3"
          aria-label={t.nav.homeAria}
        >
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/40 bg-cyan-300/10 shadow-cyan transition group-hover:scale-105">
            <Gamepad2 className="h-5 w-5 text-cyan-200" />
          </span>
          <span>
            <span className="block font-display text-lg font-black tracking-tight">
              MOZPLAY
            </span>
            <span className="-mt-1 block text-xs font-bold uppercase tracking-[0.35em] text-orange-200">
              Arena
            </span>
          </span>
        </a>

        <div className="hidden min-w-0 items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-full px-3 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white xl:px-4"
            >
              {t.nav[link.labelKey]}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <LanguageToggle lang={lang} setLang={setLang} label={t.nav.language} />
          <a
            href="#tournament"
            className="hidden whitespace-nowrap rounded-full bg-gradient-to-r from-arena-purple to-arena-cyan px-5 py-3 text-sm font-black text-white shadow-glow transition hover:scale-105 md:inline-flex"
          >
            {t.nav.join}
          </a>

          <button
            className="rounded-xl border border-white/10 p-2 text-white lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={t.nav.menu}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-arena-panel/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 font-semibold text-white/80 hover:bg-white/10"
              >
                {t.nav[link.labelKey]}
              </a>
            ))}
            <a
              href="#tournament"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-2xl bg-gradient-to-r from-arena-purple to-arena-cyan px-4 py-3 text-center font-black"
            >
              {t.nav.join}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function LanguageToggle({ lang, setLang, label }) {
  return (
    <div
      className="flex rounded-full border border-white/10 bg-white/[0.07] p-1 shadow-inner shadow-black/20 backdrop-blur"
      aria-label={label}
      role="group"
    >
      {[
        { code: "en", label: "EN" },
        { code: "pt", label: "PT" },
      ].map((option) => {
        const isActive = lang === option.code;
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLang(option.code)}
            className={`rounded-full px-3 py-2 text-xs font-black tracking-wider transition ${
              isActive
                ? "bg-cyan-200 text-arena-ink shadow-cyan"
                : "text-white/60 hover:bg-white/10 hover:text-white"
            }`}
            aria-pressed={isActive}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

function Hero({ t }) {
  return (
    <section
      id="home"
      className="relative mx-auto min-h-screen max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40"
    >
      <NetworkField />
      <div className="grid items-center gap-12 lg:grid-cols-[1.06fr_.94fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-300/10 px-4 py-2 text-sm font-bold text-orange-100 shadow-orange">
            <CircleDot className="h-4 w-4 animate-pulse" /> {t.hero.badge}
          </div>
          <h1 className="font-display text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            {t.hero.title} <span className="gradient-text">{t.hero.highlight}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#tournament"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-black text-arena-ink transition hover:scale-105 hover:shadow-cyan"
            >
              {t.hero.primaryCta}{" "}
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#editions"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-4 font-black text-white backdrop-blur transition hover:border-cyan-200/60 hover:bg-cyan-200/10"
            >
              {t.hero.secondaryCta}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative z-10"
        >
          <div className="relative rounded-[2rem] border border-white/15 bg-white/[0.06] p-4 shadow-glow backdrop-blur-2xl">
            <div className="absolute -inset-1 -z-10 rounded-[2.2rem] bg-gradient-to-br from-purple-500/30 via-cyan-400/10 to-orange-400/30 blur-2xl" />
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-arena-panel/75 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-200">
                    {t.hero.signal}
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-black">
                    {t.hero.mapTitle}
                  </h2>
                </div>
                <Trophy className="text-orange-200" />
              </div>
              <div className="relative mt-6 aspect-square rounded-3xl bg-radial-grid bg-[length:24px_24px] p-5">
                <div className="absolute left-[18%] top-[25%] city-node bg-orange-300">
                  <span>Tete</span>
                </div>
                <div className="absolute right-[18%] top-[47%] city-node bg-purple-300">
                  <span>Maputo</span>
                </div>
                <div className="absolute bottom-[17%] left-[34%] city-node bg-cyan-300">
                  <span>Beira</span>
                </div>
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 320 320"
                  fill="none"
                >
                  <path
                    d="M80 92 C145 88 190 134 252 154"
                    stroke="url(#line)"
                    strokeWidth="2"
                    strokeDasharray="7 8"
                  />
                  <path
                    d="M252 154 C210 210 162 234 112 260"
                    stroke="url(#line2)"
                    strokeWidth="2"
                    strokeDasharray="7 8"
                  />
                  <defs>
                    <linearGradient id="line" x1="80" y1="92" x2="252" y2="154">
                      <stop stopColor="#fb923c" />
                      <stop offset="1" stopColor="#a855f7" />
                    </linearGradient>
                    <linearGradient
                      id="line2"
                      x1="252"
                      y1="154"
                      x2="112"
                      y2="260"
                    >
                      <stop stopColor="#a855f7" />
                      <stop offset="1" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-x-8 top-1/2 h-px animate-scan bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />
              </div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {t.hero.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.08 }}
                className="glass-card p-4 text-center"
              >
                <p className="font-display text-2xl font-black text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Editions({ t }) {
  return (
    <Section
      id="editions"
      eyebrow={t.editions.eyebrow}
      title={t.editions.title}
      text={t.editions.text}
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {editionMeta.map((meta, index) => {
          const Icon = meta.icon;
          const edition = t.editions.cards[index];
          return (
            <motion.article
              key={meta.city}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.1 }}
              className={`group glass-card ${meta.glow} overflow-hidden p-6`}
            >
              <div
                className={`mb-6 inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${meta.gradient} text-arena-ink shadow-lg transition group-hover:scale-110`}
              >
                <Icon className="h-7 w-7" />
              </div>
              <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-3xl font-black">{meta.city}</h3>
                  <p
                    className={`bg-gradient-to-r ${meta.gradient} bg-clip-text text-lg font-black text-transparent`}
                  >
                    {edition.title}
                  </p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-white/80">
                  {edition.badge}
                </span>
              </div>
              <p className="text-slate-300">{edition.description}</p>
              <div className="mt-6 grid gap-2">
                {edition.focus.map((item) => (
                  <p key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <ChevronRight className="h-4 w-4 shrink-0 text-cyan-200" /> {item}
                  </p>
                ))}
              </div>
              <a
                href="#history"
                className="mt-7 inline-flex items-center gap-2 font-black text-white transition group-hover:text-cyan-200"
              >
                {t.editions.view} <ArrowRight className="h-4 w-4" />
              </a>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}

function Rankings({ t }) {
  return (
    <Section
      id="rankings"
      eyebrow={t.rankings.eyebrow}
      title={t.rankings.title}
      text={t.rankings.text}
    >
      <div className="grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
        <div className="glass-card p-5 sm:p-6">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-display text-2xl font-black">{t.rankings.topPlayers}</h3>
            <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-black text-cyan-100">
              {t.rankings.liveConcept}
            </span>
          </div>
          <div className="grid gap-4">
            {players.map((player, index) => (
              <div
                key={player.name}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-200/40 hover:bg-white/[0.07]"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-purple-400 to-cyan-300 font-black text-arena-ink">
                    #{index + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-black">{player.name}</p>
                      <span className="rounded-full border border-white/10 px-2 py-0.5 text-[11px] font-bold text-slate-300">
                        {player.city}
                      </span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-orange-300 via-purple-400 to-cyan-300"
                        style={{ width: `${player.points / 10}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-xl font-black">{player.points}</p>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                      {t.rankings.points}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="glass-card p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-orange-300/15 p-3 text-orange-200">
                <Star />
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-200">
                  {t.rankings.risingStar}
                </p>
                <h3 className="mt-2 font-display text-2xl font-black">CyberMamba</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {t.rankings.risingText}
                </p>
              </div>
            </div>
          </div>
          <div className="glass-card p-6">
            <h3 className="mb-4 font-display text-xl font-black">
              {t.rankings.teamRankings}
            </h3>
            <div className="grid gap-3">
              {teams.map((team) => (
                <TeamCard key={team.name} team={team} />
              ))}
            </div>
          </div>
          <div className="glass-card p-6">
            <h3 className="mb-4 font-display text-xl font-black">{t.rankings.rankTiers}</h3>
            <div className="flex flex-wrap gap-2">
              {t.rankings.tiers.map((tier) => (
                <span
                  key={tier}
                  className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-black text-slate-200"
                >
                  {tier}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function TeamCard({ team }) {
  const colors = {
    orange: "from-orange-300 to-yellow-200",
    purple: "from-purple-400 to-pink-300",
    cyan: "from-cyan-300 to-blue-400",
  };
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
      <div className="flex min-w-0 items-center gap-3">
        <span className={`h-3 w-3 shrink-0 rounded-full bg-gradient-to-r ${colors[team.accent]}`} />
        <div className="min-w-0">
          <p className="font-bold">{team.name}</p>
          <p className="text-xs text-slate-400">{team.city}</p>
        </div>
      </div>
      <p className="shrink-0 font-black text-cyan-100">{team.score}</p>
    </div>
  );
}

function Tournament({ t }) {
  return (
    <Section
      id="tournament"
      eyebrow={t.tournament.eyebrow}
      title={t.tournament.title}
      text={t.tournament.text}
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="glass-card p-6">
          <h3 className="font-display text-2xl font-black">{t.tournament.featuredGames}</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {games.map((game) => (
              <div
                key={game}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-5 font-black transition hover:-translate-y-1 hover:border-cyan-200/40"
              >
                <Gamepad2 className="mb-4 text-cyan-200" />
                {game}
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card p-6">
          <h3 className="font-display text-2xl font-black">{t.tournament.featuresTitle}</h3>
          <div className="mt-6 grid gap-3">
            {t.tournament.features.map((feature) => (
              <p
                key={feature}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <ShieldCheck className="h-5 w-5 shrink-0 text-orange-200" />{" "}
                <span className="font-semibold text-slate-200">{feature}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5 glass-card p-6">
        <h3 className="font-display text-2xl font-black">{t.tournament.roadTitle}</h3>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {t.tournament.road.map((step, index) => (
            <div
              key={step}
              className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-5"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-orange-300 via-purple-400 to-cyan-300 font-black text-arena-ink">
                {index + 1}
              </div>
              <p className="font-display text-xl font-black">{step}</p>
              {index < t.tournament.road.length - 1 && (
                <div className="absolute right-4 top-10 hidden h-px w-1/2 bg-gradient-to-r from-cyan-300 to-transparent md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function History({ t }) {
  return (
    <Section
      id="history"
      eyebrow={t.history.eyebrow}
      title={t.history.title}
      text={t.history.text}
    >
      <div className="grid gap-5 lg:grid-cols-[.95fr_1.05fr]">
        <div className="glass-card p-6">
          <div className="space-y-5">
            {t.history.items.map((item) => (
              <div key={item.year} className="relative border-l border-cyan-200/30 pl-6">
                <span className="absolute -left-2 top-1 h-4 w-4 rounded-full bg-cyan-200 shadow-cyan" />
                <p className="font-black text-orange-200">{item.year}</p>
                <h3 className="mt-1 font-display text-xl font-black">{item.title}</h3>
                <p className="mt-1 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-5">
          <div className="glass-card p-6">
            <div className="flex items-center gap-4">
              <Crown className="h-10 w-10 shrink-0 text-yellow-200" />
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-100">
                  {t.history.hall}
                </p>
                <h3 className="font-display text-2xl font-black">{t.history.loading}</h3>
              </div>
            </div>
            <p className="mt-4 text-slate-300">{t.history.archive}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {t.history.moments.map((moment) => (
              <div key={moment} className="rounded-3xl border border-white/10 bg-white/[0.05] p-5">
                <Medal className="mb-3 text-purple-200" />
                <p className="font-black">{moment}</p>
                <p className="mt-2 text-sm text-slate-400">{t.history.placeholder}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Safety({ t }) {
  return (
    <Section id="safety" eyebrow={t.safety.eyebrow} title={t.safety.title} text={t.safety.text}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.safety.items.map((title, index) => {
          const Icon = safetyIcons[index];
          return (
            <div key={title} className="glass-card p-5">
              <Icon className="mb-5 text-cyan-200" />
              <h3 className="font-display text-xl font-black">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {t.safety.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Sponsors({ t }) {
  return (
    <Section
      id="sponsors"
      eyebrow={t.sponsors.eyebrow}
      title={t.sponsors.title}
      text={t.sponsors.text}
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {t.sponsors.cards.map((sponsor, index) => {
          const Icon = sponsorIcons[index];
          return (
            <div
              key={sponsor.title}
              className="glass-card p-5 transition hover:-translate-y-1 hover:shadow-glow"
            >
              <Icon className="mb-5 text-orange-200" />
              <h3 className="font-display text-lg font-black">{sponsor.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{sponsor.text}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-8 rounded-[2rem] border border-white/10 bg-gradient-to-r from-purple-500/20 via-cyan-400/10 to-orange-400/20 p-6 text-center backdrop-blur-xl sm:p-10">
        <h3 className="font-display text-3xl font-black">{t.sponsors.ctaTitle}</h3>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">{t.sponsors.ctaText}</p>
        <a
          href="mailto:sponsors@mozplay.example"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-arena-orange to-arena-purple px-6 py-4 font-black shadow-orange transition hover:scale-105"
        >
          {t.sponsors.ctaButton} <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </Section>
  );
}

function Footer({ t }) {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto]">
        <div>
          <h2 className="font-display text-2xl font-black">MOZPLAY Arena</h2>
          <p className="mt-2 text-slate-400">{t.footer.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-black text-slate-300">
            <span>Instagram</span>
            <span>TikTok</span>
            <span>YouTube</span>
            <span>Twitch</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300 hover:bg-white/10"
            >
              {t.nav[link.labelKey]}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl text-sm text-slate-500">
        {t.footer.copyright}
      </div>
    </footer>
  );
}

function Section({ id, eyebrow, title, text, children }) {
  return (
    <section
      id={id}
      className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-9 max-w-3xl"
      >
        <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-cyan-200">
          {eyebrow}
        </p>
        <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
          {title}
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-300">{text}</p>
      </motion.div>
      {children}
    </section>
  );
}

function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[-20%] top-[-15%] h-[32rem] w-[32rem] rounded-full bg-purple-600/30 blur-[120px]" />
      <div className="absolute right-[-20%] top-[18%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-[110px]" />
      <div className="absolute bottom-[-20%] left-[22%] h-[30rem] w-[30rem] rounded-full bg-orange-500/20 blur-[120px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
    </div>
  );
}

function NetworkField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(18)].map((_, index) => (
        <span
          key={index}
          className="absolute h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-200/70 shadow-cyan"
          style={{
            left: `${8 + ((index * 17) % 86)}%`,
            top: `${14 + ((index * 23) % 72)}%`,
            animationDelay: `${index * 0.18}s`,
          }}
        />
      ))}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
