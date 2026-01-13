import { personalInfo } from "@/data/content";
import Image from "next/image";
import { MapPin, ArrowUpRight, Download } from "lucide-react";
import { FormattedText } from "./FormattedText";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 pb-40 md:pb-48"
    >
      <div className="max-w-6xl w-full relative z-10">
        <div className="grid lg:grid-cols-[1fr_450px] gap-16 lg:gap-20 items-center">
          <div className="space-y-12">
            {/* Name with enhanced animation */}
            <div className="animate-fade-in">
              <h1 className="font-black tracking-tighter leading-[0.85] text-primary"
                  style={{ fontSize: 'var(--fluid-9xl)' }}>
                {personalInfo.name}
              </h1>
            </div>

            {/* Title & Tagline with stagger */}
            <div className="space-y-6 animate-fade-in-delay-1">
              <p className="font-mono font-bold text-secondary tracking-tight uppercase whitespace-pre-line"
                 style={{ fontSize: 'var(--fluid-xl)' }}>
                {personalInfo.title}
              </p>
              <p className="font-bold text-primary max-w-3xl leading-tight"
                 style={{ fontSize: 'var(--fluid-3xl)' }}>
                <FormattedText text={personalInfo.tagline} /> <strong>{new Date().getFullYear() - personalInfo.careerStartYear}+ years</strong>.
              </p>
            </div>

            {/* Location with icon animation */}
            <div className="animate-fade-in-delay-2">
              <p className="font-mono font-bold text-secondary flex items-center gap-3 uppercase"
                 style={{ fontSize: 'var(--fluid-base)' }}>
                <MapPin className="w-5 h-5 text-tertiary" />
                {personalInfo.location}
              </p>
            </div>

            {/* Contact with magnetic buttons */}
            <div className="flex flex-wrap gap-6 items-center animate-fade-in-delay-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group relative inline-flex items-center gap-2 px-6 py-3 font-mono font-bold uppercase text-white bg-primary border-4 border-primary overflow-hidden"
                style={{ fontSize: 'var(--fluid-lg)' }}
              >
                <span className="relative z-10">Email</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 font-mono font-bold uppercase text-primary border-4 border-primary hover:bg-primary hover:text-white"
                style={{ fontSize: 'var(--fluid-lg)' }}
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 font-mono font-bold uppercase text-primary border-4 border-primary hover:bg-primary hover:text-white"
                style={{ fontSize: 'var(--fluid-lg)' }}
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Image with enhanced effects */}
          <div className="animate-fade-in-delay-3 lg:justify-self-end">
            <div className="relative group">
              {/* Decorative corner accents */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-tertiary" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-tertiary" />

              <div className="relative w-full h-[500px] lg:w-[450px] lg:h-[600px] overflow-hidden border-8 border-primary">
                <Image
                  src="/images/me.png"
                  alt="Luke Halley"
                  fill
                  className="object-cover grayscale"
                  priority
                />
                <div className="absolute inset-0 bg-tertiary/20 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
