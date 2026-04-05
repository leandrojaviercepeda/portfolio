# Skill Registry

**Delegator use only.** Any agent that launches sub-agents reads this registry to resolve compact rules, then injects them directly into sub-agent prompts. Sub-agents do NOT read this registry or individual SKILL.md files.

## User Skills

| Trigger | Skill | Path |
|---------|-------|------|
| Creating a pull request, opening a PR, or preparing changes for review | branch-pr | /home/leandrojaviercepeda/.config/opencode/skills/branch-pr/SKILL.md |
| Creating a GitHub issue, reporting a bug, or requesting a feature | issue-creation | /home/leandrojaviercepeda/.config/opencode/skills/issue-creation/SKILL.md |
| Judgment day, judgment-day, review adversarial, dual review, doble review, juzgar, que lo juzguen | judgment-day | /home/leandrojaviercepeda/.config/opencode/skills/judgment-day/SKILL.md |
| Writing Go tests, using teatest, or adding test coverage | go-testing | /home/leandrojaviercepeda/.config/opencode/skills/go-testing/SKILL.md |
| Creating a new skill, adding agent instructions, or documenting patterns for AI | skill-creator | /home/leandrojaviercepeda/.config/opencode/skills/skill-creator/SKILL.md |
| Next.js App Router development | nextjs-best-practices | /home/leandrojaviercepeda/personal-projects/portfolio/.opencode/skills/nextjs-best-practices/SKILL.md |
| React development | react-best-practices | /home/leandrojaviercepeda/personal-projects/portfolio/.opencode/skills/react-best-practices/SKILL.md |

## Compact Rules

Pre-digested rules per skill. Delegators copy matching blocks into sub-agent prompts as `## Project Standards (auto-resolved)`.

### branch-pr
- Every PR MUST link an approved issue — no exceptions
- Every PR MUST have exactly one `type:*` label
- Automated checks must pass before merge is possible
- Branch names MUST match: `^(feat|fix|chore|docs|style|refactor|perf|test|build|ci|revert)\/[a-z0-9._-]+$`

### issue-creation
- Blank issues are disabled — MUST use a template (bug report or feature request)
- Every issue gets `status:needs-review` automatically on creation
- A maintainer MUST add `status:approved` before any PR can be opened
- Questions go to Discussions, not issues

### judgment-day
- Launch TWO sub-agents via delegate (async, parallel — never sequential)
- Each agent receives the same target but works independently
- Neither agent knows about the other — no cross-contamination
- Synthesize verdict: confirmed (both agree), suspect (one only), contradiction

### go-testing
- Use table-driven tests for multiple test cases
- Use `teatest` for Bubbletea TUI testing
- Use golden file testing for complex output validation
- Follow standard Go test file naming: `*_test.go`

### skill-creator
- Create a skill when: patterns used repeatedly, project-specific conventions differ, complex workflows need steps
- Don't create a skill when: documentation exists, pattern is trivial, one-off task
- Skill structure: `skills/{skill-name}/SKILL.md` required, assets/ and references/ optional

### nextjs-best-practices (from Vercel Engineering)
- Server Components by default, add 'use client' only for interactivity/hooks
- No async client components — fetch in server, pass data to client
- Props must be JSON-serializable (no Date, Map, Set, functions)
- Use Promise.all for parallel fetches, avoid waterfalls
- Use Suspense for streaming content
- Use next/dynamic for heavy components, not barrel imports
- Use generateMetadata for dynamic SEO, static metadata for fixed content
- Add error.tsx, loading.tsx, not-found.tsx for route states
- middleware.ts (Next.js 14-15) or proxy.ts (Next.js 16+)

### react-best-practices (from Vercel Engineering)
- **CRITICAL**: Promise.all for independent async ops (2-10× faster)
- **CRITICAL**: Dynamic imports for heavy components (next/dynamic)
- Use startTransition for non-urgent updates
- Use useDeferredValue for expensive renders
- Don't subscribe to state only used in callbacks (use ref instead)
- Avoid inline components (define outside)
- Use functional setState for stable callbacks
- Pass function to useState for expensive initialization
- Use Map/Set for O(1) lookups in loops
- Prefer ternary over && for conditionals (avoids 0 rendering)

## Project Conventions

| File | Path | Notes |
|------|------|-------|
| AGENTS.md | /home/leandrojaviercepeda/personal-projects/portfolio/AGENTS.md | Project-level agent instructions |