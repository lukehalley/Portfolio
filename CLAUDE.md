# CLAUDE.md - lukehalley.com Personal Brand Website

## Section 1: Developer Profile

**Name**: Luke Halley
**Technical Background**: Cloud Developer with 12+ years professional experience
**Expertise**: Multi-cloud infrastructure at scale (95+ AWS accounts), Terraform/IaC, CI/CD automation, database migrations, platform engineering
**Role**: Full decision-making authority on this project
**Communication Preference**: Technical and direct. Just do it - only explain non-obvious architectural decisions or tradeoffs.

---

## Section 2: Technical Stack & Decisions

### Core Stack
- **Framework**: Next.js 15 (App Router)
- **UI**: Tailwind CSS with custom brutalist design system
- **Hosting**: Vercel
- **Language**: TypeScript
- **Animation**: Framer Motion
- **Analytics**: Vercel Analytics

### Design Philosophy
- **Aesthetic**: Minimal brutalism (Vercel/Linear style)
  - Clean typography with Manrope + JetBrains Mono
  - Generous whitespace, bold geometric shapes
  - Black/white/tertiary accent (#6b6358 - warm grey)
  - Animated grid canvas background
  - Brutalist borders and shadow effects
- **Tone**: Professional but personable, technical credibility
- **Mobile-first**: Fully responsive with careful attention to mobile UX
- **Performance**: Dynamic imports for below-the-fold sections

### Key Decisions
- Custom design system (no component library dependencies like shadcn/ui)
- Content managed via TypeScript in `/data/content.ts`
- Dynamic date calculations for experience duration
- Lazy loading for performance optimization
- Custom animated components with Framer Motion
- Grid canvas background with WebGL-style effects

---

## Section 3: Code Standards

### Style Guide
- TypeScript strict mode
- Client components only where needed ('use client')
- Tailwind for all styling (no CSS modules)
- Framer Motion for animations
- Fluid typography using CSS clamp

### File Naming
- Components: PascalCase (Hero.tsx, About.tsx)
- Utils/libs: kebab-case (date-utils.ts, animations.ts)
- Data files: kebab-case

### Documentation
- Code should be self-documenting
- Comments only for non-obvious logic
- Comprehensive content structure in data files

### Git Workflow
- Main branch: master
- Default branch for PRs: add_semantic_ui
- Direct commits acceptable (solo project)

---

## Section 4: Project Structure

```
Portfolio/
├── app/
│   ├── page.tsx                 # Main page with section imports
│   ├── layout.tsx               # Root layout with SEO metadata
│   └── globals.css              # Global styles + fluid typography system
├── components/
│   ├── Hero.tsx                 # Hero section with profile image
│   ├── About.tsx                # Journey/background narrative
│   ├── Experience.tsx           # Current + previous roles
│   ├── Projects.tsx             # Professional, side, and college projects
│   ├── Skills.tsx               # Technical skills organized by category
│   ├── Education.tsx            # Degree, certifications, awards
│   ├── Personal.tsx             # Hobbies (travel, running, cooking)
│   ├── Awards.tsx               # Professional awards
│   ├── Footer.tsx               # Footer with copyright
│   ├── SidebarNav.tsx           # Sticky navigation sidebar
│   ├── GridCanvas.tsx           # Animated background grid
│   ├── EmailCopy.tsx            # Email copy functionality
│   ├── ProjectCard.tsx          # Reusable project card component
│   ├── FormattedText.tsx        # Markdown-style text formatting
│   ├── AnimatedSection.tsx      # Scroll animation wrapper
│   ├── AnimatedBorder.tsx       # Border animation component
│   ├── ScrollToTop.tsx          # Scroll to top button
│   └── Analytics.tsx            # Analytics tracking
├── lib/
│   ├── utils.ts                 # Utility functions (cn)
│   ├── date-utils.ts            # Date formatting and calculations
│   └── animations.ts            # Framer Motion animation variants
├── data/
│   └── content.ts               # All site content (structured TypeScript)
└── public/
    └── images/                  # Static images for projects, personal photos
```

### Content Management
- All content lives in `/data/content.ts` with TypeScript interfaces
- Dynamic date calculations (career years, employment durations)
- Structured exports: personalInfo, journey, experience, projects, skills, education, personal
- Project categories: professional, sideProjects, college
- Date utility functions for consistent formatting

---

## Section 5: Communication Style

- **Just do it**: Make implementation decisions without asking
- **No hand-holding**: User is technical, no need to explain basics
- **Brief updates**: "Built X, added Y" is sufficient
- **Only explain**: Non-obvious architectural choices or tradeoffs
- **No questions unless**: Genuinely ambiguous requirement or content decision

---

## Section 6: Site Structure & Content

### Current Sections (in order)

1. **Hero Section**
   - Name: Luke Halley
   - Title: "Cloud Developer\nDevOps Specialist"
   - Tagline: Multi-cloud infrastructure at enterprise scale
   - Location: Perth, Australia (linked to Google Maps)
   - Profile image with brutalist border treatment
   - Email copy button with hover states
   - GitHub and LinkedIn buttons

2. **About Section**
   - Three-paragraph journey narrative
   - Current role at Mineral Resources (Dec 2024 - Present)
   - Previous role at Verizon Connect (5+ years)
   - Education and award-winning college project (Stork)

3. **Experience Section**
   - Current: Mineral Resources (3 major achievements)
   - Previous: Verizon Connect (4 major achievements)
   - Each with title, description, impact, technologies

4. **Projects Section**
   - Three subsections: Professional, Side Projects, College
   - Featured/non-featured distinction
   - Project cards with images, tech stack, impact, links
   - Professional: Account Vending Machine, Runners Platform, AWS Pipeline Templates, Terraform Module Registry
   - Side Projects: ndisready.com.au, MigrateChart, ArbTheChain, Reduke
   - College: Stork, NoSQL-Spotify, ProjectHear, MeerkatLamp, etc.

5. **Skills Section**
   - 8 categories of technical skills
   - Infrastructure as Code, Multi-Cloud Platforms, CI/CD & Automation
   - Governance, Containers, Data & Databases, Networking, Security, Observability, Languages

6. **Education Section**
   - BSc in Internet of Things (First Class Honours)
   - Waterford Institute of Technology, Ireland (2014-2019)
   - AWS Solutions Architect Associate certification
   - SunLife 2019 Enterprise Award

7. **Personal Section**
   - Three hobbies: Travel, Running, Cooking
   - Travel: Countries visited with descriptions
   - Running: PRs from 400m to marathon
   - Cooking: Photo gallery of dishes

8. **Awards Section**
   - SunLife 2019 Enterprise Award
   - Verizon Spotlight Award

9. **Footer**
   - Copyright notice with dynamic year

### Key Content Details

**Professional Title**: "Cloud Developer" (NOT "Senior Cloud Engineer")

**Location**: Perth, Australia (NOT Sydney - user is not relocating)

**Contact**:
- Email: contact@lukehalley.com (visible with copy button)
- GitHub: https://github.com/lukehalley
- LinkedIn: https://www.linkedin.com/in/luke-halley-284b9b115/
- GitLab: https://gitlab.com/lukehalley

**Career Timeline**:
- Career start: 2013 (CAREER_START_YEAR constant)
- Verizon Connect: May 2019 - Sept 2024
- Mineral Resources: Dec 2024 - Present
- Education: Jan 2014 - Jun 2019

**Technical Expertise**:
- Multi-cloud (AWS + Azure)
- Terraform/IaC expert
- Platform engineering
- CI/CD automation
- Database migrations at scale
- 95+ AWS accounts managed
- 200+ repository migrations
- 50% cost reductions through optimization

---

## Section 7: Design System

### Color Palette
```css
--primary: #22282e      /* Near black */
--secondary: #393e46    /* Dark grey */
--tertiary: #6b6358     /* Warm grey accent */
--background: #ffffff   /* White */
```

### Typography System
- **Sans-serif**: Manrope (body text)
- **Monospace**: JetBrains Mono (technical accents, labels)
- **Fluid sizing**: CSS clamp() for responsive text

### Fluid Type Scale (in globals.css)
```
--fluid-xs: clamp(0.75rem, 2vw, 0.875rem)
--fluid-sm: clamp(0.875rem, 2.5vw, 1rem)
--fluid-base: clamp(1rem, 3vw, 1.125rem)
--fluid-lg: clamp(1.125rem, 3.5vw, 1.25rem)
--fluid-xl: clamp(1.25rem, 4vw, 1.5rem)
--fluid-2xl: clamp(1.5rem, 5vw, 1.875rem)
--fluid-3xl: clamp(1.875rem, 6vw, 2.25rem)
--fluid-4xl: clamp(2.25rem, 7vw, 3rem)
--fluid-5xl: clamp(3rem, 8vw, 3.75rem)
--fluid-6xl: clamp(3.75rem, 9vw, 4.5rem)
--fluid-7xl: clamp(4.5rem, 10vw, 6rem)
--fluid-8xl: clamp(6rem, 12vw, 8rem)
```

### Brutalist Effects
- Heavy borders (4px, 8px)
- Hard shadows: `shadow-[8px_8px_0_0_rgba(107,99,88,0.3)]`
- Corner accent decorations
- Geometric shapes
- No border-radius (sharp corners)

### Animation Patterns
- Scroll-triggered animations via Framer Motion
- Border growth effects
- Staggered text reveals
- Hover state transitions
- Grid canvas particle effects

---

## Section 8: Performance Optimization

### Implemented Strategies
- Dynamic imports for below-the-fold sections
- Image optimization with Next.js Image component
- Priority loading for hero image
- Lazy loading for non-critical components
- Font display: swap for faster text rendering
- Preload critical images

### Target Metrics
- Lighthouse score > 95
- Fast initial load
- Optimized images (WebP format)
- Static generation where possible

---

## Section 9: SEO & Metadata

### Target Keywords
- "Luke Halley DevOps"
- "Luke Halley AWS"
- "Luke Halley Cloud Developer"
- "Cloud Developer Perth"
- "DevOps Engineer Perth"

### Metadata Structure
- Dynamic years of experience calculation
- OpenGraph tags for social sharing
- Twitter card metadata
- JSON-LD structured data (Schema.org Person)
- Canonical URL: https://lukehalley.com

### OG Image
- Path: /og-image.png
- Size: 1200x630px
- Alt: "Luke Halley - Cloud Developer specializing in multi-cloud infrastructure at scale"

---

## Section 10: Maintenance & Updates

### Content Updates
- Edit `/data/content.ts` for all site content
- Date ranges auto-calculate using utility functions
- Add new projects to appropriate category (professional/sideProjects/college)
- Update experience highlights as needed

### Adding New Sections
1. Create component in `/components/`
2. Import in `/app/page.tsx`
3. Add content structure to `/data/content.ts`
4. Consider dynamic import for performance

### Image Management
- Project images: `/public/images/projects/`
- Personal photos: `/public/images/`
- Use WebP format for optimization
- Provide width/height for Next.js Image component

---

## Notes

- User is technical and comfortable with all implementation details
- This is a solo project with full autonomy
- Quality over speed (but don't over-engineer)
- Keep it maintainable and easy to update content
- Showcase expertise through clean execution, not flashy features
- Site is live at https://lukehalley.com
- Mobile experience is critical - test thoroughly on iOS Safari
