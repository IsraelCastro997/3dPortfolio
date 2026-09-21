import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { approachItems } from "../constants";

const Approach = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Cómo trabajo</p>
        <h2 className={styles.sectionHeadText}>Engineering approach</h2>
      </motion.div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {approachItems.map((item, index) => (
          <motion.article
            key={item.title}
            variants={fadeIn("up", "tween", index * 0.04, 0.4)}
            className="rounded-2xl bg-tertiary border border-white/5 p-5"
          >
            <h3 className="text-white font-semibold text-[17px]">{item.title}</h3>
            <p className="mt-2 text-secondary text-[15px] leading-6">{item.text}</p>
          </motion.article>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Approach, "approach");
