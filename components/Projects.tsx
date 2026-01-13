import { projects } from "@/data/content";
import { ProjectCard } from "./ProjectCard";

const sections = [
  { key: "professional" as const, title: "Professional", description: "Enterprise platform engineering and infrastructure at scale" },
  { key: "sideProjects" as const, title: "Side Projects", description: "Personal ventures and technical experiments" },
  { key: "college" as const, title: "College", description: "Academic projects from my BSc in Internet of Things" },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 border-r-8 border-t-8 border-tertiary/10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 border-l-8 border-b-8 border-tertiary/10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-24 md:mb-32">
          <h2
            className="font-black tracking-tighter text-primary"
            style={{ fontSize: 'var(--fluid-8xl)' }}
          >
            Projects
          </h2>
        </div>

        {/* Project Sections */}
        {sections.map((section, sectionIndex) => {
          const sectionProjects = projects[section.key];
          if (!sectionProjects || sectionProjects.length === 0) return null;

          return (
            <div key={section.key} className={sectionIndex < sections.length - 1 ? "mb-24 md:mb-32" : ""}>
              <div className="mb-10 md:mb-12">
                <h3
                  className="font-mono font-black text-tertiary uppercase tracking-tight"
                  style={{ fontSize: 'var(--fluid-2xl)' }}
                >
                  {section.title}
                </h3>
                <p className="text-primary/60 mt-2" style={{ fontSize: 'var(--fluid-base)' }}>
                  {section.description}
                </p>
              </div>
              <div className="space-y-8 md:space-y-10">
                {sectionProjects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    subtitle={project.subtitle}
                    category={project.category}
                    period={project.period}
                    description={project.description}
                    impact={project.impact}
                    technologies={project.technologies}
                    link={project.link}
                    featured={project.featured}
                    image={project.image}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
