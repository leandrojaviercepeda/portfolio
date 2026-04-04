# Skill Registry

**Delegator use only.** Any agent that launches sub-agents reads this registry to resolve compact rules, then injects them directly into sub-agent prompts. Sub-agents do NOT read this registry or individual SKILL.md files.

See `_shared/skill-resolver.md` for the full resolution protocol.

## User Skills

| Trigger | Skill | Path |
|---------|-------|------|
| Creating a pull request, opening a PR, or preparing changes for review | branch-pr | /home/leandrojaviercepeda/.config/opencode/skills/branch-pr/SKILL.md |
| Creating a GitHub issue, reporting a bug, or requesting a feature | issue-creation | /home/leandrojaviercepeda/.config/opencode/skills/issue-creation/SKILL.md |
| Judgment day, judgment-day, review adversarial, dual review, doble review, juzgar, que lo juzguen | judgment-day | /home/leandrojaviercepeda/.config/opencode/skills/judgment-day/SKILL.md |
| Writing Go tests, using teatest, or adding test coverage | go-testing | /home/leandrojaviercepeda/.config/opencode/skills/go-testing/SKILL.md |
| Creating a new skill, adding agent instructions, or documenting patterns for AI | skill-creator | /home/leandrojaviercepeda/.config/opencode/skills/skill-creator/SKILL.md |

## Compact Rules

Pre-digested rules per skill. Delegators copy matching blocks into sub-agent prompts as `## Project Standards (auto-resolved)`.

### branch-pr
- Every PR MUST link an approved issue — no exceptions
- Every PR MUST have exactly one `type:*` label
- Automated checks must pass before merge is possible
- Blank PRs without issue linkage will be blocked by GitHub Actions
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
- Both use identical review criteria but may find different issues

### go-testing
- Use table-driven tests for multiple test cases
- Use `teatest` for Bubbletea TUI testing
- Use golden file testing for complex output validation
- Follow standard Go test file naming: `*_test.go`

### skill-creator
- Create a skill when: patterns used repeatedly, project-specific conventions differ, complex workflows need steps
- Don't create a skill when: documentation exists, pattern is trivial, one-off task
- Skill structure: `skills/{skill-name}/SKILL.md` required, assets/ and references/ optional

## Project Conventions

| File | Path | Notes |
|------|------|-------|
| AGENTS.md | /home/leandrojaviercepeda/personal-projects/portfolio/AGENTS.md | Index — references files below |

### AGENTS.md Referenced Files
(Extracted from index — no additional files listed)
