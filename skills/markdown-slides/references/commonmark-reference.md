# CommonMark Quick Reference

## Block Elements

### Headings
```markdown
# H1 (ATX style)
## H2
### H3 - H6

Setext H1
=========

Setext H2
---------
```

### Paragraphs
Separate with blank lines. Line endings within become soft breaks.

### Thematic Breaks
Three or more `-`, `*`, or `_` on a line (spaces allowed between):
```markdown
---
* * *
___
```

### Code Blocks

**Fenced** (preferred):
```markdown
```javascript
const x = 1;
```
```

**Indented** (4 spaces):
```markdown
    code here
```

### Block Quotes
```markdown
> Quote text
> continues here
>
> New paragraph in quote
```

### Lists

**Unordered** (`-`, `*`, or `+`):
```markdown
- Item 1
- Item 2
  - Nested (2 space indent)
```

**Ordered** (number + `.` or `)`):
```markdown
1. First
2. Second
   1. Nested
```

**List continuation**: Indent content to align with first non-space after marker.

### HTML Blocks
Raw HTML on its own line passes through unchanged.

## Inline Elements

### Emphasis
```markdown
*italic* or _italic_
**bold** or __bold__
***bold italic***
```

### Code Spans
```markdown
`inline code`
`` code with `backtick` ``
```

### Links
```markdown
[text](url "optional title")
[text][ref]
[ref]: url "title"
```

### Images
```markdown
![alt text](url "title")
![alt][ref]
```

### Autolinks
```markdown
<https://example.com>
<email@example.com>
```

### Hard Line Breaks
Two spaces at line end, or backslash:
```markdown
Line one
Line two

Line one\
Line two
```

## Escaping
Backslash escapes punctuation: `\*`, `\[`, `\\`, etc.

## Key Rules

1. **Block structure first**: Indicators like `>`, `-`, `#` take precedence over inline
2. **Blank lines matter**: Separate paragraphs, create loose lists
3. **Indentation**: 4 spaces = code block (except in lists where it's continuation)
4. **Lazy continuation**: Block quote/list content can omit markers on continuation lines
