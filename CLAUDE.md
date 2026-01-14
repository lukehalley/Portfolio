# CLAUDE.md - lukehalley.com Personal Brand Website

## Section 1: Developer Profile

**Name**: Luke Halley
**Technical Background**: Senior Cloud/DevOps Engineer with 5+ years professional experience
**Expertise**: AWS infrastructure at scale (95 accounts), Terraform, CI/CD pipelines, database migrations, automation
**Role**: Full decision-making authority on this project
**Communication Preference**: Technical and direct. Just do it - only explain non-obvious architectural decisions or tradeoffs.

---

## Section 2: Technical Stack & Decisions

### Core Stack
- **Framework**: Next.js 15 (App Router)
- **UI**: shadcn/ui + Tailwind CSS
- **Hosting**: Vercel
- **Language**: TypeScript
- **Styling**: Tailwind CSS with minimal brutalism aesthetic

### Design Philosophy
- **Aesthetic**: Minimal brutalism (Vercel/Linear style)
  - Clean typography, generous whitespace
  - Monospace accents for technical credibility
  - Black/white/single accent color
  - Focus on content over decoration
- **Tone**: Professional but personable
- **Mobile-first**: Fully responsive

### Key Decisions
- Using shadcn/ui for component library (Radix primitives, good accessibility)
- No CMS needed - content managed via code/markdown
- No blog infrastructure (not writing content)
- Static generation where possible for performance

---

## Section 3: Code Standards

### Style Guide
- TypeScript strict mode
- Functional components with hooks
- Server components by default (use 'use client' only when needed)
- Tailwind for styling (no CSS modules)
- ESLint + Prettier defaults

### File Naming
- Components: PascalCase (Hero.tsx, About.tsx)
- Utils/libs: kebab-case (format-date.ts)
- Routes: kebab-case folders

### Documentation
- Code should be self-documenting
- Add comments only for non-obvious logic
- README for setup/deployment

### Git Workflow
- Main branch = production
- Direct commits acceptable (solo project)
- Conventional commits preferred but not required

---

## Section 4: Project Structure

```
lukehalley.com/
├── app/
│   ├── page.tsx                 # Home page (Hero + About sections)
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/
│   ├── ui/                      # shadcn/ui components
│   ├── Hero.tsx                 # Hero section
│   ├── About.tsx                # About section
│   ├── Contact.tsx              # Contact links (email + socials)
│   └── ...                      # Other components as needed
├── lib/
│   └── utils.ts                 # Utility functions
├── public/
│   └── ...                      # Static assets
└── data/
    └── content.ts               # Site content (experience, skills, etc.)
```

### Content Management
- All content lives in `/data/content.ts` for easy updates
- Uses the structured data from `docs/portfolio-data.json` as baseline
- TypeScript interfaces for type safety

---

## Section 5: Communication Style

- **Just do it**: Make implementation decisions without asking
- **No hand-holding**: User is technical, no need to explain basics
- **Brief updates**: "Built X, added Y" is sufficient
- **Only explain**: Non-obvious architectural choices or tradeoffs
- **No questions unless**: Genuinely ambiguous requirement or content decision

---

## Section 6: Project-Specific Details

### Primary Goal
Build a personal brand website for passive opportunities and long-term professional presence. Not time-critical, but quality matters.

### Target Audience
- Recruiters/hiring managers (passive opportunities)
- Other DevOps/Cloud engineers
- Professional network

### MVP Scope (Phase 1)
**Single-page site with two sections:**

1. **Hero Section**
   - Name: Luke Halley
   - Title: "Cloud Developer | DevOps Engineer" (or similar)
   - Tagline: Focus on scale (95 AWS accounts, 5+ years, automation)
   - Location: Perth, Australia
   - Contact: Email visible (contact@lukehalley.com), GitHub, LinkedIn links
   - Clean, impactful, immediately communicates seniority

2. **About Section**
   - Professional background (Ireland → Verizon → MinRes → Perth)
   - Current role at Mineral Resources
   - Key achievements:
     - Infrastructure at scale (95 AWS accounts via Terraform)
     - Migration expertise (200+ repos, database migrations)
     - Automation impact (60% efficiency gains, 40% workload reduction)
   - Awards: SunLife Enterprise Award, Verizon Spotlight Award
   - Education: BSc First Class Honours, Internet of Things
   - Certifications: AWS Solutions Architect (show without dates)

### Content Details

**Location**: Perth, Australia (NOT relocating to Sydney - CV is outdated on this)

**Contact Approach**:
- Email visible: contact@lukehalley.com
- Social links: GitHub, LinkedIn, GitLab
- No contact form needed

**Projects to Showcase**:
- "Everything public" - show full technical journey
- Professional DevOps work (Terraform, CI/CD, migrations)
- Side projects: ArbTheChain crypto arbitrage suite (shows technical breadth)
- College projects: Stork (award winner), NoSQL-Spotify, Reduke
- Use GitHub API to pull live stats (stars, languages) where relevant

**Skills** (from CV):
- **Languages**: PowerShell, Go, Bash, Python, NodeJS
- **AWS**: ECS, RDS, EC2, ECR, S3, Lambda, CloudWatch, Aurora, IAM
- **IaC**: Terraform (expert), AWS CDK, CloudFormation
- **CI/CD**: GitLab CI, Azure DevOps, Octopus Deploy, Jenkins
- **Databases**: RDS, Aurora PostgreSQL/MySQL, MongoDB

**Experience Highlights**:

*Mineral Resources (Dec 2024 - Present)*
- 95 AWS accounts infrastructure deployment via Terraform + Azure DevOps
- 60% efficiency improvement
- Coupa/Redshift automation (40% workload reduction)

*Verizon Connect (May 2019 - Sept 2024)*
- 200+ repo GitLab migration
- EC2 → Fargate migrations (50% cost reduction)
- Aurora database migrations (hundreds of databases, 5 environments)
- Source-controlled Octopus step templates

### Design Requirements

**Color Scheme**:
- Primary: Black/white
- Accent: Single accent color (AWS orange? Subtle blue? Your call)
- Dark mode not required (clean light theme is fine)

**Typography**:
- Clean sans-serif for body
- Monospace accents for technical credibility
- Generous whitespace, readable sizes

**Visual Elements**:
- Minimal decoration
- Focus on content hierarchy
- Professional photography/avatar if available, otherwise clean initials or minimal graphic

### Future Considerations (Not MVP)

**Phase 2 possibilities** (not building now):
- Projects page with detailed GitHub repo showcases
- Skills visualization/interactive elements
- Resume/CV download
- Blog infrastructure (if changes mind)
- Testimonials/recommendations

**SEO Priorities**:
- Target keywords: "Luke Halley DevOps", "Luke Halley AWS", "Luke Halley Cloud Engineer"
- Differentiate from other "Luke Halley" professionals
- Proper meta tags, OpenGraph for social sharing

### Technical Requirements

**Performance**:
- Lighthouse score > 95
- Fast initial load
- Optimized images
- Static generation where possible

**Browser Support**:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (iOS Safari, Chrome Android)

**Accessibility**:
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Good color contrast

### Content Source Files
- CV: `/resources/CV.tex`
- Portfolio data: `/docs/portfolio-data.json`
- Profile docs: `/docs/` (linkedin-profile.md, current-profile.md, etc.)

### Domain
- Target domain: `lukehalley.com` (not yet confirmed if purchased)
- Deploy to Vercel preview URL for now
- Easy to connect custom domain when ready

---

## Notes

- User is technical and comfortable with all implementation details
- This is a solo project with full autonomy
- Quality > speed (but don't over-engineer)
- Keep it maintainable and easy to update content
- Showcase expertise through clean execution, not flashy features
