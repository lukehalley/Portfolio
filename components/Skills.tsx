import { skills } from "@/data/content";

export function Skills() {
  const skillEntries = Object.entries(skills);

  return (
    <section
      id="skills"
      className="py-32 md:py-40 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <h2
            className="font-black tracking-tighter text-primary"
            style={{ fontSize: 'var(--fluid-8xl)' }}
          >
            Skills
          </h2>
        </div>

        {/* Skills by Domain */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {skillEntries.map(([domain, skillList]) => (
            <div key={domain}>
              <h3
                className="font-mono text-tertiary tracking-tight uppercase font-black mb-6 pb-3 border-b-4 border-tertiary-faint"
                style={{ fontSize: 'var(--fluid-lg)' }}
              >
                {domain}
              </h3>
              <ul className="space-y-3">
                {(skillList as Array<{ name: string }>).map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-start gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 bg-tertiary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <span className="font-medium group-hover:text-tertiary transition-colors" style={{ fontSize: 'var(--fluid-base)' }}>
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
