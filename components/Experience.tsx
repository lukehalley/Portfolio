import { experience } from "@/data/content";
import { FormattedText } from "./FormattedText";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-32 md:py-40 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-24 md:mb-32">
          <h2
            className="font-black tracking-tighter text-primary"
            style={{ fontSize: 'var(--fluid-8xl)' }}
          >
            Experience
          </h2>
        </div>

        {/* Current Role */}
        <div className="mb-32 md:mb-40">
          <div className="mb-10 md:mb-12">
            <div className="flex items-center gap-4 mb-2">
              <span className="px-3 py-1 bg-tertiary text-primary text-xs font-mono font-bold uppercase">
                Current
              </span>
            </div>
            <h3 className="font-black uppercase text-primary tracking-wide" style={{ fontSize: 'var(--fluid-5xl)' }}>
              {experience.current.company}
            </h3>
            <p className="font-bold text-tertiary mt-2" style={{ fontSize: 'var(--fluid-2xl)' }}>
              {experience.current.role}
            </p>
            <p className="font-mono font-bold text-secondary mt-2 tracking-tight uppercase" style={{ fontSize: 'var(--fluid-xl)' }}>
              {experience.current.period} • {experience.current.location}
            </p>
            <p className="text-primary/70 mt-4 leading-relaxed max-w-3xl" style={{ fontSize: 'var(--fluid-lg)' }}>
              {experience.current.context}
            </p>
          </div>

          <div className="space-y-10 md:space-y-12">
            {experience.current.highlights.map((highlight, index) => (
              <div
                key={index}
                className="border-l-4 border-tertiary pl-8 py-3"
              >
                <h4 className="font-bold mb-4 uppercase" style={{ fontSize: 'var(--fluid-3xl)' }}>
                  {highlight.title}
                </h4>
                <p className="text-primary/80 mb-6 leading-relaxed" style={{ fontSize: 'var(--fluid-lg)' }}>
                  <FormattedText text={highlight.description} />
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {highlight.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 font-mono border-2 border-primary/60 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-tertiary rounded-full"></span>
                  <span className="font-mono text-tertiary tracking-tight" style={{ fontSize: 'var(--fluid-base)' }}>
                    {highlight.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Previous Roles */}
        {experience.previous.map((job, jobIndex) => (
          <div key={jobIndex} className="mb-32 md:mb-40">
            <div className="mb-10 md:mb-12">
              <h3 className="font-black uppercase text-primary tracking-wide" style={{ fontSize: 'var(--fluid-5xl)' }}>
                {job.company}
              </h3>
              <p className="font-bold text-tertiary mt-2" style={{ fontSize: 'var(--fluid-2xl)' }}>
                {job.role}
              </p>
              <p className="font-mono font-bold text-secondary mt-2 tracking-tight uppercase" style={{ fontSize: 'var(--fluid-xl)' }}>
                {job.period} • {job.location}
              </p>
            </div>

            <div className="space-y-8 md:space-y-10">
              {job.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="border-l-4 border-tertiary pl-8 py-3"
                >
                  <h4 className="font-bold mb-4" style={{ fontSize: 'var(--fluid-2xl)' }}>
                    {highlight.title}
                  </h4>
                  <p className="text-primary/80 mb-4 leading-relaxed" style={{ fontSize: 'var(--fluid-lg)' }}>
                    {highlight.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-tertiary rounded-full"></span>
                    <span className="font-mono text-tertiary tracking-tight" style={{ fontSize: 'var(--fluid-base)' }}>
                      {highlight.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Awards */}
        <div>
          <div className="mb-10 md:mb-12">
            <h3 className="font-black uppercase text-primary" style={{ fontSize: 'var(--fluid-5xl)' }}>
              Awards & Recognition
            </h3>
          </div>
          <div className="flex flex-wrap gap-6">
            {experience.awards.map((award, index) => (
              <div
                key={index}
                className="brutal-border bg-white px-8 py-4 font-mono hover:bg-tertiary hover:text-primary"
                style={{ fontSize: 'var(--fluid-lg)' }}
              >
                {award}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
