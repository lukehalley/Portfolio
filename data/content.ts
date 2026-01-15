import {
  createDateRange,
  formatDateRange,
  formatDuration,
  calculateCareerYears,
} from '@/lib/date-utils';

// Career start date (first professional role after graduation)
const CAREER_START_YEAR = 2013;

// Key employment dates
const VERIZON_START = createDateRange('2019-05');
const VERIZON_END = createDateRange('2019-05', '2024-09');
const MINRES_START = createDateRange('2024-12');
const EDUCATION_RANGE = createDateRange('2014-01', '2019-06');

export const personalInfo = {
  name: "Luke Halley",
  title: "Cloud Developer\nDevOps Specialist",
  tagline: "I build multi-cloud infrastructure\nat an **enterprise scale.**\nIaC, CI/CD, AWS, Azure.",
  careerStartYear: CAREER_START_YEAR,
  yearsOfExperience: calculateCareerYears(CAREER_START_YEAR),
  location: "Perth, Australia",
  email: "contact@lukehalley.com",
  social: {
    github: "https://github.com/lukehalley",
    gitlab: "https://gitlab.com/lukehalley",
    linkedin: "https://www.linkedin.com/in/luke-halley-284b9b115/",
  },
};

export const journey = [
  `At **Mineral Resources** (${formatDateRange(MINRES_START)}), I led the multi-cloud transformation—migrating from **AWS CDK to Terraform** to enable operations across **AWS and Azure**. Built a self-hosted Terraform solution replacing Terraform Cloud, then deployed it across **95 accounts** via CI/CD pipelines.`,
  `Before that, spent **${formatDuration(VERIZON_END)}** at **Verizon Connect** in Dublin (${formatDateRange(VERIZON_END)}), migrating **200+ repositories** to GitLab, moving workloads from EC2 to Fargate, and engineering **source-controlled Octopus Deploy templates** with complex state synchronization across environments.`,
  `Started in **Ireland** with a **First Class Honours BSc** in Internet of Things (${formatDateRange(EDUCATION_RANGE)}), winning the SunLife 2019 Enterprise Award for an IoT tracking system. Career focus: architecture-first problem-solving and full-stack infrastructure ownership.`,
];

export const experience = {
  current: {
    company: "Mineral Resources",
    role: "Cloud Developer",
    period: formatDateRange(MINRES_START),
    location: "Perth, Australia",
    context: "ASX-listed mining services company with $5B+ revenue and 4,000+ employees across Australia",
    highlights: [
      {
        title: "Multi-Cloud Infrastructure Transformation",
        description: "Migrated MinRes **from AWS CDK to Terraform** to enable **multi-cloud strategy** across AWS and Azure. Designed and built **self-hosted Terraform solution** replacing Terraform Cloud, then deployed infrastructure across **95 AWS accounts** using CI/CD pipelines with ServiceNow integration for change management.",
        impact: "Multi-cloud enablement • 60% efficiency improvement",
        technologies: ["Terraform", "AWS CDK", "CI/CD", "AWS Organizations", "Azure"],
      },
      {
        title: "Enterprise Account Orchestration",
        description: "Architected **account vending machine** automating end-to-end AWS account lifecycle: Organizations enrollment, IAM OIDC configuration, Terraform Cloud workspace creation, CI/CD project setup, and standardized pipelines. Single source of truth for **30+ development teams**.",
        impact: "2-week to 2-hour provisioning",
        technologies: ["AWS Control Tower", "Service Catalog", "IAM", "OIDC", "Terraform Cloud"],
      },
      {
        title: "Financial Systems Automation",
        description: "Built automated pipeline to identify and remediate **bad records** in Coupa procurement system from Redshift data warehouse. Eliminated recurring manual interventions that blocked finance operations multiple times weekly.",
        impact: "40% workload reduction • $200K+ annual savings",
        technologies: ["Python", "AWS Redshift", "Lambda", "EventBridge"],
      },
    ],
  },
  previous: [
    {
      company: "Verizon Connect",
      role: "DevOps Engineer",
      period: formatDateRange(VERIZON_END),
      location: "Dublin, Ireland",
      context: "Global fleet management and telematics company serving 1M+ vehicles worldwide",
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
  ],
  awards: [
    "SunLife 2019 Enterprise Award",
    "Verizon Spotlight Award",
  ],
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
  award: "SunLife 2019 Enterprise Award for IoT tracking system (Stork)",
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
const PROJECT_MINRES_START = createDateRange('2024-01');
const PROJECT_ATC = createDateRange('2022-01', '2023-12');
const PROJECT_STORK = createDateRange('2019-01', '2019-06');
const PROJECT_NDIS_START = createDateRange('2024-01');

export const projects = {
  professional: [
    {
      title: "Account Vending Machine",
      subtitle: "Enterprise AWS Account Orchestration",
      category: "Platform Engineering",
      period: formatDateRange(PROJECT_MINRES_START),
      description: "Central orchestration platform for provisioning and managing 95+ AWS accounts. Automates end-to-end account lifecycle: AWS Organizations enrollment, IAM OIDC configuration, Terraform Cloud workspace creation, CI/CD project setup, and standardized pipelines. Single source of truth for enterprise cloud governance.",
      technologies: ["Terraform", "AWS Organizations", "Control Tower", "CI/CD", "OIDC", "PowerShell"],
      impact: "95 AWS accounts • 2-week to 2-hour provisioning",
      featured: true,
      image: "/images/projects/aws-manage.svg",
    },
    {
      title: "Runners Platform",
      subtitle: "Serverless CI/CD Agent Infrastructure",
      category: "Platform Engineering",
      period: formatDateRange(PROJECT_MINRES_START),
      description: "Scalable, serverless platform for CI/CD self-hosted agents on AWS. ECS Fargate containers with intelligent agent allocation tracking via SQS FIFO queues to prevent race conditions. Supports multiple agent types: Terraform, Python, Node.js, Docker, and ImageBuilder runners.",
      technologies: ["ECS Fargate", "API Gateway", "SQS FIFO", "Lambda", "Terraform", "Docker"],
      impact: "Multi-pool agent orchestration • Serverless scaling",
      featured: true,
      image: "/images/projects/runners.svg",
    },
    {
      title: "AWS Pipeline Templates",
      subtitle: "Standardized CI/CD Pipeline Library",
      category: "Platform Engineering",
      period: formatDateRange(PROJECT_MINRES_START),
      description: "Comprehensive CI/CD pipeline template library for AWS deployments. Reusable YAML templates for static sites (S3/CloudFront), Python Lambda functions, and Terraform infrastructure. Implements quality gates, security scanning, and multi-environment promotion.",
      technologies: ["CI/CD Pipelines", "YAML", "S3", "CloudFront", "Lambda", "Terraform"],
      impact: "Standardized deployments • Self-service for 30+ teams",
      featured: true,
      image: "/images/projects/templates.svg",
    },
    {
      title: "Terraform Module Registry",
      subtitle: "Enterprise Terraform Modules",
      category: "Platform Engineering",
      period: formatDateRange(PROJECT_MINRES_START),
      description: "Collection of enterprise-grade Terraform modules published to HCP Terraform private registry. Foundation networking (VPC, Transit Gateway, routing), security baselines, and standardized patterns.",
      technologies: ["Terraform", "HCP Terraform", "VPC", "Transit Gateway", "Checkov"],
      impact: "Private module registry • Reusable infrastructure patterns",
      featured: false,
      image: "/images/projects/modules.svg",
    },
  ],
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
      description: "Award-winning IoT solution for elderly care safety. End-to-end system: custom GPS tracking devices, Python backend services, real-time web dashboard, and SMS alerting. Capstone project earning First Class Honours and SunLife 2019 Enterprise Award.",
      technologies: ["IoT", "Python", "GPS", "WebSockets", "AWS", "SMS"],
      impact: "SunLife Enterprise Award • Honours Project",
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
