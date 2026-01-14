import { journey } from "@/data/content";
import { FormattedText } from "./FormattedText";

export function About() {
  return (
    <section
      id="about"
      className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-primary"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-24 md:mb-32">
          <h2
            className="font-black tracking-tighter text-white"
            style={{ fontSize: 'var(--fluid-8xl)' }}
          >
            About
          </h2>
        </div>

        {/* Journey */}
        <div className="space-y-6 md:space-y-8">
          {journey.map((paragraph, index) => (
            <div key={index} className="relative pl-6 md:pl-8 border-l-4 border-tertiary-faint hover:border-tertiary transition-colors duration-300">
              <p className="text-white leading-relaxed" style={{ fontSize: 'var(--fluid-2xl)' }}>
                <FormattedText text={paragraph} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
