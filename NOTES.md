# Portfolio Site — Project Notes
> Last updated: 2026-06-05

---

## What this is

A personal academic portfolio for **A S M Zisanur Rahman**, built as a **Jekyll static site**
(GitHub Pages compatible). Content lives in `.md` files; the HTML/CSS layout is separate and rarely
needs touching.

---

## File locations

| Path | Purpose |
|------|---------|
| `/Users/zisanurrahman/Documents/GitHub/portfolio-site/` | **Root — all source files live here** |
| `preview/index.html` etc. | **Open these directly in browser to preview** (no server needed) |
| `index.md` | Home page content |
| `about.md` | Bio, education, awards, sidebar links |
| `research.md` | Research areas + skills/methods |
| `publications.md` | Publications page (auto-loaded from PubMed) |
| `contact.md` | Contact cards + institutional address |
| `_config.yml` | Site-wide settings: name, email, social links |
| `_layouts/default.html` | Shared nav + footer HTML (Liquid template) |
| `assets/css/style.css` | All styles — colours, fonts, layout |
| `assets/js/pubmed.js` | PubMed auto-fetch script |
| `assets/img/zisanur.png` | Profile photo |
| `Gemfile` | Ruby dependencies for local Jekyll preview |

---

## What is done ✅

- [x] Multi-page Jekyll site: Home, About, Research, Publications, Contact
- [x] Dark mode design (cyan accent `#22d3ee`, Inter + JetBrains Mono fonts)
- [x] Sticky navbar, mobile hamburger menu, active-page highlighting
- [x] Profile photo (`zisanur.png`) wired in on Home and About pages
- [x] **PubMed auto-fetch** — publications load live from NCBI using ORCID `0000-0001-7566-1696`
  - Groups by year, bolds "Rahman" in author lists
  - Clickable PMID + DOI badges on each paper
  - Highlights Nature Comms, PLOS, ACS, npj with coloured badges
  - Falls back to author-name search if ORCID returns nothing
- [x] Citation metrics bar on Publications page (229 citations, h-index 9, i10-index 8)
- [x] Social links filled in everywhere:
  - Google Scholar: `https://scholar.google.ca/citations?user=k9kXykwAAAAJ&hl=en`
  - LinkedIn: `https://www.linkedin.com/in/zisanur-rahman-phd-07a81862/`
  - GitHub: `https://github.com/zisanurrahman`
  - ResearchGate: `https://www.researchgate.net/profile/Zisanur-Rahman`
  - ORCID: `https://orcid.org/0000-0001-7566-1696`
- [x] Static HTML preview files in `preview/` — open in any browser, no server needed
- [x] `_config.yml` with all author info + social links
- [x] `Gemfile` ready for local Jekyll build

---

## What still needs to be done ⬜

### High priority (content gaps)
- [ ] **Email address** — add to `_config.yml` (`email:` field) and `contact.md` + `preview/contact.html`
- [ ] **Education details** — fill in BSc and MSc (institution, year, degree) in `about.md` and `preview/about.html`
- [ ] **Awards & Recognition** — add from CV into the awards section in `about.md`
- [ ] **CV PDF** — upload to `assets/CV_Rahman.pdf`, then uncomment the CV download link in `about.md` and `preview/about.html`

### Nice to have
- [ ] **More research cards** — add any postdoc-specific projects to `research.md` if not covered
- [ ] **News / Updates section** — a short "recent news" strip on the home page (new grants, papers, talks)
- [ ] **Projects page** — a dedicated page for software/bioinformatics tools you've built (optional)

### Deployment
- [ ] **Push to GitHub Pages**:
  1. Create a new GitHub repo (e.g. `zisanurrahman.github.io` or any name)
  2. Push the contents of `portfolio-site/` to the repo
  3. In repo Settings → Pages → set source to `main` branch, root `/`
  4. GitHub will build the Jekyll site automatically — no local install needed
  5. Site will be live at `https://zisanurrahman.github.io`
- [ ] Once deployed, verify PubMed fetch works (requires internet, which GitHub Pages serves over)
- [ ] Clean up old draft folders: `portfolio/` and `zisan-portfolio/` in `Documents/GitHub/`

### Optional polish
- [ ] Add favicon (`assets/img/favicon.ico`)
- [ ] Add Open Graph meta tags (for link previews on LinkedIn/Twitter) in `_layouts/default.html`
- [ ] Consider adding Google Analytics or Plausible for visitor tracking

---

## How to resume work with Claude

Say: *"Resume my portfolio site — notes are in `/Users/zisanurrahman/Documents/GitHub/portfolio-site/NOTES.md`"*

Claude will read this file and pick up exactly where we left off.

---

## How to preview locally (one-time setup)

```bash
# Install Jekyll (only needed once)
gem install jekyll bundler

# Install site dependencies
cd /Users/zisanurrahman/Documents/GitHub/portfolio-site
bundle install

# Serve locally
bundle exec jekyll serve

# Open http://localhost:4000 in your browser
```

**No local install?** Just open any file in `preview/` directly in your browser.

---

## Key design decisions (for reference)

| Decision | Rationale |
|----------|-----------|
| Jekyll + Markdown | Content editable in any text editor; GitHub Pages builds it for free |
| Plain HTML/CSS/JS | No React, no npm — nothing to break or update |
| PubMed ORCID fetch | Papers auto-update whenever a new one is indexed; no manual list maintenance |
| Dark mode | User preference; matches professional academic look |
| `preview/` folder | Allows browser preview without running Jekyll locally |
| Cyan accent `#22d3ee` | Scientific/computational feel; readable on dark backgrounds |
