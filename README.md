# Claude Code Shared Configuration

Shared Claude Code commands and skills for the team.

## What's Included

### Commands (`commands/`)
Reusable CLI command guides:
- `commit.md` - Conventional commit formatting
- `create-pull-request.md` - GitHub PR creation workflow
- `setup-worktrunk.md` - Git worktree setup

### Skills (`skills/`)
Custom skill definitions:
- `worktrunk/` - Git worktree management
- `skill-creator/` - Framework for creating new skills

## Setup

1. Clone this repo to `~/.claude`:
   ```bash
   git clone <repo-url> ~/.claude
   ```

2. Claude Code will automatically detect commands and skills

## Adding Your Own

- **Commands**: Add `.md` files to `commands/`
- **Skills**: Add skill folders with `SKILL.md` to `skills/`
- **Local settings**: Use `*.local.md` or `*.local.json` (gitignored)
