import {
  createDateRange,
  formatDateRange,
  formatDuration,
  calculateCareerYears,
} from '@/lib/date-utils';

// Career start date (first professional role after graduation)
const CAREER_START_YEAR = 2013;

// Key employment dates, matching LinkedIn
const VERTICALAI_ROLE = createDateRange('2026-09');
const MINING_ROLE = createDateRange('2024-12', '2026-06');
const VERIZON_END = createDateRange('2019-05', '2024-09');
const EDUCATION_RANGE = createDateRange('2014-01', '2019-06');

export const verticalAI = {
  name: "VerticalAI",
  url: "https://verticalai.com.au",
  domain: "verticalai.com.au",
};

export const personalInfo = {
  name: "Luke Halley",
  title: "Lead Engineer @ VerticalAI\nVoice AI · Perth",
  tagline: "I build the real-time runtime behind\n**voice and text agents** that answer\nthe calls Australian businesses miss.",
  careerStartYear: CAREER_START_YEAR,
  yearsOfExperience: calculateCareerYears(CAREER_START_YEAR),
  location: "Perth, Australia",
  email: "development@lukehalley.com",
  social: {
    github: "https://github.com/lukehalley",
    gitlab: "https://gitlab.com/lukehalley",
    linkedin: "https://www.linkedin.com/in/lukehalley/",
  },
};

// Sources: LinkedIn experience entry and posts, read 14 Oct 2026.
// Naming rule: work from before 22 Sep 2026 is "the team", never "I".
export const now = {
  eyebrow: `Now · Lead Engineer · ${formatDateRange(VERTICALAI_ROLE)}`,
  intro:
    "VerticalAI builds voice and text agents that answer the calls an Australian business misses. Built in Perth, hosted in Sydney. It is my first startup: what I ship in the morning is on a live call that afternoon.",
  stats: [
    { value: "<3s", label: "Lead callback", proof: "A web form or CRM posts the enquiry. The agent rings the lead back." },
    { value: "24/7", label: "Pickup", proof: "Every call answered, out of hours included." },
    { value: "10+ min", label: "Live calls", proof: "Agents hold long, multi-step conversations on real calls." },
    { value: "AU", label: "Onshore", proof: "Calls run on our own infrastructure, hosted in Sydney." },
  ],
  build: [
    {
      title: "Voice runtime",
      description: "The runtime that holds a live phone conversation: listening, thinking, speaking, and knowing when to stop talking.",
    },
    {
      title: "Synthetic callers",
      description: "A test suite that rings the agent with synthetic callers before any change ships.",
    },
    {
      title: "Platform and CI/CD",
      description: "Infrastructure and deployment pipelines across three environments.",
    },
    {
      title: "Agent builder",
      description: "The web app customers use to build and monitor their agents.",
    },
  ],
  shipped: {
    title: "Lead callbacks in under three seconds",
    steps: [
      "Your website form or CRM posts the enquiry.",
      "The agent calls the number the lead typed in.",
      "It says up front that it is an AI and asks two or three questions.",
      "It puts the lead through to your team to close.",
    ],
  },
  caseStudy: {
    title: "The Mayfair, Emerald",
    description:
      "The team built the whole courtesy-bus dispatch, not just the phone agent: bookings by phone, a driver job board, address checks with read-back, and landmark lookups for patrons without a street address.",
    stats: [
      { value: "9 in 10", label: "calls handled with no transfer to staff" },
      { value: ">4 in 10", label: "calls arrive after 6pm" },
    ],
    source: "Production data, 25 Aug to 15 Sep 2026.",
    url: "https://verticalai.com.au/case-studies/the-mayfair-emerald",
  },
  stack: ["Pipecat", "Telnyx", "Amazon Bedrock (Sydney)", "Anthropic", "Python", "TypeScript", "Next.js", "AWS"],
  talk: "Gave my first ProductTank Perth talk, with Brian Foody, in October 2026.",
};

export const journey = [
  `Since **${formatDateRange(VERTICALAI_ROLE).split(' - ')[0]}** I've been **Lead Engineer at VerticalAI**, building the platform its **voice and text agents** run on. Real-time voice is the newest thing I've worked on, and now it's the day job.`,
  `Before that I was the **sole architect of the AWS cloud platform at Mineral Resources** (${formatDateRange(MINING_ROLE)}), used by **100+ development teams**. I built the CI/CD template library, a serverless build-agent platform, the account factory and a self-hosted Terraform stack. **$369K a year in documented savings.**`,
  `Before that, **${formatDuration(VERIZON_END)} at Verizon Connect** in Ireland (${formatDateRange(VERIZON_END)}): migrating 200+ repositories to GitLab, moving workloads from EC2 to Fargate, and building **source-controlled Octopus Deploy templates**. I started with a **First Class Honours BSc** in the Internet of Things from Waterford Institute of Technology.`,
];

export const experience = {
  current: {
    company: "VerticalAI",
    role: "Lead Engineer",
    period: formatDateRange(VERTICALAI_ROLE),
    location: "Perth, Australia · Hybrid",
    context: "Voice and text agents that answer the calls an Australian business misses. I build the platform the agents run on: the real-time voice runtime, the synthetic-caller test suite, CI/CD and infrastructure across three environments, and the web app customers use to build and monitor their agents.",
    link: "https://verticalai.com.au",
    highlights: [],
  } as null | {
    company: string;
    role: string;
    period: string;
    location: string;
    context: string;
    link?: string;
    highlights: Array<{
      title: string;
      description: string;
      impact: string;
      technologies: string[];
    }>;
  },
  previous: [
    {
      company: "Mineral Resources",
      role: "Cloud Developer → Senior Cloud Developer",
      period: formatDateRange(MINING_ROLE),
      location: "Perth, Australia",
      badge: "Before VerticalAI",
      context: "ASX-listed mining company. Sole architect and primary engineer of the AWS cloud platform used by 100+ development teams. Promoted to Senior in 8 months, with zero production incidents across every system I owned.",
      highlights: [
        {
          title: "Serverless Build-Agent Platform",
          description: "Built a production **serverless build-agent platform** from scratch. The flow runs **API Gateway → SQS FIFO → Lambda → ECS Fargate / EC2 Spot**, with 9 specialised runner types, DynamoDB allocation tracking, and a warm pool for sub-5-second pickup. It replaced an expensive always-on runner fleet with ephemeral, on-demand containers.",
          impact: "83% faster cold-starts (180s → 20s) · ~70% cheaper",
          technologies: ["ECS Fargate", "Lambda", "SQS FIFO", "DynamoDB", "EC2 Spot", "CloudWatch"],
        },
        {
          title: "Hub-and-Spoke Account Factory",
          description: "I designed the central automation that provisions **every AWS account, identity group and CI/CD project** in the org, with OIDC trust, SSO assignment, and 9-layer state protection. One pipeline run stands up a governed account in about 10 minutes. The same work used to take 2 to 3 days across five teams.",
          impact: "44+ accounts · 2-3 days → 10 minutes",
          technologies: ["Terraform", "CloudFormation StackSets", "OIDC", "IAM Identity Center", "Azure AD"],
        },
        {
          title: "Org-Wide CI/CD Template Library",
          description: "I authored the **pipeline template system every team deploys through**: 10 reusable templates with **OIDC federation and zero stored credentials**, automated security scanning, and change-management gates. One security patch protects every team at once. New-project onboarding dropped from days to hours.",
          impact: "284 pipelines · 42 projects · 0 stored credentials",
          technologies: ["Azure Pipelines", "OIDC", "Terraform", "Trivy", "Bandit", "ServiceNow"],
        },
        {
          title: "Terraform Cloud → Self-Hosted Migration",
          description: "Licensing would have hit **$150K+/year at scale**, so I led the org **off Terraform Cloud** onto a self-built platform: a private Go module registry, a credential-vending API, S3 state with DynamoDB locking, and a Python migration tool. It moved with **zero downtime and no team disruption**.",
          impact: "$150K+/year avoided · 33/40 repositories migrated",
          technologies: ["Go", "Python", "Terraform / OpenTofu", "S3", "RDS", "ECS Fargate"],
        },
        {
          title: "Developer CLI & Cost Visibility",
          description: "I built a **zero-dependency Python CLI** that vends short-lived STS credentials and runs Terraform plans against any account locally. It cut the test loop to **30 seconds**, down from 5 to 10 minutes. I also shipped a Next.js cost dashboard with AI cost analysis for the finance team.",
          impact: "Test loop 10 min → 30 sec · daily-driver tooling",
          technologies: ["Python", "OAuth2 PKCE", "STS", "Next.js", "Cost Explorer", "Bedrock"],
        },
      ],
    },
    {
      company: "Verizon Connect",
      role: "DevOps Engineer",
      period: formatDateRange(VERIZON_END),
      location: "Dublin, Ireland",
      context: "Fleet management and telematics. Graduate role, then Level III CI/CD DevOps Engineer.",
      highlights: [
        {
          title: "GitLab Migration Pipeline",
          description: "Wrote a **PowerShell tool** that migrated Bitbucket repositories to GitLab unattended. It carried over branch protection rules, converted CI/CD pipelines and kept full commit history, with zero data loss.",
          impact: "200+ repositories migrated",
          technologies: ["PowerShell", "GitLab CI", "Bitbucket", "REST APIs"],
        },
        {
          title: "EC2 to Fargate",
          description: "Led the company-wide **move from EC2 to Fargate**, redesigning how containers were deployed. Added auto-scaling policies and tuned task definitions across production workloads.",
          impact: "50% cost reduction",
          technologies: ["ECS Fargate", "Docker", "EC2", "Auto Scaling", "CloudWatch"],
        },
        {
          title: "Database Migrations",
          description: "Worked with **AWS ProServe** to migrate hundreds of SQL Server databases to Aurora PostgreSQL. Designed the blue-green cutover, with DMS replication across five environments (dev, test, staging, UAT, prod).",
          impact: "Hundreds of databases · 5 environments",
          technologies: ["Aurora PostgreSQL", "DMS", "SQL Server", "RDS", "Blue-Green Deployments"],
        },
        {
          title: "Octopus Deploy as Code",
          description: "Put **Octopus Deploy step templates under source control**, keeping hundreds of templates in sync across two Octopus instances. Teams changed templates through a pull request instead of a ticket, and the API applied it.",
          impact: "Fewer daily requests to the CI/CD team",
          technologies: ["Octopus Deploy", "PowerShell", "REST APIs", "Git"],
        },
      ],
    },
  ] as Array<{
    company: string;
    role: string;
    period: string;
    location: string;
    badge?: string;
    context?: string;
    highlights: Array<{
      title: string;
      description: string;
      impact: string;
      technologies: string[];
    }>;
  }>,
  awards: [
    "Promoted to Senior in 8 Months",
    "Top Performance Rating: “Always”",
    "2019 Enterprise Award",
    "Verizon Spotlight Award",
  ],
};

// Verified impact from the cloud platform role. Every figure is sourced from
// git history, AWS billing, internal promotion review, and the performance
// review. Anonymised: no account IDs or internal identifiers.
export const impact = {
  eyebrow: `Mineral Resources · ${formatDateRange(MINING_ROLE)} · sole platform architect`,
  intro:
    "Before VerticalAI I was the sole architect of the AWS cloud platform at Mineral Resources, an ASX-listed mining company. 100+ development teams deployed through the systems I designed and shipped. Every number below comes from git history, billing and internal review.",
  headline: {
    value: "$369K",
    unit: "/year",
    label: "Documented cost savings",
    proof: "Verified in the promotion review: a 12.6× return on the raise it earned.",
  },
  avoided: "$150K+/year in licensing avoided on top",
  stats: [
    { value: "0", label: "Production incidents", proof: "Across every platform, the entire tenure." },
    { value: "18", label: "Systems built from scratch", proof: "Runners, account factory, CLI, registries, dashboards." },
    { value: "100+", label: "Engineering teams served", proof: "Every AWS deployment in the org ran through my pipelines." },
    { value: "4,766", label: "Commits", proof: "#1 contributor on every major platform, by 5 to 26×." },
    { value: "284", label: "CI/CD pipelines", proof: "Running on 10 templates I authored, across 42 projects." },
    { value: "91", label: "AWS accounts", proof: "Networking centralised, 696+ live resources imported into Terraform." },
    { value: "83%", label: "Faster build cold-starts", proof: "180s → 20s on the serverless agent platform." },
    { value: "38,479", label: "Build agents provisioned", proof: "On the serverless platform. $194K a year saved." },
  ],
  quote: {
    text: "Luke is the best. No notes.",
    attribution: "Engineering leader, performance review",
  },
};

export const skills = {
  "Voice AI & Agents": [
    { name: "Pipecat" },
    { name: "Telnyx" },
    { name: "Amazon Bedrock" },
    { name: "Anthropic Claude" },
    { name: "Tool calling" },
    { name: "Evals & synthetic calls" },
  ],
  "Infrastructure as Code": [
    { name: "Terraform / OpenTofu" },
    { name: "AWS CDK" },
    { name: "CloudFormation" },
    { name: "Checkov / tfsec" },
    { name: "OPA / Sentinel" },
  ],
  "Multi-Cloud Platforms": [
    { name: "AWS" },
    { name: "Azure" },
  ],
  "CI/CD & Automation": [
    { name: "GitLab CI" },
    { name: "GitHub Actions" },
    { name: "Azure Pipelines" },
    { name: "Octopus Deploy" },
    { name: "Jenkins" },
    { name: "Step Functions" },
  ],
  "Governance & Multi-Account": [
    { name: "AWS Organizations" },
    { name: "Control Tower" },
    { name: "Service Catalog" },
    { name: "Service Control Policies" },
  ],
  "Containers & Compute": [
    { name: "ECS / Fargate" },
    { name: "Docker" },
    { name: "EC2 & Auto Scaling" },
    { name: "Lambda" },
  ],
  "Data & Databases": [
    { name: "RDS / Aurora" },
    { name: "DynamoDB" },
    { name: "Redshift" },
    { name: "DMS" },
    { name: "SQS / SNS" },
  ],
  "Networking & Edge": [
    { name: "VPC Design" },
    { name: "Transit Gateway" },
    { name: "ALB / NLB" },
    { name: "API Gateway" },
    { name: "CloudFront" },
    { name: "Route53" },
  ],
  "Security": [
    { name: "IAM & Identity Center" },
    { name: "Security Hub" },
    { name: "AWS Config Rules" },
    { name: "GuardDuty" },
    { name: "Secrets Manager" },
  ],
  "Observability": [
    { name: "CloudWatch Logs & Metrics" },
    { name: "CloudWatch Alarms" },
    { name: "EventBridge" },
    { name: "X-Ray" },
  ],
  "Languages": [
    { name: "Python" },
    { name: "TypeScript" },
    { name: "Go" },
    { name: "PowerShell" },
    { name: "Bash" },
  ],
};

export const education = {
  degree: "BSc in Internet of Things",
  honours: "First Class Honours",
  institution: "Waterford Institute of Technology, Ireland",
  period: formatDateRange(EDUCATION_RANGE),
  award: "2019 Enterprise Award for IoT tracking system (Stork)",
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      level: "Associate",
      url: "https://www.credly.com/badges/1c32c717-2f94-42cf-af07-e31498b86558",
    },
  ],
};

export const personal = {
  hobbies: [
    {
      name: "Travel",
      description: "Thailand, Slovenia, Italy, France and a few other places so far. Moving from Ireland to Perth was the biggest trip of the lot. There is a long list still to get through.",
    },
    {
      name: "Running",
      description: "Running since I was 7, starting with local races in Ireland. Marathon PB 3:08:26, half 1:22:44. It is how I clear my head after a day of debugging live calls.",
    },
    {
      name: "Cooking",
      description: "Irish, Italian and French, mostly. Cooking is hands-on work with no screen involved, which makes it the best way I know to switch off. It also means I eat well.",
    },
  ],
};

// Project date ranges
const PROJECT_ATC = createDateRange('2022-01', '2023-12');
const PROJECT_STORK = createDateRange('2019-01', '2019-06');
const PROJECT_NDIS_START = createDateRange('2024-01');

export const projects = {
  professional: [
    {
      title: "Serverless Build-Agent Platform",
      subtitle: "Ephemeral CI/CD Runners",
      category: "Platform Engineering",
      period: "2025-26",
      description:
        "Production serverless build-agent platform replacing an always-on runner fleet. API Gateway → SQS FIFO → Lambda → ECS Fargate & EC2 Spot, with 9 specialised runner types and a warm pool for sub-5-second pickup. 38K+ provisioning events served.",
      technologies: ["ECS Fargate", "Lambda", "SQS FIFO", "DynamoDB", "EC2 Spot", "CloudWatch", "Docker"],
      impact: "83% faster cold-starts · ~70% cheaper",
      featured: true,
      image: "/images/projects/runners.svg",
    },
    {
      title: "Cloud Account Factory",
      subtitle: "Hub-and-Spoke Provisioning",
      category: "Governance & IaC",
      period: "2025-26",
      description:
        "Central automation that provisions every AWS account, identity group and CI/CD project across the org. One pipeline run stands up a governed account in about 10 minutes. The same work used to take 2 to 3 days across five teams.",
      technologies: ["Terraform", "CloudFormation StackSets", "OIDC", "IAM Identity Center", "Azure AD"],
      impact: "44+ accounts · 2-3 days → 10 min",
      featured: true,
      image: "/images/projects/aws-manage.svg",
    },
    {
      title: "CI/CD Template Library",
      subtitle: "Zero-Credential Pipelines",
      category: "Developer Platform",
      period: "2025-26",
      description:
        "The pipeline template system every team deploys through. 10 reusable templates with OIDC federation and no stored credentials, automated security scanning, and change-management gates. One security patch protects 100+ teams at once.",
      technologies: ["Azure Pipelines", "OIDC", "Terraform", "Trivy", "Bandit", "ServiceNow"],
      impact: "284 pipelines · 42 projects",
      featured: true,
      image: "/images/projects/templates.svg",
    },
    {
      title: "Private Module Registry",
      subtitle: "Terraform Registry + SSO/RBAC",
      category: "Developer Platform",
      period: "2025-26",
      description:
        "Forked an open-source Go registry into a production private Terraform module registry with enterprise SSO, Casbin RBAC and daily group sync. Multi-AZ ECS Fargate, Postgres backend, automatic semantic versioning from conventional commits.",
      technologies: ["Go", "ECS Fargate", "PostgreSQL", "OIDC SSO", "S3", "Casbin"],
      impact: "Single source of truth for all IaC modules",
      featured: false,
      image: "/images/projects/modules.svg",
    },
    {
      title: "Self-Hosted Terraform Platform",
      subtitle: "Credential Vending + Local Plans",
      category: "Developer Platform",
      period: "2025-26",
      description:
        "The in-house replacement for Terraform Cloud: a Lambda credential-vending API plus a zero-dependency Python CLI that runs Terraform plans against any account locally. Cut the local test loop to 30 seconds, down from 5 to 10 minutes.",
      technologies: ["Python", "OAuth2 PKCE", "STS", "Lambda", "DynamoDB", "ALB"],
      impact: "Test loop 10 min → 30 sec",
      featured: false,
      image: "/images/projects/modules.svg",
    },
    {
      title: "Cost Visibility Platform",
      subtitle: "Estate-Wide Cost Reporting",
      category: "FinOps",
      period: "2025-26",
      description:
        "Automated cost reporting across the entire AWS estate: monthly reports via Cost Explorer plus a real-time Next.js dashboard with an AI cost-analysis chat. EventBridge-scheduled Lambda pipeline with Redis caching.",
      technologies: ["Next.js", "Lambda", "Cost Explorer", "Bedrock", "Redis", "EventBridge"],
      impact: "Estate-wide spend visibility for finance",
      featured: false,
      image: "/images/projects/templates.svg",
    },
  ] as Array<{
    title: string;
    subtitle: string;
    category: string;
    period: string;
    description: string;
    technologies: string[];
    impact: string;
    featured: boolean;
    image: string;
    link?: string;
  }>,
  sideProjects: [
    {
      title: "ndisready.com.au",
      subtitle: "NDIS Provider Platform",
      category: "Production SaaS",
      period: formatDateRange(PROJECT_NDIS_START),
      description: "Live production platform connecting NDIS providers with clients across Australia. Full-stack Next.js app with a provider directory, search and filtering, appointment booking and SEO.",
      technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Vercel", "SEO"],
      impact: "Live production • Active users",
      featured: true,
      link: "https://ndisready.com.au",
      image: "/images/projects/ndis.png",
    },
    {
      title: "MigrateChart",
      subtitle: "Multi-Pool Price History Platform",
      category: "FinTech Tools",
      period: "2026",
      description: "Full-stack platform consolidating historical price data across liquidity pool migrations. Python data pipeline fetches OHLCV data via GeckoTerminal API, A Next.js app charts it interactively, with gap interpolation across each migration.",
      technologies: ["Next.js", "TypeScript", "Python", "Recharts", "Supabase", "Vercel"],
      impact: "Live production • Multi-pool tracking",
      featured: false,
      link: "https://github.com/lukehalley/MigrateChart",
      image: "/images/projects/crypto.png",
    },
    {
      title: "ArbTheChain",
      subtitle: "Go Microservices • Real-Time Data Processing",
      category: "FinTech Infrastructure",
      period: formatDateRange(PROJECT_ATC),
      description: "Production-grade cryptocurrency arbitrage platform built with 10+ Go microservices and Python services, deployed via Terraform on AWS. Real-time collectors process exchange feeds, feeding route optimisation, an execution engine and monitoring.",
      technologies: ["Go", "Python", "Terraform", "AWS Lambda", "DynamoDB", "EventBridge"],
      impact: "10+ microservices • Real-time trading",
      featured: true,
      link: "https://github.com/lukehalley/AtcScraperGo",
      image: "/images/projects/bitcoin.png",
    },
  ],
  // College projects use static year strings as they're historical and won't change
  college: [
    {
      title: "Stork",
      subtitle: "IoT Tracking System",
      category: "Award Winner",
      period: formatDateRange(PROJECT_STORK),
      description: "Award-winning IoT solution for elderly care safety. End-to-end system: custom GPS tracking devices, Python backend services, real-time web dashboard, and SMS alerting. Capstone project earning First Class Honours and a 2019 Enterprise Award.",
      technologies: ["IoT", "Python", "GPS", "WebSockets", "AWS", "SMS"],
      impact: "Enterprise Award • Honours Project",
      featured: true,
      link: "https://github.com/lukehalley/StorkWebService",
      image: "/images/projects/stork.png",
    },
    {
      title: "NoSQL-Spotify",
      subtitle: "Music Database System",
      category: "Database",
      period: "2017",
      description: "MongoDB-based Spotify data exploration system demonstrating NoSQL design patterns and aggregation pipelines.",
      technologies: ["MongoDB", "JavaScript", "Node.js"],
      impact: "27 GitHub stars",
      featured: false,
      link: "https://github.com/lukehalley/NoSQL-Spotify",
      image: "/images/projects/spotify-logo.webp",
    },
    {
      title: "Reduke",
      subtitle: "Reddit Mobile Client",
      category: "Mobile",
      period: "2018",
      description: "Feature-rich Reddit client built in Kotlin with Firebase authentication, real-time updates, and clean MVVM architecture.",
      technologies: ["Kotlin", "Firebase", "Android", "MVVM"],
      impact: "14 GitHub stars",
      featured: false,
      link: "https://github.com/lukehalley/Reduke",
      image: "/images/projects/reddit.png",
    },
    {
      title: "ProjectHear",
      subtitle: "Studio Safety Device",
      category: "IoT/Hardware",
      period: "2018",
      description: "Intel Galileo-based hearing protection device for music studios. Real-time audio monitoring with threshold alerts.",
      technologies: ["Python", "Intel Galileo", "Audio Processing", "IoT"],
      impact: "Studio safety device",
      featured: false,
      link: "https://github.com/lukehalley/ProjectHear",
      image: "/images/projects/audio.png",
    },
    {
      title: "MeerkatLamp",
      subtitle: "Interactive Robotic Art",
      category: "IoT/Interactive",
      period: "2018",
      description: "Interactive robotic lamp mimicking meerkat behavior patterns. Integrated with Ableton Live for music-responsive movements.",
      technologies: ["C", "Ableton Live", "Robotics", "Embedded Systems"],
      impact: "Interactive art project",
      featured: false,
      link: "https://github.com/lukehalley/MeerkatLamp",
      image: "/images/projects/robotics.png",
    },
    {
      title: "Instrum.io",
      subtitle: "Music Marketplace",
      category: "Web",
      period: "2018",
      description: "Musical instrument marketplace web application with user authentication, listings, and search.",
      technologies: ["Node.js", "MongoDB", "Mongoose", "Express"],
      impact: "Full-stack marketplace",
      featured: false,
      link: "https://github.com/lukehalley/Instrum.io",
      image: "/images/projects/marketplace.png",
    },
    {
      title: "Autocorrect",
      subtitle: "Spell-Checking Algorithm",
      category: "Algorithms",
      period: "2017",
      description: "Spell-checking system using Trie data structure and Levenshtein distance algorithm.",
      technologies: ["Java", "Trie", "Algorithms", "Data Structures"],
      impact: "2 GitHub stars",
      featured: false,
      link: "https://github.com/lukehalley/Autocorrect",
      image: "/images/projects/algorithm.png",
    },
    {
      title: "STV-Haskell",
      subtitle: "Electoral System Algorithm",
      category: "Algorithms",
      period: "2019",
      description: "Single Transferable Vote electoral system implementation in functional programming.",
      technologies: ["Haskell", "Functional Programming", "Algorithms"],
      impact: "Electoral system",
      featured: false,
      link: "https://github.com/lukehalley/STV-Haskell",
      image: "/images/projects/haskell.png",
    },
  ],
};

export const testimonials = [
  // Structure only - no fake content
  // Format: { quote: string, author: string, role: string, company: string }
];

// Legacy export for backwards compatibility
export const about = {
  journey,
  currentWork: experience.current,
  previousWork: {
    company: experience.previous[0].company,
    period: experience.previous[0].period,
    highlights: experience.previous[0].highlights,
  },
  awards: experience.awards,
  education: {
    degree: education.degree,
    honours: education.honours,
    institution: education.institution,
  },
  certifications: education.certifications,
  skills,
  hobbies: [
    {
      name: "Travel",
      image: "/images/travelling.png",
      description: "I love to travel and explore new places around the world.",
    },
    {
      name: "Running",
      image: "/images/running.jpg",
      description: "Running keeps me energized and helps me stay focused.",
      prs: [
        { distance: "400m", time: "1:15" },
        { distance: "1/2 mile", time: "2:45" },
        { distance: "1K", time: "3:29" },
        { distance: "1 mile", time: "5:52" },
        { distance: "2 mile", time: "12:10" },
        { distance: "5K", time: "18:59" },
        { distance: "10K", time: "38:36" },
        { distance: "15K", time: "58:35" },
        { distance: "10 mile", time: "1:02:52" },
        { distance: "20K", time: "1:18:25" },
        { distance: "Half-Marathon", time: "1:22:44" },
        { distance: "30K", time: "2:11:42" },
        { distance: "Marathon", time: "3:08:26" },
      ],
    },
    {
      name: "Cooking",
      images: [
        "/images/cooking/1B1C6ACC-4946-426E-8C84-F98AED2110C8_4_5005_c.jpeg",
        "/images/cooking/3AA4398D-F4B9-4A3D-B652-8BC468656DBA_4_5005_c.jpeg",
        "/images/cooking/F124A082-BC26-42F9-9F90-2975AF6A5CA9_4_5005_c.jpeg",
        "/images/cooking/wersfrwer.jpeg",
      ],
      description: "Exploring flavors and experimenting in the kitchen.",
    },
  ],
};
