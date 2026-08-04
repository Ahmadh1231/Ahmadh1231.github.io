# Ahmadh Hassan — portfolio

Terminal-inspired static portfolio for Ahmadh Hassan, built with Next.js and React and exported for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The portfolio can be explored with the visible command controls or by typing `help`, `about`, `experience`, `research`, `education`, `skills`, `leadership`, `contact`, `resume`, or `clear` into the terminal.

## Verification and production build

```bash
npm run lint
npm run build
```

The build writes a static export to `out`. GitHub Actions runs on pushes to `master` and publishes that directory to `gh-pages`.

The public resume is expected at `public/resume.pdf`, which is available at `/resume.pdf` after export.
