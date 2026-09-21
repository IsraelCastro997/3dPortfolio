import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#12102a",
        color: "#fff",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #12102a" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          {experience.icon ? (
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[60%] h-[60%] object-contain"
            />
          ) : (
            <span className="text-white text-xs font-bold">{experience.initials}</span>
          )}
        </div>
      }
    >
      <h3 className="text-white text-[22px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point) => (
          <li key={point} className="text-white-100 text-[14px] pl-1 leading-6">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Trayectoria</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Experiencia</h2>
      </motion.div>

      <div className="mt-16 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.company_name} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
