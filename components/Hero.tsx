import { personalInfo } from "@/data/content";
import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";
import { FormattedText } from "./FormattedText";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 overflow-hidden"
    >
      <div className="max-w-6xl w-full relative z-10">
        <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_450px] gap-10 md:gap-16 lg:gap-20 items-center">
          <div className="space-y-12">
            {/* Name */}
            <div>
              <h1 className="font-black tracking-tighter leading-[0.85] text-primary"
                  style={{ fontSize: 'var(--fluid-9xl)' }}>
                {personalInfo.name}
              </h1>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-6">
              <p className="font-mono font-bold text-secondary tracking-tight uppercase whitespace-pre-line"
                 style={{ fontSize: 'var(--fluid-xl)' }}>
                {personalInfo.title}
              </p>
              <p className="font-bold text-primary max-w-3xl leading-tight"
                 style={{ fontSize: 'var(--fluid-3xl)' }}>
                <FormattedText text={personalInfo.tagline} />
                <br />
                <strong>{new Date().getFullYear() - personalInfo.careerStartYear}+ years</strong>.
              </p>
            </div>

            {/* Location */}
            <div>
              <p className="font-mono font-bold text-secondary flex items-center gap-3 uppercase"
                 style={{ fontSize: 'var(--fluid-base)' }}>
                <MapPin className="w-5 h-5 text-tertiary" />
                {personalInfo.location}
              </p>
            </div>

            {/* Contact */}
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 items-center">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group relative inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 font-mono font-bold uppercase text-white bg-primary border-4 border-primary overflow-hidden hover:bg-primary-light transition-colors"
                style={{ fontSize: 'var(--fluid-base)' }}
              >
                <span className="relative z-10">Email</span>
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>

              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 font-mono font-bold uppercase text-primary border-4 border-primary hover:bg-primary hover:text-white transition-colors duration-300"
                style={{ fontSize: 'var(--fluid-base)' }}
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 font-mono font-bold uppercase text-primary border-4 border-primary hover:bg-primary hover:text-white transition-colors duration-300"
                style={{ fontSize: 'var(--fluid-base)' }}
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:justify-self-end order-first lg:order-last">
            <div className="relative group">
              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-8 h-8 md:w-12 md:h-12 border-t-4 border-l-4 border-tertiary" />
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-8 h-8 md:w-12 md:h-12 border-b-4 border-r-4 border-tertiary" />

              <div className="relative w-full aspect-[3/4] max-h-[400px] sm:max-h-[450px] md:max-h-[500px] lg:w-[400px] lg:max-h-[540px] xl:w-[450px] xl:max-h-[600px] overflow-hidden border-4 md:border-8 border-primary">
                <Image
                  src="/images/me.webp"
                  alt="Luke Halley"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 400px, 450px"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  priority
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-tertiary-faint mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
