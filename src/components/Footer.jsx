import { site } from "../config/site";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 px-6 py-8 text-center text-sm text-secondary">
      <p>
        © {new Date().getFullYear()} {site.name} · {site.location}
      </p>
      <p className="mt-2">
        <a className="hover:text-white" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        {" · "}
        <a className="hover:text-white" href={site.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {" · "}
        <a className="hover:text-white" href={site.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>
    </footer>
  );
};

export default Footer;
