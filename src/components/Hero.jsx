import { motion } from "framer-motion";

import { styles } from "../styles";
import { site } from "../config/site";

const actions = [
  { href: "#projects", label: "View Projects", primary: true },
  { href: site.cvPath, label: "Download CV", download: "Israel-Castro-CV.pdf" },
  { href: site.github, label: "GitHub", external: true },
  { href: "#contact", label: "Contact" },
];

const Hero = () => {
  return (
    <section className="relative w-full min-h-0 md:min-h-[100svh] mx-auto flex items-center overflow-x-hidden">
      <div
        className={`relative z-10 w-full max-w-7xl mx-auto ${styles.paddingX} pt-24 pb-12 flex flex-row items-start gap-4`}
      >
        <div className="flex flex-col justify-center items-center mt-5" aria-hidden="true">
          <div className="w-4 h-4 rounded-full bg-accent" />
          <div className="w-1 sm:h-64 h-32 violet-gradient" />
        </div>

        <div className="max-w-3xl">
          <p className="text-secondary text-sm sm:text-base tracking-[0.16em] uppercase">
            Ingeniero en Informática · +5 años de experiencia
          </p>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {site.name}
          </h1>
          <p className={`${styles.heroSubText} mt-3`}>{site.role}</p>
          <p className="mt-4 text-secondary text-base leading-7 max-w-xl">
            Web, APIs, mobile y automatización de extremo a extremo. React, Node.js, Laravel, C#/.NET e IA
            aplicada a ingeniería — no a snippets sueltos.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm sm:text-base text-white-100">
            <span className="rounded-full border border-white/10 bg-tertiary px-4 py-2">
              {site.location}
            </span>
            <span className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-[#dcd6ff]">
              {site.availability}
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...(action.download ? { download: action.download } : {})}
                className={`min-h-[44px] inline-flex items-center rounded-xl px-5 py-3 text-[15px] font-semibold transition-colors ${
                  action.primary
                    ? "bg-accent text-white hover:bg-[#6a5af0]"
                    : "border border-white/15 bg-tertiary text-white hover:border-white/40"
                }`}
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <motion.a
        href="#stack"
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 text-secondary text-sm"
        aria-label="Ir al stack tecnológico"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
      >
        ↓
      </motion.a>
    </section>
  );
};

export default Hero;
