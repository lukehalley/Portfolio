import { personal } from "@/data/content";
import Image from "next/image";

const hobbyImages: Record<string, string> = {
  Travel: "/images/travelling.png",
  Running: "/images/running.jpg",
  Cooking: "/images/cooking.jpeg",
};

export function Personal() {
  return (
    <section
      id="personal"
      className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-primary/[0.02]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-24 md:mb-32">
          <h2
            className="font-black tracking-tighter text-primary"
            style={{ fontSize: 'var(--fluid-8xl)' }}
          >
            Beyond Work
          </h2>
        </div>

        {/* Hobbies Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {personal.hobbies.map((hobby, index) => (
            <div key={index} className="group">
              {/* Image with hero-style filter */}
              {hobbyImages[hobby.name] && (
                <div className="relative mb-6">
                  <div className="relative aspect-[4/3] overflow-hidden border-4 border-primary">
                    <Image
                      src={hobbyImages[hobby.name]}
                      alt={hobby.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-tertiary/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500" />
                  </div>
                </div>
              )}

              <div className="border-l-4 border-tertiary/30 pl-6 py-2 group-hover:border-tertiary transition-colors">
                <h3 className="font-mono font-black mb-3 uppercase" style={{ fontSize: 'var(--fluid-xl)' }}>
                  {hobby.name}
                </h3>
                <p className="text-sm text-primary/70 mb-4 leading-relaxed">
                  {hobby.description}
                </p>

                {/* Travel highlights */}
                {'highlights' in hobby && hobby.highlights && (
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {hobby.highlights.map((item) => (
                      <span key={item} className="px-2 py-1 border border-primary/20">
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                {/* Running PRs */}
                {'prs' in hobby && hobby.prs && (
                  <>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-4">
                      <div>
                        <span className="text-primary/60">Marathon:</span>{' '}
                        <span className="font-bold">{hobby.prs.marathon}</span>
                      </div>
                      <div>
                        <span className="text-primary/60">Half:</span>{' '}
                        <span className="font-bold">{hobby.prs.half}</span>
                      </div>
                    </div>
                    {'stravaUrl' in hobby && hobby.stravaUrl && (
                      <a
                        href={hobby.stravaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-tertiary hover:underline"
                      >
                        View Strava Profile →
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
