# PM Case Study: FundTogether

## One-Line Summary

FundTogether turns informal group money coordination into a transparent goal,
contribution, and progress tracker.

## Why This Problem

Shared saving already happens in everyday life, but the workflow is fragmented.
The organizer carries the operational burden, while contributors rely on trust
instead of visibility.

That creates a product opportunity around clarity, accountability, and
lightweight automation.

## User Journey

1. Organizer creates a shared savings goal.
2. Organizer invites members.
3. Members see the goal, deadline, expected contribution, and progress.
4. Members contribute manually or through future automated contribution flows.
5. The group tracks milestones and decides when to withdraw.

## Product Decisions

- **Trust first:** the ledger is the core product surface because shared-money
  products fail when members cannot verify who paid.
- **Low-friction activation:** the first user action is goal creation, not
  financial configuration.
- **Progress as motivation:** milestone visibility gives members a reason to
  return and contribute again.
- **Payments later:** payment movement is deferred until the tracking workflow
  proves useful enough to earn trust.

## Prioritization

### Must Have

- Create a fund
- Show target amount and deadline
- Show contributors and contribution amounts
- Show recent activity
- Show progress toward goal

### Should Have

- Invite flow
- Contribution reminders
- Withdrawal approval model
- Member roles and permissions

### Later

- Payment integrations
- KYC
- Investment routing
- Compliance-reviewed return projections
- Dispute handling and support operations

## Metrics Framework

Activation:

- fund creation completion rate
- invite send rate
- member join rate

Engagement:

- repeat dashboard visits
- contribution update frequency
- reminder interaction rate

Trust:

- number of contribution disputes
- number of withdrawal questions
- organizer support burden

Outcome:

- percentage of funds reaching milestone thresholds
- percentage of goals completed by target date

## Tradeoffs

- Starting with a tracker lowers compliance complexity but may reduce perceived
  utility if users expect embedded payments.
- Showing investment returns can make the product feel more valuable, but it
  increases regulatory and expectation risk.
- Organizer-led controls are simple, but high-value funds may require shared
  approval flows.

## What I Would Test Next

1. Interview people who have organized group trips, gifts, or community funds.
2. Test whether a no-payment tracker is useful enough to adopt.
3. Prototype invite and contribution reminder flows.
4. Compare three withdrawal governance models.
5. Measure whether visibility reduces follow-up messages to the organizer.

## What I Would Do Differently

- Start with a sharper invite and permission prototype before exploring returns.
- Replace broad investment claims with compliance-reviewed placeholder language.
- Add a withdrawal approval flow earlier, because exit rules are central to
  trust.

## PM Skills Demonstrated

- Customer problem framing
- MVP scoping
- Funnel and retention metric design
- Risk-aware fintech thinking
- Prioritization across user value, trust, and operational complexity
