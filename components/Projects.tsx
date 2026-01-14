import { projects } from "@/data/content";
import { ProjectCard } from "./ProjectCard";

const sections = [
  { key: "professional" as const, title: "Professional", description: "Enterprise platform engineering and infrastructure at scale" },
  { key: "sideProjects" as const, title: "Side Projects", description: "Personal ventures and technical experiments" },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-primary dark-texture"

    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-24 md:mb-32 relative inline-block z-20">
          <h2
            className="relative z-10 font-black tracking-tighter text-white"
            style={{ fontSize: 'var(--fluid-8xl)' }}
          >
            Projects
          </h2>
          <div className="absolute bottom-0 left-0 right-0 h-2 md:h-3 bg-tertiary origin-left z-0" />
        </div>

        {/* Project Sections */}
        {sections.map((section) => {
          const sectionProjects = projects[section.key];
          if (!sectionProjects || sectionProjects.length === 0) return null;

          return (
            <div key={section.key} className="mb-24 md:mb-32">
              {/* Section Header */}
              <div className="mb-12">
                <h3
                  className="font-mono text-white uppercase tracking-tight"
                  style={{ fontSize: 'var(--fluid-2xl)', fontWeight: 900 }}
                >
                  {section.title}
                </h3>
                <p className="text-white-muted mt-4 font-normal leading-relaxed tracking-normal" style={{ fontSize: 'var(--fluid-lg)' }}>
                  {section.description}
                </p>
              </div>

              {/* Project Cards Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {sectionProjects.map((project, index) => (
                  <div key={index} className="pt-4">
                    <ProjectCard
                      title={project.title}
                      subtitle={project.subtitle}
                      period={project.period}
                      description={project.description}
                      technologies={project.technologies}
                      link={'link' in project ? project.link : undefined}
                      featured={project.featured}
                      image={project.image}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
