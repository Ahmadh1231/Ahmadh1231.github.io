# Ahmadh Hassan — portfolio

A static portfolio: plain HTML, CSS and a little JavaScript. No build step.

## Preview

```bash
python -m http.server 8000
```

Open http://localhost:8000.

## Deploy

GitHub Actions copies `index.html`, `style.css`, `script.js`, `resume.pdf` and `assets/` into `_site` on each push to `master` and publishes it to `gh-pages`.

The previous terminal-style Next.js version is in git history on `master` before the redesign.
