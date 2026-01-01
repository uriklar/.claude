---
name: worktrunk
description: Git worktree management with Worktrunk CLI. Use when the user mentions git worktrees, parallel agents, running multiple Claude instances, branching workflows, or wants to create/switch/merge/remove worktrees. Helps with wt switch, wt list, wt merge, wt remove commands and hook configuration.
---

# Worktrunk

Worktrunk uses branch names to address worktrees. Each worktree maps to exactly one branch; paths derive automatically.

## Core Commands

### wt switch
Navigate between or create worktrees.

```bash
wt switch feat              # Switch to existing worktree
wt switch -c feat           # Create new worktree/branch
wt switch -c feat -b main   # Create from specific base branch
wt switch -c feat -x claude # Create and launch Claude
```

**Shortcuts**: `^` (default branch), `@` (current), `-` (previous)

**Key flags**:
- `-c, --create` — Create new branch/worktree
- `-b, --base <BRANCH>` — Base branch (default: repo default)
- `-x, --execute <CMD>` — Run command after switch
- `-y, --yes` — Skip prompts
- `--no-verify` — Skip hooks

### wt list
Show all worktrees with status.

```bash
wt list                     # Basic listing
wt list --full              # Include CI status, line diffs
wt list --format json       # JSON output for scripting
wt list --branches          # Include branches without worktrees
```

**Status symbols**: Staged, modified, untracked, conflicts, ahead/behind

### wt merge
Merge feature branch to default (squash + rebase + merge + cleanup).

```bash
wt merge                    # Merge current to default branch
wt merge develop            # Merge to specific branch
wt merge --no-squash        # Keep individual commits
wt merge --no-remove        # Keep worktree after merge
wt merge --no-commit        # Stage but don't commit
```

**Pipeline**: squash → rebase → pre-merge hooks → merge → cleanup → post-merge hooks

### wt remove
Clean up worktree and branch.

```bash
wt remove                   # Remove current worktree
wt remove feat              # Remove specific worktree
```

## Common Workflows

### Start a new Claude agent on a feature
```bash
wt switch -c feature-name -x claude
# Or with alias:
alias wsc='wt switch --create -x claude'
wsc fix-bug -- 'Fix issue #123'
```

### Complete and merge work
```bash
wt merge                    # Squash, merge to main, cleanup
```

### Manage parallel agents
```bash
wt list --full              # See all agents with status
wt switch other-feature     # Jump to another worktree
```

## Hooks

Configure project hooks with `wt hook`:
- **post-create** — Run after worktree creation (e.g., install deps)
- **pre-merge** — Run before merge (e.g., tests)
- **post-merge** — Run after merge completes

Use `--no-verify` on any command to skip hooks.
