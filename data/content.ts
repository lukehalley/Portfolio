import {
  createDateRange,
  formatDateRange,
  formatDuration,
  calculateCareerYears,
} from '@/lib/date-utils';

// Career start date (first professional role after graduation)
const CAREER_START_YEAR = 2013;

// Key employment dates
const MINING_ROLE = createDateRange('2025-04', '2026-06');
const VERIZON_END = createDateRange('2019-05', '2024-09');
const EDUCATION_RANGE = createDateRange('2014-01', '2019-06');

export const personalInfo = {
  name: "Luke Halley",
  title: "Cloud Platform Engineer\nInfrastructure at Scale",
  tagline: "I built an entire **AWS cloud platform**\nfor 100+ engineering teams. Solo.\nIaC, CI/CD, multi-account AWS.",
  careerStartYear: CAREER_START_YEAR,
  yearsOfExperience: calculateCareerYears(CAREER_START_YEAR),
  location: "Perth, Australia",
  email: "development@lukehalley.com",
  social: {
    github: "https://github.com/lukehalley",
    gitlab: "https://gitlab.com/lukehalley",
    linkedin: "https://www.linkedin.com/in/luke-halley-284b9b115/",
  },
};

export const journey = [
  `Most recently I was the **sole architect of the entire AWS cloud platform** at **a multi-billion-dollar ASX-listed mining company**, serving **100+ engineering teams** (${formatDateRange(MINING_ROLE)}). I shipped **18 systems from scratch**: the build-agent fleet, the account factory, the module registry, the developer CLI. I migrated the org off Terraform Cloud. **$369K/year in verified savings, zero production incidents**, promoted to Senior in 8 months.`,
  `Before that, **${formatDuration(VERIZON_END)}** at **a global fleet management company** in Dublin (${formatDateRange(VERIZON_END)}), migrating 200+ repositories to GitLab, moving workloads from EC2 to Fargate, and engineering **source-controlled Octopus Deploy templates** with complex state synchronization across environments.`,
  `Started in **Ireland** with a **First Class Honours BSc** in Internet of Things (${formatDateRange(EDUCATION_RANGE)}), winning an enterprise award for an IoT tracking system. Career focus: architecture-first problem-solving and full-stack infrastructure ownership.`,
];

export const experience = {
  current: null as null | {
    company: string;
    role: string;
    period: string;
    location: string;
    context: string;
    highlights: Array<{
      title: string;
      description: string;
      impact: string;
      technologies: string[];
    }>;
  },
  previous: [
    {
      company: "Multi-Billion-Dollar ASX-Listed Mining Company",
      role: "Cloud Developer → Senior Cloud Developer",
      period: formatDateRange(MINING_ROLE),
      location: "Perth, Australia",
      badge: "Most recent",
      context: "Sole architect and primary engineer of the company's entire AWS cloud platform, serving 100+ development teams. Promoted to Senior in 8 months, with zero production incidents across every system for the entire tenure.",
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
          description: "I authored the **pipeline template system every team deploys through**: 10 reusable templates with **OIDC federation and zero stored credentials**, automated security scanning, and change-management gates. One security patch protects all 100+ teams at once. New-project onboarding dropped from days to hours.",
          impact: "342 pipelines · 100+ teams · $0 stored credentials",
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
      company: "Global Fleet Management Company",
      role: "DevOps Engineer",
      period: formatDateRange(VERIZON_END),
      location: "Dublin, Ireland",
      context: "Fleet management and telematics company serving 1M+ vehicles worldwide",
      highlights: [
        {
          title: "GitLab Migration Pipeline",
          description: "Created **PowerShell solution** for autonomous migration of Bitbucket repositories to GitLab. Handled branch protection rules, CI/CD pipeline conversion, and commit history preservation with zero data loss.",
          impact: "200+ repositories migrated",
          technologies: ["PowerShell", "GitLab CI", "Bitbucket", "REST APIs"],
        },
        {
          title: "Container Optimization",
          description: "Led company-wide **EC2 to Fargate migrations**, redesigning container deployment patterns for improved scalability. Implemented auto-scaling policies and optimized task definitions across production workloads.",
          impact: "50% cost reduction",
          technologies: ["ECS Fargate", "Docker", "EC2", "Auto Scaling", "CloudWatch"],
        },
        {
          title: "Database Migrations",
          description: "Collaborated with **AWS ProServe** on migrating hundreds of SQL Server databases to Aurora PostgreSQL. Engineered blue-green cutover strategy with DMS replication across five environments (dev, test, staging, UAT, prod).",
          impact: "Multi-environment migration success",
          technologies: ["Aurora PostgreSQL", "DMS", "SQL Server", "RDS", "Blue-Green Deployments"],
        },
        {
          title: "Infrastructure as Code Standardization",
          description: "Engineered **source-controlled Octopus Deploy step templates** with **complex state synchronization** across hundreds of templates and two Octopus instances. Automated once-manual management enabling teams to submit changes through version control with programmatic API updates.",
          impact: "Reduced daily CICD team requests",
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
    "Company Spotlight Award",
  ],
};

// Verified impact from the cloud platform role. Every figure is sourced from
// git history, AWS billing, internal promotion review, and the performance
// review. Anonymised: no account IDs or internal identifiers.
export const impact = {
  eyebrow: "13-month tenure · sole platform architect · verified",
  intro:
    "I was the sole architect of an entire AWS cloud platform at a multi-billion-dollar ASX-listed mining company. 100+ engineering teams built on the systems I designed and shipped. Every number below comes from git history, billing, and internal review.",
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
    { value: "4,766", label: "Commits in 13 months", proof: "#1 contributor on every major platform, by 5 to 26×." },
    { value: "342", label: "CI/CD pipelines", proof: "Running on 10 templates I authored, across 53 projects." },
    { value: "104", label: "AWS accounts", proof: "Centralised identity, networking and governance." },
    { value: "83%", label: "Faster build cold-starts", proof: "180s → 20s on the serverless agent platform." },
    { value: "8 mo", label: "To Senior promotion", proof: "Fastest in team history." },
  ],
  quote: {
    text: "Luke is the best. No notes.",
    attribution: "Engineering leader, performance review",
  },
};

export const skills = {
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
    { name: "Go" },
    { name: "Python" },
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
      description: "I've traveled to Thailand, Slovenia, Italy, France, and a few other spots over the years. Each place has its own vibe and way of doing things. Travel is a good way to get perspective outside of work and daily routines. I'd like to see more of the world when time allows.",
    },
    {
      name: "Running",
      description: "Been running since I was 7. Started with local races in Ireland and kept it up over the years. It's good for clearing my head and staying fit. These days I just try to stay consistent with it.",
    },
    {
      name: "Cooking",
      description: "After spending the day on infrastructure and pipelines, cooking is a good way to switch off. I like making Irish, Italian, and French food. It's practical, hands-on work that doesn't involve a screen. Also means I eat well.",
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
      impact: "342 pipelines · 100+ teams",
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
      description: "Live production platform connecting NDIS providers with clients across Australia. Full-stack Next.js application with provider directory, advanced search/filtering, appointment booking system, and SEO optimization.",
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
      description: "Full-stack platform consolidating historical price data across liquidity pool migrations. Python data pipeline fetches OHLCV data via GeckoTerminal API, Next.js web app with lightweight-charts for interactive visualization. Smart gap interpolation during transitions.",
      technologies: ["Next.js", "TypeScript", "Python", "Recharts", "Supabase", "Vercel"],
      impact: "Live production • Multi-pool tracking",
      featured: false,
      link: "https://github.com/lukehalley/MigrateChart",
      image: "/images/projects/migration.svg",
    },
    {
      title: "Reduke",
      subtitle: "Reddit Mobile Client",
      category: "Mobile Development",
      period: "2019",
      description: "Feature-rich Reddit mobile client built in Kotlin with Firebase authentication, real-time updates, and clean MVVM architecture. Includes subreddit browsing, post interactions, comment threads, and user profiles.",
      technologies: ["Kotlin", "Firebase", "Android", "MVVM", "Retrofit"],
      impact: "14 GitHub stars • Full Reddit API integration",
      featured: false,
      link: "https://github.com/lukehalley/Reduke",
      image: "/images/projects/reddit.png",
    },
    {
      title: "ArbTheChain",
      subtitle: "Go Microservices • Real-Time Data Processing",
      category: "FinTech Infrastructure",
      period: formatDateRange(PROJECT_ATC),
      description: "Production-grade cryptocurrency arbitrage platform built with 10+ Go microservices and Python services, deployed via Terraform on AWS. Real-time data collectors processing exchange feeds, route optimization algorithms, execution engine, and comprehensive monitoring infrastructure.",
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
