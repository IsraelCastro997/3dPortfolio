import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { techGroups } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Herramientas</p>
        <h2 className={styles.sectionHeadText}>Tech stack</h2>
      </motion.div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {techGroups.map((group, index) => (
          <motion.article
            key={group.title}
            variants={fadeIn("up", "tween", index * 0.05, 0.45)}
            className="rounded-2xl border border-white/5 bg-tertiary p-6"
          >
            <h3 className="text-white text-lg font-semibold">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className={
                    item.level === "core"
                      ? "rounded-full border border-white/25 bg-black-100 px-3 py-1.5 text-sm text-white"
                      : "rounded-full border border-white/5 bg-black-200 px-3 py-1 text-xs text-secondary"
                  }
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "stack");
