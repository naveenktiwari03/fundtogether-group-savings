# FundTogether

People save together all the time: for trips, weddings, gifts, family events,
and community projects. The coordination usually happens across chats,
screenshots, spreadsheets, and mental accounting. Someone keeps a running total.
Someone forgets to pay. Trust erodes before the goal is reached.

FundTogether is a prototype for structured group savings: a way for friends,
families, and communities to pool money toward shared goals while tracking
contributions and progress transparently.

## Product Thesis

Informal group savings is a widespread, unsolved problem. The behavior exists.
The infrastructure does not.

The product explores:

```text
shared goal -> invited group -> recurring contributions -> transparent progress
```

The bet: trust, visibility, and lightweight automation can make group saving
feel reliable without making it feel like a formal banking workflow.

## Target Users

- Friend groups saving for travel, celebrations, or shared purchases
- Families coordinating wedding, education, emergency, or household goals
- Community groups pooling money for local projects
- Organizers currently managing shared savings manually across spreadsheets and
  chat

## Current Demo Experience

- Landing page explaining the value proposition
- Dashboard with active group funds
- Fund creation flow with target amount, date, and risk preference
- Fund detail view with progress, member contributions, activity, and returns
- UI states that communicate transparency, shared ownership, and automation

## Product Decisions

- **Trust before growth:** contribution visibility and member-level accounting
  are central. Shared-money products fail quickly when users cannot verify the
  ledger. This is the first thing to get right.
- **Simple first action:** the primary workflow starts with creating a goal, not
  configuring financial settings. Activation has to feel low-friction.
- **Automation as retention:** recurring contributions and round-ups are framed
  as habit builders that keep a group goal alive after the initial excitement
  fades.
- **Risk awareness first:** the prototype includes investment risk preferences,
  but a production version would require suitability checks, disclosures, and
  regulatory review before enabling real money movement.

## Success Metrics

If validated with users, I would track:

- Fund creation rate from the landing page
- Invite completion rate per fund
- Percentage of funds with at least three contributors
- Contribution setup completion rate
- Repeat contribution rate after the first week
- Number of trust or support-related questions per active fund
- Percentage of funds reaching 50%, 75%, and 100% of target

## Key Risks And Open Questions

- Users may be willing to track shared goals but hesitant to pool real money.
- Group organizers may need stronger controls around invitations, withdrawals,
  and member permissions.
- Financial products require compliance, KYC, dispute handling, and clear
  disclosures before production launch.
- Investment return language would need compliance review before being used with
  real customers.

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

## Tech Stack

- React + TypeScript
- Vite
- shadcn/ui
- Tailwind CSS

## Run Locally

```bash
npm install
npm run dev
```

## Status

Prototype only. Not a production financial product. Do not use for real pooled
funds or investment decisions.

## Further Reading

- [docs/PRODUCT_BRIEF.md](docs/PRODUCT_BRIEF.md): problem framing, user
  research assumptions, and product strategy
- [docs/PM_CASE_STUDY.md](docs/PM_CASE_STUDY.md): decision log, tradeoffs, and
  what I would do differently
