# Intelligent Development Method

## Purpose
Build software that improves not only in features, but in engineering intelligence over time.

## Core Idea
Every change should generate reusable knowledge.

## The Loop
1. Hypothesis
- State what we think is true and what user or system outcome should improve.

2. Implementation
- Ship the smallest coherent change that can validate or falsify the hypothesis.

3. Evidence
- Record measurable outcomes:
  - Build/test results.
  - Runtime behavior.
  - UX latency impact.
  - Error rates.

4. Decision
- Keep, revise, or rollback based on evidence.

5. Memory
- Write insights into `OA-Codex-brain` so new engineers inherit context immediately.

## Practical Repository Practices
- Keep state snapshots and schema docs versioned.
- For each major feature, include:
  - "Why this design"
  - "What alternatives were rejected"
  - "What we still do not know"
- Maintain a "known risks" section updated per sprint.

## Intelligence Multipliers
- Tight PR templates that force explicit tradeoff documentation.
- Lightweight architecture decision records.
- Continuous cleanup of stale docs and obsolete scaffolds.
- Tooling that catches drift early (lint/type/CI).

## Human + AI Co-Development Pattern
- Human defines product intent, constraints, and acceptance criteria.
- AI accelerates implementation, diff review, and documentation synthesis.
- Human validates critical assumptions and approves architectural direction.

## Outcome
Over time the repo becomes easier to reason about, faster to evolve, and safer to change.
