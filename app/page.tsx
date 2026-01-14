import dynamic from 'next/dynamic';
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";

// Lazy load below-the-fold sections
const Experience = dynamic(() => import('@/components/Experience').then(mod => ({ default: mod.Experience })), {
  loading: () => <div className="py-32" />
});
const Awards = dynamic(() => import('@/components/Awards').then(mod => ({ default: mod.Awards })), {
  loading: () => <div className="py-32" />
});
const Skills = dynamic(() => import('@/components/Skills').then(mod => ({ default: mod.Skills })), {
  loading: () => <div className="py-32" />
});
const Education = dynamic(() => import('@/components/Education').then(mod => ({ default: mod.Education })), {
  loading: () => <div className="py-32" />
});
const Projects = dynamic(() => import('@/components/Projects').then(mod => ({ default: mod.Projects })), {
  loading: () => <div className="py-32" />
});
const Personal = dynamic(() => import('@/components/Personal').then(mod => ({ default: mod.Personal })), {
  loading: () => <div className="py-32" />
});
const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="py-20" />
});

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Personal />
        <Awards />
      </main>
      <Footer />
    </>
  );
}
