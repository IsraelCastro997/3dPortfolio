import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";

const ProjectLinks = ({ project }) => {
  const links = [
    project.liveUrl && { href: project.liveUrl, label: "Live Demo" },
    project.githubUrl && { href: project.githubUrl, label: "GitHub" },
    project.caseStudyUrl && { href: project.caseStudyUrl, label: "Case Study" },
  ].filter(Boolean);

  if (links.length > 0) {
    return (
      <div className="mt-4 flex flex-wrap gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/20 px-3 py-2 text-sm text-white hover:border-white/50"
          >
            {link.label}
          </a>
        ))}
      </div>
    );
  }

  if (project.status === "Private") {
    return (
      <p className="mt-4 text-sm text-secondary">
        Private project — details available during interview
      </p>
    );
  }

  return null;
};

const ProjectCard = ({ project, index }) => {
  const isPrivate = project.status === "Private";

  return (
    <motion.article
      variants={fadeIn("up", "tween", index * 0.08, 0.5)}
      className="bg-tertiary p-5 sm:p-6 rounded-2xl border border-white/5 flex flex-col"
    >
      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-[#0b0a18] border border-white/5 flex items-center justify-center">
        {project.screenshot ? (
          <img
            src={project.screenshot}
            alt={project.imageAlt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <p className="px-4 text-center text-xs sm:text-sm text-secondary">
            Screenshot pending
            <span className="block mt-1 font-mono text-[11px] text-white/50">{project.screenshotFile}</span>
          </p>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-white font-bold text-[20px] leading-snug">{project.name}</h3>
        <span
          className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${
            isPrivate
              ? "border border-white/20 bg-black-100 text-secondary"
              : "border border-emerald-400/40 bg-emerald-400/10 text-emerald-200"
          }`}
        >
          {isPrivate ? "Private project" : "Public project"}
        </span>
      </div>

      <p className="mt-3 text-[15px] leading-6 text-secondary">{project.problem}</p>

      <ul className="mt-3 list-disc pl-5 space-y-1 text-[15px] leading-6 text-secondary">
        {project.built.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <p className="mt-4 text-[15px] leading-6">
        <span className="font-semibold text-white">My Role. </span>
        <span className="text-white-100">{project.role}</span>
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <span key={`${project.name}-${tag}`} className="text-sm text-[#9db4ff]">
            #{tag}
          </span>
        ))}
      </div>

      <ProjectLinks project={project} />
    </motion.article>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Trabajo real</p>
        <h2 className={styles.sectionHeadText}>Proyectos destacados</h2>
      </motion.div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
