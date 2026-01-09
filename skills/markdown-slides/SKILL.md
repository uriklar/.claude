---
name: markdown-slides
description: |
  Create presentation slides from markdown with an iterative workflow. Use when the user wants to:
  (1) Create a slide deck or presentation in markdown format
  (2) Build slides iteratively, one at a time
  (3) Generate HTML output from markdown slides

  Workflow: Create skeleton → iterate over each slide → user says "commit!" to save.
  Outputs CommonMark-compliant markdown that converts to styled HTML.
---

# Markdown Slides

Create presentation slides using markdown with HoneyBook styling.

## Workflow

### Phase 1: Skeleton
Ask the user for:
- Presentation title and subtitle
- Target audience
- Number of slides (approximate)
- Key topics to cover

Then create a skeleton outline:
```markdown
# Presentation Title

Subtitle or description

---

## Slide 1: Topic Name
[placeholder]

---

## Slide 2: Next Topic
[placeholder]
```

Present the skeleton for approval before proceeding.

### Phase 2: Iterate
Work through each slide one at a time:
1. Show the current slide number and topic
2. Propose content for that slide
3. Wait for user feedback (approve, revise, or skip)
4. Move to next slide

Keep slides focused: one main idea per slide. Use:
- Short bullet points (3-5 max)
- Code blocks with language hints for syntax highlighting
- Tables for comparisons
- Blockquotes for callouts

### Phase 3: Commit
When user says **"commit!"**:
1. Compile all slides into a single markdown file
2. Write to the specified path (ask if not provided)
3. Copy `assets/honeybook-doc.css` to the output directory
4. Offer to run the build script

## Slide Separators

Use `---` (thematic break) between slides. This renders as a visual divider and triggers page breaks in print.

## Build Command

```bash
node scripts/build.js input.md output.html
```

Requires: `npm install markdown-it highlight.js`

The CSS file must be in the same directory as the output HTML (or adjust the path in build.js).

## Markdown Format

Follow CommonMark spec. See `references/commonmark-reference.md` for syntax details.

Key patterns for slides:
- `## Slide Title` for each slide heading
- `---` between slides
- Fenced code blocks with language: ` ```typescript `
- Tables for side-by-side comparisons
- `> blockquote` for important callouts

## Example Slide

```markdown
## Component Architecture

Choosing the right pattern depends on your use case:

| Pattern | Best For | Complexity |
|---------|----------|------------|
| Simple | Static display | Low |
| Compound | Related controls | Medium |
| Headless | Full customization | High |

> Start simple, refactor when needed.

---
```
