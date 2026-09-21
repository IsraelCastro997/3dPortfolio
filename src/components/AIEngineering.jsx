import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { aiWorkflow } from "../constants";

const AIEngineering = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Proceso</p>
        <h2 className={styles.sectionHeadText}>AI-Assisted Engineering</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 0.5)}
        className="mt-4 max-w-2xl text-[16px] leading-7 text-secondary"
      >
        La IA acelera el trabajo. Un cambio se acepta solo tras diff, tests, build y comportamiento real.
      </motion.p>

      <ol className="mt-6 flex flex-wrap items-center gap-2 text-sm sm:text-base">
        {aiWorkflow.map((step, index) => (
          <li key={step} className="flex items-center gap-2">
            <span className="rounded-full border border-white/15 bg-tertiary px-3 py-1.5 text-white">
              {step}
            </span>
            {index < aiWorkflow.length - 1 && (
              <span className="text-secondary" aria-hidden="true">
                →
              </span>
            )}
          </li>
        ))}
      </ol>

      <motion.div
        variants={fadeIn("", "", 0.15, 0.5)}
        className="mt-6 max-w-3xl rounded-2xl border border-white/10 bg-black-100 px-5 py-4"
      >
        <h3 className="text-white font-semibold text-[16px]">Real example — Expertos en Convenciones</h3>
        <p className="mt-2 text-secondary text-[15px] leading-6">
          In a real multi-tenant event platform, I used AI agents to inspect the codebase, plan
          architectural changes, implement and refactor modules, generate tests and keep documentation
          in sync. I verified every change against the diff, test suite, build, permissions and database
          behavior before accepting it.
        </p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(AIEngineering, "ai");
