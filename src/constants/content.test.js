import { describe, expect, it } from "vitest";
import { projects, techGroups, experiences } from "./index";
import { site } from "../config/site";

describe("portfolio content", () => {
  it("keeps the four featured projects in recruiter order without invented links", () => {
    expect(projects.map((project) => project.name)).toEqual([
      "Expertos en Convenciones",
      "TM Escolar",
      "Trading Integrations",
      "Marketplace & Booking Platform",
    ]);

    projects.forEach((project) => {
      expect(project.liveUrl).toBeUndefined();
      expect(project.githubUrl).toBeUndefined();
      expect(project.caseStudyUrl).toBeUndefined();
      expect(project.status).toBe("Private");
      expect(project.problem).toBeTruthy();
      expect(project.built.length).toBeGreaterThan(0);
      expect(project.built.length).toBeLessThanOrEqual(3);
      expect(project.role).toBeTruthy();
      expect(project.screenshotFile).toMatch(/^public\/projects\//);
      expect(project.stack.length).toBeGreaterThan(0);
    });
  });

  it("groups the stack with visual weight levels", () => {
    expect(techGroups.map((group) => group.title)).toEqual([
      "Primary",
      "Databases",
      "Infrastructure",
      "AI",
    ]);
    expect(
      techGroups.every((group) => group.items.every((item) => item.name && item.level))
    ).toBe(true);
  });

  it("exposes direct contact channels without a form service", () => {
    expect(site.whatsapp).toContain("https://wa.me/523331974977");
    expect(site.email).toBe("israelcastro997@gmail.com");
    expect(site.github).toBe("https://github.com/IsraelCastro997");
    expect(site.linkedin).toBe("https://www.linkedin.com/in/israel-castro-a5637b216");
  });

  it("includes the requested experience companies", () => {
    expect(experiences.map((item) => item.company_name)).toEqual([
      "Taloon Studio",
      "DIF Zapopan",
      "Expertos en Convenciones",
    ]);
    expect(experiences.every((item) => item.points.length <= 3)).toBe(true);
  });
});
