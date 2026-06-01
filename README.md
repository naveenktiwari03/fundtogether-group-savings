# FundTogether

FundTogether is a product prototype for collaborative savings: a way for friends,
families, and communities to pool money toward shared goals while tracking
contributions, progress, and potential investment returns transparently.

This repo is positioned as a product management portfolio project. The goal is
to show problem framing, user empathy, MVP scoping, prioritization, risk
thinking, and measurable product strategy alongside a working front-end demo.

## Product Thesis

People already save together informally for trips, gifts, family events, and
community projects. The experience is usually scattered across chats,
spreadsheets, payment screenshots, and trust-based mental accounting.

FundTogether explores a structured alternative:

```text
shared goal -> invited group -> recurring contributions -> transparent progress
```

The product bet is that trust, visibility, and automation can make group saving
feel more reliable without making it feel like a formal banking workflow.

## Target Users

- Friend groups saving for travel, celebrations, or shared purchases
- Families coordinating wedding, education, emergency, or household goals
- Community groups pooling money for local projects
- Organizers who currently manage shared savings manually

## Current Demo Experience

- Landing page explaining the value proposition
- Demo dashboard with active group funds
- Fund creation flow with target amount, date, and risk preference
- Fund detail view with progress, member contributions, activity, and returns
- UI states that communicate transparency, automation, and shared ownership

## Product Decisions Shown

- **Trust before growth:** contribution visibility and member-level accounting
  are central because shared-money products fail quickly when users do not trust
  the ledger.
- **Simple first action:** the primary workflow starts with creating a goal,
  not configuring complex financial settings.
- **Automation as retention:** recurring contributions and round-ups are framed
  as habit builders that keep a group goal alive after the initial excitement.
- **Risk awareness:** the prototype includes investment risk preferences, but a
  production version would need suitability checks, disclosures, and regulatory
  review before enabling real money movement.

## MVP Success Metrics

If this were validated with users, I would track:

- Fund creation rate from the landing page
- Invite completion rate per fund
- Percentage of funds with at least three contributors
- Contribution setup completion rate
- Repeat contribution rate after the first week
- Number of support or trust-related questions per active fund
- Percentage of funds reaching 50%, 75%, and 100% of target

## Key Risks And Assumptions

- Users may be willing to track shared goals but hesitant to pool real money.
- Group organizers may need strong controls for invitations, withdrawals, and
  member permissions.
- Financial products require compliance, KYC, dispute handling, and clear
  disclosures before production launch.
- Investment returns should never be overpromised; the demo language would need
  compliance review before being used with real customers.

## Roadmap

1. Validate the problem with interviews across friend, family, and community
   savings groups.
2. Add invite and member permission flows.
3. Add contribution history, settlement states, and withdrawal approval flows.
4. Test different trust models: organizer-controlled, unanimous approval, and
   majority approval.
5. Add reminders and contribution nudges.
6. Add compliance-reviewed savings and investment flows only after validating
   demand for shared-goal tracking.

## Portfolio Notes

This project is meant to demonstrate:

- Product discovery and problem decomposition
- MVP scoping from a broad fintech concept
- User journey thinking across acquisition, activation, and retention
- Metrics definition for a consumer finance workflow
- Awareness of trust, compliance, and operational constraints

See [docs/PRODUCT_BRIEF.md](docs/PRODUCT_BRIEF.md) and
[docs/PM_CASE_STUDY.md](docs/PM_CASE_STUDY.md) for the fuller product framing.

## Run Locally

```bash
npm install
npm run dev
```

## Tech Stack

- Vite
- TypeScript
- React
- shadcn/ui
- Tailwind CSS

## Status

Prototype only. This is not a production financial product and should not be
used for real pooled funds or investment decisions.
