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

And if you have domain expertise worth encoding—consider building skills yourself. The format is simple. The contribution model is pull requests. The impact is real: you're teaching AI to think like an expert.`,
  },
  {
    slug: "platform-engineering-account-vending",
    title: "Stop Filing Tickets for AWS Accounts",
    subtitle: "How Account Vending Machines Changed Our Platform Team",
    excerpt: "Our developers waited 2 weeks for new AWS accounts. Now they get them in 4 minutes. Here's how we built an account vending machine that handles 100+ accounts without a single ticket.",
    date: "2026-01-15",
    readingTime: 8,
    tags: ["Platform Engineering", "AWS", "Terraform", "DevOps"],
    featured: true,
    content: `Two weeks.

That's how long developers waited for a new AWS account at my previous company. File a ticket. Wait for approval. Wait for the cloud team. Wait for networking. Wait for security review. Wait for someone to remember the ticket existed.

At my current role, developers get production-ready AWS accounts in 4 minutes. No tickets. No waiting. No cloud team bottleneck.

The difference? An **Account Vending Machine**.

## The Old Way Is Broken

If your organization has more than a handful of AWS accounts, you've probably experienced this:

1. Developer needs isolated environment for new project
2. Files request with cloud/platform team
3. Cloud team is backlogged with 47 other requests
4. Account gets created... eventually
5. Developer realizes networking isn't configured
6. Another ticket. Another wait.
7. Security guardrails missing. Another ticket.
8. Developer rage-quits and uses their personal AWS account

This doesn't scale. At 100+ accounts, it completely breaks down.

## What's an Account Vending Machine?

An AVM is self-service infrastructure for AWS accounts. Developers request what they need through a form or API. Automation handles everything else:

- Account creation in AWS Organizations
- OU placement based on workload type
- Networking (VPC, subnets, Transit Gateway attachments)
- Security baselines (GuardDuty, Security Hub, Config rules)
- IAM roles and SSO integration
- Cost allocation tags
- Budget alerts

The developer gets a fully configured, compliant, production-ready account. The platform team gets audit logs and central governance. Everyone wins.

## Architecture That Actually Works

Here's what we built:

\`\`\`hcl
# Simplified account request
module "new_account" {
  source = "./modules/account-vending"

  account_name     = "project-phoenix-dev"
  account_email    = "aws+phoenix-dev@company.com"
  organizational_unit = "workloads/development"

  environment = "development"
  cost_center = "engineering"
  owner       = "phoenix-team@company.com"

  network_config = {
    vpc_cidr           = "10.42.0.0/16"
    availability_zones = ["ap-southeast-2a", "ap-southeast-2b"]
    enable_nat_gateway = true
    transit_gateway_id = data.aws_transit_gateway.main.id
  }

  security_baseline = "standard"  # or "pci", "hipaa"
}
\`\`\`

Behind this simple interface:

### 1. AWS Service Catalog

Service Catalog provides the self-service portal. Developers browse a catalog of account types (dev, staging, production, sandbox) and fill in parameters. No Terraform knowledge required.

### 2. Step Functions Orchestration

Account creation involves ~15 sequential and parallel operations. Step Functions coordinates:

- CreateAccount API call
- Wait for account to become available
- Move to correct OU
- Assume role into new account
- Deploy baseline CloudFormation/Terraform
- Configure networking
- Enable security services
- Send notification

### 3. Control Tower or Custom Landing Zone

We use AWS Control Tower for guardrails, but custom landing zones work too. The key is having:

- Centralized logging account
- Security/audit account
- Network hub account
- Consistent OU structure

### 4. Terraform for Everything Else

Once the account exists, Terraform modules deploy:

\`\`\`hcl
# Baseline module applied to every account
module "account_baseline" {
  source = "git::https://github.com/org/terraform-modules.git//account-baseline"

  providers = {
    aws = aws.new_account
  }

  account_id   = aws_organizations_account.this.id
  account_name = var.account_name
  environment  = var.environment

  # Security
  enable_guardduty     = true
  enable_security_hub  = true
  enable_config_rules  = true

  # Networking
  vpc_config = var.network_config

  # IAM
  sso_permission_sets = var.sso_permission_sets
}
\`\`\`

## The 4-Minute Account

Here's what happens when a developer clicks "Request Account":

| Time | Action |
|------|--------|
| 0:00 | Developer submits request via Service Catalog |
| 0:05 | Step Function triggers, calls CreateAccount API |
| 0:30 | Account created, moved to target OU |
| 1:00 | Control Tower guardrails applied automatically |
| 1:30 | Terraform baseline begins (VPC, IAM, security) |
| 3:00 | Transit Gateway attachment completes |
| 3:30 | SSO permission sets assigned |
| 4:00 | Developer receives Slack notification with console link |

From "I need an account" to "I'm deploying code" in 4 minutes.

## Lessons From 100+ Accounts

### Email Addresses Are Permanent

AWS account emails can't be changed after creation. We use a pattern:

\`\`\`
aws+{account-name}@company.com
\`\`\`

Gmail-style plus addressing means all emails route to one inbox, but each account has a unique address.

### CIDR Planning Is Critical

Running out of IP space is painful. We allocate /16 blocks per environment type from a master IPAM:

\`\`\`
10.0.0.0/8   → Production
10.64.0.0/10 → Staging
10.128.0.0/10 → Development
10.192.0.0/10 → Sandbox
\`\`\`

Each account gets a /16 within its environment block. Plenty of room.

### Cost Visibility From Day One

Every account gets:

- Budget alert at 80% of projected monthly
- Cost allocation tags (mandatory via SCP)
- Automatic tagging of all resources
- Weekly cost report to owner email

Developers see their costs. Costs go down.

### Break Glass Procedures

Automation handles 99% of cases. For the 1%:

- Document manual override procedures
- Require two-person approval for manual changes
- Log everything to immutable audit trail
- Run drift detection daily

## What Platform Engineering Actually Means

Platform engineering isn't about building platforms for the sake of it. It's about **removing friction while maintaining governance**.

The account vending machine embodies this:

- **Developers get speed**: 4 minutes instead of 2 weeks
- **Security gets compliance**: Every account has guardrails from minute one
- **Finance gets visibility**: Cost attribution is automatic
- **Platform team gets time back**: No more account creation tickets

This is the shift from "gatekeeper" to "enabler."

## Start Simple

You don't need to build everything at once. Start with:

1. **Standardize account structure**: Define your OU hierarchy
2. **Automate one thing**: Maybe just account creation with basic networking
3. **Add security baselines**: GuardDuty, Config, basic IAM
4. **Iterate**: Add features based on developer feedback

The goal isn't perfection. It's eliminating the 2-week wait.

---

*Managing 100+ AWS accounts taught me that scale requires self-service. If your cloud team is drowning in tickets, an account vending machine might be your life raft.*`,
  },
  {
    slug: "claude-code-infrastructure",
    title: "I Let AI Write My Terraform",
    subtitle: "What Happened When Claude Code Met Production Infrastructure",
    excerpt: "I was skeptical about AI-generated infrastructure code. Then I tried Claude Code on a real AWS module. The results surprised me—both the wins and the gotchas.",
    date: "2026-01-08",
    readingTime: 7,
    tags: ["AI", "Claude Code", "Terraform", "AWS", "DevOps"],
    featured: false,
    content: `"AI can't write production infrastructure code."

That's what I told myself for months. I'd seen the demos—impressive but cherry-picked. Real infrastructure is messy. Edge cases everywhere. Security implications in every line.

Then I actually tried Claude Code on a Terraform module I needed to build. Not a toy example. A production ECS Fargate service with ALB, autoscaling, secrets management, and proper IAM.

Here's what happened.

## The Task

I needed a reusable Terraform module for deploying containerized services to ECS Fargate. Requirements:

- Application Load Balancer with HTTPS
- ECS service with task definitions
- Autoscaling based on CPU/memory
- Secrets from AWS Secrets Manager
- Proper IAM roles (task role vs execution role)
- CloudWatch logs and alarms
- VPC integration with security groups

Normally, this takes me 2-3 hours to write properly. Longer if I'm being careful about security.

## The Experiment

I opened Claude Code in my terminal and described what I needed:

\`\`\`
Create a Terraform module for ECS Fargate services.
It should create an ALB, ECS service, task definition,
autoscaling, and IAM roles. I need to pass secrets
from Secrets Manager to containers. Use security
groups that only allow necessary traffic.
\`\`\`

What followed was a 45-minute session of iteration. Here's what I learned.

## What Claude Code Got Right

### 1. Module Structure

The generated module structure was textbook:

\`\`\`
modules/ecs-service/
├── main.tf
├── variables.tf
├── outputs.tf
├── iam.tf
├── alb.tf
├── ecs.tf
├── autoscaling.tf
└── security-groups.tf
\`\`\`

Clean separation. Logical file names. This matched how I'd structure it myself.

### 2. IAM Role Separation

This is where many tutorials get it wrong. Claude correctly separated:

\`\`\`hcl
# Execution role - for ECS agent to pull images, write logs
resource "aws_iam_role" "execution" {
  name = "\${var.name}-execution"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "ecs-tasks.amazonaws.com"
      }
    }]
  })
}

# Task role - for the application to access AWS services
resource "aws_iam_role" "task" {
  name = "\${var.name}-task"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "ecs-tasks.amazonaws.com"
      }
    }]
  })
}
\`\`\`

It even added the correct managed policy for execution role (\`AmazonECSTaskExecutionRolePolicy\`) and scoped Secrets Manager access to specific secret ARNs.

### 3. Security Group Logic

The security groups followed least-privilege:

\`\`\`hcl
# ALB security group - allows inbound HTTPS
resource "aws_security_group" "alb" {
  name_prefix = "\${var.name}-alb-"
  vpc_id      = var.vpc_id

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = var.allowed_cidr_blocks
  }

  egress {
    from_port       = var.container_port
    to_port         = var.container_port
    protocol        = "tcp"
    security_groups = [aws_security_group.ecs.id]
  }
}

# ECS security group - only allows traffic from ALB
resource "aws_security_group" "ecs" {
  name_prefix = "\${var.name}-ecs-"
  vpc_id      = var.vpc_id

  ingress {
    from_port       = var.container_port
    to_port         = var.container_port
    protocol        = "tcp"
    security_groups = [aws_security_group.alb.id]
  }
}
\`\`\`

ALB can reach ECS. ECS can't be reached directly. Exactly right.

## What Needed Fixing

### 1. Hardcoded Values

First draft had hardcoded values that should be variables:

\`\`\`hcl
# Bad - hardcoded
cpu    = 256
memory = 512

# Fixed - variable with sensible defaults
cpu    = var.cpu
memory = var.memory
\`\`\`

Easy fix once spotted. I just asked "make cpu and memory configurable" and it updated correctly.

### 2. Missing Health Check Configuration

The ALB target group health check used defaults. For containers, you often need custom paths and intervals:

\`\`\`hcl
health_check {
  enabled             = true
  healthy_threshold   = 2
  unhealthy_threshold = 3
  timeout             = 5
  interval            = 30
  path                = var.health_check_path  # Added
  matcher             = var.health_check_matcher  # Added
}
\`\`\`

### 3. Log Retention

CloudWatch log group was created without retention:

\`\`\`hcl
# Original - logs forever (expensive)
resource "aws_cloudwatch_log_group" "this" {
  name = "/ecs/\${var.name}"
}

# Fixed - 30 day retention
resource "aws_cloudwatch_log_group" "this" {
  name              = "/ecs/\${var.name}"
  retention_in_days = var.log_retention_days
}
\`\`\`

This would've cost money in production. Caught it in review.

### 4. The Secrets Gotcha

Here's where it got interesting. The initial secrets implementation used:

\`\`\`hcl
secrets = [
  for secret in var.secrets : {
    name      = secret.name
    valueFrom = secret.arn
  }
]
\`\`\`

This works, but assumes full secret ARN. In practice, you often want to reference specific JSON keys within a secret:

\`\`\`hcl
secrets = [
  for secret in var.secrets : {
    name      = secret.name
    valueFrom = "\${secret.arn}:\${secret.json_key}::"
  }
]
\`\`\`

The \`::\` suffix is required for JSON key extraction. Claude didn't know this initially. After I explained the pattern, it updated correctly and even added a comment explaining the syntax.

## The Bigger Picture

### What AI Does Well

- **Boilerplate generation**: Resource blocks, variable definitions, outputs
- **Best practice patterns**: Module structure, naming conventions
- **Documentation**: Comments explaining why, not just what
- **Iteration speed**: Changes in seconds, not minutes

### Where Humans Still Win

- **Edge cases**: Production has infinite edge cases
- **Security nuances**: That \`::\` suffix matters
- **Organizational context**: Your naming conventions, your CIDR ranges, your tagging strategy
- **Integration testing**: AI can write code but can't \`terraform apply\`

## My New Workflow

I don't write Terraform from scratch anymore. My workflow:

1. **Describe the module** to Claude Code in plain English
2. **Review generated code** for security and correctness
3. **Iterate** on specific fixes ("add log retention", "make this a variable")
4. **Validate** with \`terraform validate\` and \`tflint\`
5. **Test** with \`terraform plan\` against real AWS
6. **Apply** and monitor

Steps 1-3 take 30 minutes instead of 2 hours. Steps 4-6 are unchanged.

## The Trust Question

Should you trust AI-generated infrastructure code?

No. And yes.

**No**: Don't blindly apply anything AI generates. Review every line. Run security scanners. Test in non-production first.

**Yes**: Trust it as a starting point. Trust it to handle boilerplate. Trust it to remember syntax you've forgotten.

The right mental model: AI is a junior engineer who's read every Terraform tutorial but never managed production. Fast, knowledgeable, needs supervision.

## Try It Yourself

If you're skeptical (I was), try this experiment:

1. Pick a module you've already written
2. Describe it to Claude Code without showing your code
3. Compare the output to your implementation

You'll find:
- 80% is nearly identical
- 15% is different but valid
- 5% needs fixing

That 80% is the time savings. That 5% is why review still matters.

---

*I went from "AI can't write infrastructure" to "AI saves me hours per week." The key was treating it as a collaborator, not a replacement.*`,
  },
  {
    slug: "finops-engineering-culture",
    title: "We Cut Our AWS Bill by 47%",
    subtitle: "Without Cutting Features or Firing Anyone",
    excerpt: "Our cloud bill was climbing 15% monthly. Leadership wanted cuts. Instead of slashing resources, we changed how engineers think about cost. Here's the playbook.",
    date: "2025-12-28",
    readingTime: 9,
    tags: ["FinOps", "AWS", "Cloud", "DevOps", "Cost Optimization"],
    featured: false,
    content: `$2.3 million.

That's what we were on track to spend on AWS last year. Up from $1.4 million the year before. Leadership noticed.

"Cut 30% from the cloud budget."

The usual response: find underutilized resources, right-size instances, delete old snapshots. We did all that. Got maybe 8% savings.

Then we tried something different. Instead of optimizing resources, we optimized culture.

Twelve months later: 47% reduction. Same workloads. Same team. Different mindset.

Here's how.

## The Real Problem Wasn't Resources

We started where everyone starts—the AWS Cost Explorer. Found the usual suspects:

- Dev instances running 24/7
- Oversized RDS instances
- Orphaned EBS volumes
- Unused Elastic IPs

Fixed all of it. Saved 8%. Then costs kept climbing.

Why? Because engineers kept creating new inefficiencies faster than we could find them. We were playing whack-a-mole with a thousand developers.

The problem wasn't resources. The problem was **visibility**. Engineers had no idea what their code cost.

## FinOps Is a Culture, Not a Tool

We tried cost management tools. Dashboards everywhere. Weekly reports. Nobody read them.

The breakthrough came when we asked: "What if engineers saw cost the same way they see latency?"

Latency matters because it's visible. It's in dashboards. It's in alerts. It's in performance reviews. Cost? Buried in a finance spreadsheet somewhere.

So we made cost visible.

## Step 1: Cost Tags as Code

First, we made tagging mandatory. Not "please tag your resources"—mandatory. SCPs that reject untagged resources:

\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "RequireCostTags",
      "Effect": "Deny",
      "Action": [
        "ec2:RunInstances",
        "rds:CreateDBInstance",
        "lambda:CreateFunction"
      ],
      "Resource": "*",
      "Condition": {
        "Null": {
          "aws:RequestTag/cost-center": "true",
          "aws:RequestTag/team": "true",
          "aws:RequestTag/environment": "true"
        }
      }
    }
  ]
}
\`\`\`

Can't deploy without tags. Period. Engineers grumbled for a week. Then tagging became automatic—built into our Terraform modules.

## Step 2: Cost in the CI/CD Pipeline

Next, we added Infracost to every pull request:

\`\`\`yaml
- name: Infracost
  run: |
    infracost breakdown --path=. --format=json --out-file=/tmp/infracost.json
    infracost comment github --path=/tmp/infracost.json \\
      --repo=\${{ github.repository }} \\
      --pull-request=\${{ github.event.pull_request.number }} \\
      --github-token=\${{ secrets.GITHUB_TOKEN }}
\`\`\`

Every PR now shows:

\`\`\`
💰 Monthly cost will increase by $847 (+12%)

├── aws_rds_cluster.main        +$650/mo (new)
├── aws_instance.app[0]         +$120/mo (m5.xlarge → m5.2xlarge)
└── aws_elasticache_cluster.redis +$77/mo (new)
\`\`\`

Engineers see cost *before* merge. Not after the bill arrives.

## Step 3: Team Cost Dashboards

We built Grafana dashboards showing cost by team. Updated daily. Displayed on monitors in each team area.

\`\`\`
Team Phoenix - December 2025
├── Daily average: $342
├── Month-to-date: $7,524
├── Projected month-end: $10,602
├── Budget: $12,000
└── Status: 🟢 On track

Top 5 Resources:
1. RDS cluster (production): $156/day
2. ECS Fargate tasks: $89/day
3. ElastiCache: $45/day
4. NAT Gateway: $32/day
5. S3 storage: $20/day
\`\`\`

Suddenly, teams owned their costs. "Why is our RDS so expensive?" became a standup topic.

## Step 4: Blameless Cost Reviews

Monthly cost reviews. Not blame sessions—learning sessions. Format:

1. **What changed?** New resources, scaling events, traffic spikes
2. **What surprised us?** Unexpected cost increases
3. **What did we learn?** Architectural decisions that affected cost
4. **What will we try?** Experiments for next month

We found that most cost increases weren't negligence. They were reasonable decisions made without cost information. Once engineers had visibility, they made different decisions.

## The Wins That Added Up

### Reserved Instances & Savings Plans

With predictable baseline from team dashboards, we could confidently commit:

| Commitment | Monthly Savings |
|------------|-----------------|
| 1-year EC2 Savings Plan | $18,400 |
| 3-year RDS Reserved | $12,200 |
| 1-year ElastiCache Reserved | $3,100 |

**Total: $33,700/month** (40% of our savings)

### Right-Sizing From Data

Teams right-sized their own resources because they could see the impact:

\`\`\`
Team Artemis reduced RDS from db.r5.2xlarge to db.r5.large
Savings: $412/month
Performance impact: None (CPU was at 8%)
\`\`\`

When the team makes the decision, there's no pushback.

### Zombie Resource Hunting

We gamified it. Monthly leaderboard for finding unused resources:

\`\`\`
🏆 Zombie Hunter Leaderboard - December

1. Sarah K. - $2,340 saved (found 3 unused RDS snapshots)
2. Marcus T. - $1,890 saved (deleted dev EKS cluster)
3. Priya R. - $1,200 saved (right-sized 12 EC2 instances)
\`\`\`

Small prizes. Big engagement. Resources that had been running for years got deleted in days.

### Architecture Changes

The biggest wins came from engineers rethinking architecture:

**Before**: Lambda functions calling RDS directly
- NAT Gateway costs: $800/month for data transfer
- RDS connection limits: constant issues

**After**: Lambda functions using RDS Proxy
- NAT Gateway costs: $200/month
- Connection pooling: problem solved

**Savings: $600/month** plus engineering time saved on connection issues.

This change happened because an engineer saw the NAT Gateway cost in their dashboard and asked "why is this so high?"

## The Numbers

After 12 months:

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Monthly AWS spend | $192,000 | $102,000 | -47% |
| Cost per request | $0.00034 | $0.00019 | -44% |
| Resources tagged | 34% | 99.2% | +191% |
| Teams with cost visibility | 0 | 28 | — |

We hit the 30% target in month 6. Kept going.

## What Didn't Work

### Centralized Optimization Team

We tried having a dedicated team find savings. They found plenty—but couldn't implement changes without team cooperation. And teams resisted changes they didn't understand.

Distributed ownership beats centralized optimization.

### Automated Shutdowns Without Context

We tried automatically stopping dev instances at 7pm. Broke on-call debugging. Broke timezone-distributed teams. Broke deploys.

Now we *recommend* schedules, but teams configure their own.

### Shaming Teams for High Costs

Early on, we highlighted "top spending teams" in all-hands. Backfired immediately. Teams with legitimate high-cost workloads felt attacked. Others hid resources in shared accounts.

Blameless reviews work. Shame doesn't.

## The Culture Shift

The real change wasn't technical. It was cultural.

**Before**: "Cost is finance's problem."
**After**: "Cost is a feature we ship."

Engineers now ask "what will this cost?" during design reviews. They compare instance types like they compare algorithms. They celebrate cost reductions in sprint retros.

One engineer told me: "I used to ignore cost alerts. Now I check our dashboard every morning like I check Slack."

That's the shift. Cost became visible, so it became manageable.

## Start Here

If your cloud bill is climbing:

1. **Tag everything**. Use SCPs to enforce. No exceptions.
2. **Add Infracost to PRs**. Make cost visible at decision time.
3. **Build team dashboards**. Daily cost by team, by environment.
4. **Run blameless reviews**. Monthly, focused on learning.
5. **Gamify the hunt**. Leaderboards for finding waste.

You don't need a FinOps team. You need engineers who see their costs.

---

*47% wasn't a target—it was a side effect of making cost visible. When engineers can see the bill, they optimize naturally.*`,
  },
  {
    slug: "opentofu-terraform-fork",
    title: "I Switched 100 AWS Accounts to OpenTofu",
    subtitle: "What the Terraform Fork Actually Means for Platform Teams",
    excerpt: "HashiCorp changed Terraform's license. The community forked it. I migrated our entire multi-account AWS estate to OpenTofu. Here's what you need to know.",
    date: "2025-12-15",
    readingTime: 10,
    tags: ["OpenTofu", "Terraform", "IaC", "Open Source", "AWS"],
    featured: false,
    content: `August 2023. HashiCorp announced they were changing Terraform's license from MPL to BSL.

The community's response was immediate: a fork called OpenTofu, backed by the Linux Foundation.

I watched from the sidelines for a year. Waited for stability. Waited for the dust to settle. Then, in late 2024, I migrated our entire infrastructure—100+ AWS accounts, 50+ Terraform modules, thousands of resources—to OpenTofu.

Here's what happened.

## Why the License Change Matters

First, some context. The Business Source License (BSL) isn't "closed source." You can still use Terraform for free. The restriction: you can't use it to build competing products.

For most users, this changes nothing.

For platform teams building internal developer platforms? It gets murky. If your IDP provisions infrastructure, are you competing with Terraform Cloud? Probably not. But "probably" isn't comfortable when your infrastructure depends on it.

The bigger issue: **trust**. HashiCorp could change the license again. They could add more restrictions. The MPL was a promise. The BSL is a business decision.

OpenTofu, under the Linux Foundation, can't change its license without community approval. That governance model matters when you're betting your infrastructure on a tool.

## OpenTofu vs Terraform: The Reality

Let me be clear: for day-to-day usage, they're nearly identical.

\`\`\`bash
# This works in both
terraform init
terraform plan
terraform apply

# This also works in both
tofu init
tofu plan
tofu apply
\`\`\`

State files are compatible. Provider plugins are compatible. Module syntax is identical. If you have working Terraform code, it works in OpenTofu with one change: \`terraform\` → \`tofu\`.

The differences are in the margins:

### OpenTofu Advantages

**State encryption** is built-in. Terraform stores state in plaintext. OpenTofu can encrypt it:

\`\`\`hcl
terraform {
  encryption {
    key_provider "pbkdf2" "main" {
      passphrase = var.state_passphrase
    }

    method "aes_gcm" "main" {
      keys = key_provider.pbkdf2.main
    }

    state {
      method = method.aes_gcm.main
    }
  }
}
\`\`\`

This matters if you're storing state in S3 without additional encryption layers.

**Early variable evaluation** lets you use variables in backend configuration:

\`\`\`hcl
# Doesn't work in Terraform
terraform {
  backend "s3" {
    bucket = var.state_bucket  # Error!
  }
}

# Works in OpenTofu 1.7+
terraform {
  backend "s3" {
    bucket = var.state_bucket  # Valid
  }
}
\`\`\`

This simplifies multi-environment setups significantly.

### Terraform Advantages

**Larger ecosystem**. HashiCorp providers are tested against Terraform first. Most work fine with OpenTofu, but edge cases exist.

**Commercial support**. Terraform Cloud/Enterprise have no OpenTofu equivalent (yet). If you need vendor support, Terraform is still the choice.

**Familiarity**. Every DevOps engineer knows Terraform. OpenTofu requires explanation.

## The Migration Plan

Here's how we approached 100+ accounts:

### Phase 1: Assessment (2 weeks)

Audited everything:

\`\`\`bash
# Find all Terraform versions in use
find . -name "*.tf" -exec grep -l "required_version" {} \\; | \\
  xargs grep "required_version" | sort -u
\`\`\`

We were on Terraform 1.5.x across most modules. OpenTofu 1.6+ is compatible with Terraform 1.6 syntax, so we needed to update some modules first.

Also checked:

- Provider versions (all compatible)
- Backend configurations (all S3, all compatible)
- CI/CD pipelines (GitHub Actions, needed updates)
- Local development (team uses tfenv, needed tofuenv)

### Phase 2: Tooling Updates (1 week)

Updated CI/CD first. Our GitHub Actions workflow:

\`\`\`yaml
# Before
- name: Setup Terraform
  uses: hashicorp/setup-terraform@v3
  with:
    terraform_version: 1.5.7

# After
- name: Setup OpenTofu
  uses: opentofu/setup-opentofu@v1
  with:
    tofu_version: 1.6.2
\`\`\`

Local development switched to tofuenv (drop-in replacement for tfenv):

\`\`\`bash
# Install tofuenv
brew install tofuenv

# Install OpenTofu version
tofuenv install 1.6.2
tofuenv use 1.6.2

# Alias for muscle memory
alias terraform='tofu'
\`\`\`

### Phase 3: Non-Production First (2 weeks)

Started with sandbox accounts. The process per account:

\`\`\`bash
# 1. Backup state (paranoid but wise)
aws s3 cp s3://state-bucket/terraform.tfstate ./backup/

# 2. Run tofu init (downloads providers, validates config)
tofu init

# 3. Run tofu plan (should show no changes if compatible)
tofu plan
\`\`\`

First few accounts: zero issues. Plan showed no changes. State compatible.

Then we hit edge cases.

### The Edge Cases

**Provider version constraints**. Some modules pinned exact provider versions that didn't exist in OpenTofu registry yet:

\`\`\`hcl
# This failed
required_providers {
  aws = {
    source  = "hashicorp/aws"
    version = "5.31.0"  # Not yet mirrored
  }
}

# Fixed by loosening constraint
required_providers {
  aws = {
    source  = "hashicorp/aws"
    version = "~> 5.0"
  }
}
\`\`\`

**Backend initialization**. One legacy module used \`-backend-config\` files with Terraform-specific paths. Needed updating.

**Lock files**. \`.terraform.lock.hcl\` files contained Terraform-specific hashes. Regenerated with \`tofu init -upgrade\`.

### Phase 4: Production Migration (3 weeks)

Production accounts followed the same process, but with more ceremony:

1. Schedule change window
2. Create state backup
3. Run \`tofu init\`
4. Run \`tofu plan\` (verify no changes)
5. Run \`tofu apply\` (accept no-change plan to update state metadata)
6. Verify resources still exist
7. Update runbooks and documentation

We did 5 accounts per day. Slow and steady.

## One Year Later

What we gained:

- **State encryption**: All state files now encrypted at rest
- **Variable backends**: Simplified our multi-environment configs
- **No license anxiety**: Can build whatever we want
- **Active development**: OpenTofu releases features faster than Terraform now

What we lost:

- **Nothing material**: Every feature we used works identically

What we learned:

### It's Just Infrastructure as Code

The tool is not the value. Our modules, our patterns, our automation—that's the value. Whether \`terraform apply\` or \`tofu apply\` runs it is almost irrelevant.

The migration was less about technology and more about governance. We chose open source governance over corporate governance. That's a values decision as much as a technical one.

### Community Velocity Is Real

OpenTofu merged state encryption in months. This feature was requested in Terraform for years. The Linux Foundation governance model enables faster community contribution.

We've already contributed two bug fixes upstream. Try doing that with Terraform.

### The Ecosystem Will Split

This is my prediction: we'll see OpenTofu-only features and Terraform-only features diverge. Provider authors will have to choose which to support first.

For now, the AWS provider works identically in both. But in 2-3 years? The communities may look very different.

## Should You Switch?

**Switch if**:
- You're building an internal developer platform
- You value open source governance
- You want state encryption without external tooling
- You're starting a new project (no migration cost)

**Stay on Terraform if**:
- You use Terraform Cloud/Enterprise
- You need HashiCorp commercial support
- Your team resists change
- Everything works and license doesn't affect you

**Wait if**:
- You're not sure (that's fine)
- You want ecosystem to mature
- You have other priorities

## The Commands You Need

If you decide to try it:

\`\`\`bash
# Install OpenTofu
brew install opentofu

# Check existing Terraform state compatibility
tofu init
tofu plan  # Should show no changes

# If it works, you're done
# Terraform and OpenTofu can coexist

# Alias for convenience
echo 'alias tf="tofu"' >> ~/.zshrc
\`\`\`

Test in non-production. Verify plans show no changes. Migrate at your own pace.

## The Bigger Picture

The Terraform fork isn't about Terraform. It's about who controls developer infrastructure.

Five years ago, we standardized on Terraform because it was the best open source IaC tool. HashiCorp built a business on that community trust. Then they changed the license.

OpenTofu exists because the community decided: if we're going to depend on a tool, we should control it.

I don't know if OpenTofu will "win." But I know our infrastructure runs on something the community owns. That matters more than the name on the CLI.

---

*The migration took 6 weeks. The decision took a year. Sometimes the hard part isn't the technology—it's committing to change.*`,
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
