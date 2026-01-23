// Blog content structure with TypeScript types

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  readingTime: number;
  tags: string[];
  featured: boolean;
  content: string;
}

export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export const author: BlogAuthor = {
  name: "Luke Halley",
  role: "Cloud Developer",
  avatar: "/images/me.webp",
  bio: "Cloud Developer building multi-cloud infrastructure at scale. I write about open-source, DevOps, and the tools that make developers more productive.",
};

export const posts: BlogPost[] = [
  {
    slug: "marketing-skills-for-ai-agents",
    title: "Your AI Can't Write Landing Pages",
    subtitle: "Until You Give It These 24 Marketing Skills",
    excerpt: "I asked Claude to optimize my landing page. It gave me generic advice. Then I installed one open-source project—and it started thinking like a conversion specialist.",
    date: "2026-01-23",
    readingTime: 6,
    tags: ["Open Source", "AI", "Claude Code", "Developer Tools"],
    featured: true,
    content: `"Make the headline more compelling."

That's what Claude told me when I asked it to improve my landing page. Technically correct. Completely useless.

I build infrastructure for a living—Terraform, AWS, CI/CD pipelines. Writing marketing copy isn't my strength. So I turned to AI for help. And got the equivalent of "have you tried making it better?"

Then I found **marketingskills**.

One \`npx\` command later, the same AI that gave me vague platitudes started asking me about my target audience's objections, suggesting specific headline formulas, and walking me through a conversion optimization framework I'd never heard of.

The difference wasn't the AI. It was what I fed it.

## The Problem With Generalist AI

Claude Code writes excellent code. It navigates complex codebases. It debugs issues I'd spend hours on.

But ask it to write copy that converts? You get competent advice—the kind you'd find in any "10 Tips for Better Headlines" blog post.

Here's why: AI is a generalist. It knows a little about everything. For specialized tasks, "a little" isn't enough.

Marketing agencies charge $10,000+ for conversion audits. That expertise comes from frameworks developed over years, tested across hundreds of campaigns. Your AI doesn't have those frameworks.

Unless you give them to it.

## Skills: Downloadable Expertise

A skill is a markdown file that injects domain expertise into your AI's context. Simple as that.

When you install a skill and trigger it (either by keyword or direct invocation), the AI doesn't just answer your question—it thinks through a structured methodology.

Here's what a skill looks like:

\`\`\`markdown
---
name: page-cro
description: Conversion optimization for marketing pages
---

# Page CRO

You are an expert conversion rate optimizer.

## Before Analyzing

1. What is the ONE action you want visitors to take?
2. Where is traffic coming from?
3. What objections does this audience have?

## Analysis Framework

### Above the Fold
- Is the value proposition clear in 5 seconds?
- Does the headline speak to a specific pain?
- Is the CTA action-oriented (not "Submit")?
...
\`\`\`

The AI now has a checklist. A framework. A methodology.

It stops saying "make it more compelling" and starts saying "your headline buries the benefit—try leading with the outcome instead of the feature."

## 24 Skills. Every Marketing Discipline.

Corey Haines (founder of Swipe Files and Conversion Factory) built **marketingskills**—an open-source collection covering the full marketing stack:

| What You're Doing | Skill to Use |
|-------------------|--------------|
| Optimizing a landing page | page-cro |
| Writing homepage copy | copywriting |
| Building an email sequence | email-sequence |
| Planning a free tool for leads | free-tool-strategy |
| Setting up conversion tracking | analytics-tracking |
| Designing a pricing page | pricing-strategy |
| Running A/B tests | ab-test-setup |
| Creating competitor comparison pages | competitor-alternatives |

Each skill contains complete frameworks—not tips. The copywriting skill has 15+ headline formulas. The page-cro skill has a section-by-section audit checklist. The pricing-strategy skill walks through anchoring, decoy pricing, and tier differentiation.

## The Skill That Taught Me Most

**free-tool-strategy** caught my attention because it bridges engineering and marketing—my world and the one I'm learning.

The concept: build a free tool (calculator, analyzer, generator) that solves a real problem for your audience. The tool attracts users. Some of those users become customers.

Sounds simple. But the skill breaks it into components I'd never considered:

### Which Tool Type Works Best?

\`\`\`markdown
Calculators → Personalized output, high perceived value
Generators → Tangible deliverable, repeat usage
Analyzers → Curiosity-driven, creates problem awareness
\`\`\`

### How to Score Your Idea

\`\`\`markdown
| Factor | Score 1-5 |
|--------|-----------|
| Search demand for this problem | ___ |
| Audience matches your buyers | ___ |
| Clear path from tool to product | ___ |
| You can build an MVP in a week | ___ |
| Total 20+: Build it |
\`\`\`

### Gating Strategy

\`\`\`markdown
Fully gated (email required): Lower usage, higher capture
Partially gated (email for full results): Best balance
Ungated: Maximum reach, relies on remarketing
\`\`\`

I spent years building infrastructure without thinking about the marketing layer. This single skill reframed how I think about side projects.

## Install in 60 Seconds

\`\`\`bash
# Install all 24 skills
npx add-skill coreyhaines31/marketingskills

# Or pick specific ones
npx add-skill coreyhaines31/marketingskills --skill copywriting page-cro

# See what's available
npx add-skill coreyhaines31/marketingskills --list
\`\`\`

Skills install to \`~/.claude/skills/\`. Claude Code detects them automatically. Mention "optimize this page" and page-cro activates. Ask to "write copy" and copywriting kicks in.

## Why This Matters Beyond Marketing

This project proves a bigger point: **AI becomes dramatically more useful with structured domain knowledge.**

Right now, we treat AI as a generalist and accept generalist output. But the architecture supports specialization. Skills are the mechanism.

I expect skill ecosystems for every domain:

- **DevOps**: Incident response runbooks, postmortem frameworks
- **Security**: Threat modeling checklists, OWASP analysis
- **Architecture**: System design patterns, trade-off frameworks
- **Finance**: Budgeting models, forecasting methodologies

The marketingskills project is open-source and MIT licensed. Fork it. Learn from it. Build your own.

## Start Here

If you use Claude Code, install at least \`copywriting\` and \`page-cro\`. Even if you never build a landing page, you'll understand structured expertise transfer—and probably apply it elsewhere.

\`\`\`bash
npx add-skill coreyhaines31/marketingskills --skill copywriting page-cro
\`\`\`

Repository: [github.com/coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)

And if you have domain expertise worth encoding—consider building skills yourself. The format is simple. The contribution model is pull requests. The impact is real: you're teaching AI to think like an expert.

---

*First post on this blog. I write about open-source tools that make developers more productive—especially at the intersection of infrastructure and AI. More coming.*`,
  },
];

// Utility functions
export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedPosts(): BlogPost[] {
  return posts.filter((post) => post.featured);
}

export function formatBlogDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
