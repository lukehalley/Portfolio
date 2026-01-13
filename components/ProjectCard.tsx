import { Github, ExternalLink, Star } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  category: string;
  period: string;
  description: string;
  impact?: string;
  technologies: string[];
  link?: string;
  featured?: boolean;
  image?: string;
}

export function ProjectCard({
  title,
  subtitle,
  category,
  period,
  description,
  impact,
  technologies,
  link,
  featured = false,
  image,
}: ProjectCardProps) {
  return (
    <div className={`brutal-border bg-white p-8 md:p-10 group relative flex flex-col ${featured ? 'border-tertiary' : ''}`}>
      {/* Background Image - Faded and positioned to the right corner */}
      {image && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -right-[5%] top-0 w-full h-full opacity-5">
            <Image
              src={image}
              alt=""
              fill
              className="object-contain object-right scale-150 grayscale"
            />
            <div className="absolute inset-0 bg-tertiary/20 mix-blend-multiply" />
          </div>
        </div>
      )}

      {/* Category Label with enhanced styling */}
      <div className={`absolute -top-4 left-8 bg-white px-4 py-2 border-4 z-10 ${featured ? 'border-tertiary' : 'border-primary'}`}>
        <span className={`font-mono font-black tracking-tight uppercase ${featured ? 'text-tertiary' : ''}`} style={{ fontSize: 'var(--fluid-sm)' }}>
          {category}
        </span>
      </div>

      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-4 right-8 bg-tertiary px-4 py-2 border-4 border-tertiary z-10 flex items-center gap-2">
          <Star className="w-4 h-4 text-white fill-white" />
          <span className="font-mono font-black tracking-tight uppercase text-white" style={{ fontSize: 'var(--fluid-sm)' }}>
            Featured
          </span>
        </div>
      )}

      {/* Decorative corner accent */}
      <div className={`absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 ${featured ? 'border-tertiary/40' : 'border-tertiary/20'}`} />

      {/* Title, Subtitle and Link */}
      <div className="relative z-10 mt-6 mb-4 flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3
            className="font-bold leading-tight"
            style={{ fontSize: 'var(--fluid-3xl)' }}
          >
            {title}
          </h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary hover:text-primary flex-shrink-0 transition-colors duration-300"
              aria-label={`View ${title}`}
            >
              {link.includes('github') ? (
                <Github className="w-8 h-8" />
              ) : (
                <ExternalLink className="w-8 h-8" />
              )}
            </a>
          )}
        </div>
        <p
          className="text-secondary/80"
          style={{ fontSize: 'var(--fluid-lg)' }}
        >
          {subtitle}
        </p>
      </div>

      {/* Meta Info */}
      <div className="relative z-10 mb-6 font-mono opacity-60"
           style={{ fontSize: 'var(--fluid-sm)' }}>
        <span className="font-bold">{period}</span>
      </div>

      {/* Description */}
      <p
        className="relative z-10 leading-relaxed mb-6 opacity-90"
        style={{ fontSize: 'var(--fluid-lg)' }}
      >
        {description}
      </p>

      {/* Technologies */}
      <div className="relative z-10 mt-auto">
        <div className="flex flex-wrap gap-2 content-start">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 font-mono border-2 border-primary/60 hover:border-tertiary hover:bg-tertiary hover:text-primary cursor-default transition-colors duration-300"
              style={{ fontSize: 'var(--fluid-xs)' }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Keep impact in interface for backwards compatibility but don't render it
