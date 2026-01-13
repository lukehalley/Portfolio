import { education } from "@/data/content";

export function Education() {
  return (
    <section
      id="education"
      className="py-32 md:py-40 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-24 md:mb-32">
          <h2
            className="font-black tracking-tighter text-primary"
            style={{ fontSize: 'var(--fluid-8xl)' }}
          >
            Education
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Degree */}
          <div>
            <div className="mb-8">
              <h3 className="font-mono text-tertiary tracking-tight uppercase font-black" style={{ fontSize: 'var(--fluid-2xl)' }}>
                Degree
              </h3>
            </div>
            <div className="border-l-4 border-tertiary pl-8 py-2 hover:border-primary transition-colors">
              <p className="font-black mb-3" style={{ fontSize: 'var(--fluid-3xl)' }}>
                {education.degree}
              </p>
              <p className="text-tertiary font-bold mb-3" style={{ fontSize: 'var(--fluid-2xl)' }}>
                {education.honours}
              </p>
              <p className="font-mono text-secondary mb-2" style={{ fontSize: 'var(--fluid-lg)' }}>
                {education.institution}
              </p>
              <p className="font-mono text-primary/50 uppercase" style={{ fontSize: 'var(--fluid-base)' }}>
                {education.period}
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="mb-8">
              <h3 className="font-mono text-tertiary tracking-tight uppercase font-black" style={{ fontSize: 'var(--fluid-2xl)' }}>
                Certifications
              </h3>
            </div>
            <div className="space-y-6">
              {education.certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-l-4 border-tertiary pl-8 py-2 hover:border-primary group transition-colors"
                >
                  <p className="font-black mb-3 group-hover:text-tertiary transition-colors" style={{ fontSize: 'var(--fluid-3xl)' }}>
                    {cert.name}
                  </p>
                  <p className="text-tertiary font-bold group-hover:text-primary transition-colors" style={{ fontSize: 'var(--fluid-2xl)' }}>
                    {cert.level}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
