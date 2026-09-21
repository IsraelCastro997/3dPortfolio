import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { site } from "../config/site";

const channels = [
  {
    href: site.whatsapp,
    label: "Contact me on WhatsApp",
    external: true,
    featured: true,
  },
  {
    href: `mailto:${site.email}`,
    label: "Send me an email",
    external: false,
  },
  {
    href: site.linkedin,
    label: "LinkedIn",
    external: true,
  },
  {
    href: site.github,
    label: "GitHub",
    external: true,
  },
];

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Hablemos</p>
        <h2 className={styles.sectionHeadText}>Contacto</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 0.5)}
        className="mt-4 max-w-2xl text-[17px] leading-7 text-secondary"
      >
        Interested in working together or discussing a software opportunity? Reach me directly.
      </motion.p>

      <p className="mt-4 text-sm sm:text-base text-white-100">
        Open to: Full Stack · Backend · Frontend · Mobile · AI-Assisted Engineering · Technical
        Leadership
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {channels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            {...(channel.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className={`flex min-h-[56px] items-center justify-center rounded-2xl px-5 py-4 text-center text-[16px] font-semibold transition-colors ${
              channel.featured
                ? "col-span-full bg-[#25D366] text-[#052e16] hover:bg-[#1ebe5d]"
                : "border border-white/15 bg-tertiary text-white hover:border-white/40"
            }`}
          >
            {channel.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
