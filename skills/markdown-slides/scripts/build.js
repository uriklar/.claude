// build.js
// Usage: node build.js input.md output.html

const fs = require('fs');
const path = require('path');

// Initialize markdown-it with options
const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
});

// Add syntax highlighting with highlight.js
const hljs = require('highlight.js');

md.options.highlight = function (str, lang) {
  if (lang && hljs.getLanguage(lang)) {
    try {
      return '<pre class="hljs"><code>' +
             hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
             '</code></pre>';
    } catch (__) {}
  }
  return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
};

// Get input/output paths from command line args
const inputFile = process.argv[2] || 'slides.md';
const outputFile = process.argv[3] || 'output.html';

// Read markdown file
const markdown = fs.readFileSync(inputFile, 'utf8');

// Convert to HTML
const content = md.render(markdown);

// Full HTML template
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Component Patterns in HBUI</title>
  <link rel="stylesheet" href="./honeybook-doc.css">
</head>
<body>
  <header class="doc-header">
    <div class="content">
      <div class="brand">HONEYBOOK</div>
      <h1>Component Patterns in HBUI</h1>
      <p>Choosing the right architecture for the right problem</p>
    </div>
  </header>

  <main class="content">
    ${content}
  </main>
</body>
</html>`;

fs.writeFileSync(outputFile, html);
console.log(`✅ Built ${outputFile} from ${inputFile}`);
