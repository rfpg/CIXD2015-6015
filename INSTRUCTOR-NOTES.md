# Instructor notes

Everything lives in this one repository, served by GitHub Pages from the `main` branch root:

- `https://rfpg.github.io/CIXD2015-6015/` — landing page
- `https://rfpg.github.io/CIXD2015-6015/kit/` — the kit (modules 00 and 01 so far)
- `https://rfpg.github.io/CIXD2015-6015/starter/` — the untouched starter, live, as the static example

## How students get the starter

Module 00 walks them through it without a template repo: make an empty repository of their own, download this repo as a ZIP, upload the contents of `starter/` to theirs, switch on Pages. Four clicks more than *Use this template*, but nothing else to maintain.

If you'd rather give them the green **Use this template** button later, make a separate repo (`cixd-cover-starter`) from the contents of `starter/`, tick *Template repository* under Settings → General, and change two things: the starter link on `kit/index.html`, and steps 2–3 of `kit/00-setup/index.html`, which would collapse back into one step.

## Adding modules

Each module is a folder with one `index.html` that links `../kit.css`. Add it to the list on `kit/index.html` (swap the `soon` span for a link) and fix the pager on the previous module. Relative paths only; the site lives in a subfolder.

## Notes

- Hands-only by design: the longest student file is 79 lines, and every module shows its source in the page for retyping.
- The starter loads one Google Font (Fraunces). Offline, the headline falls back to Georgia; nothing breaks.
- The hero placeholder is an SVG, so the repo carries no binary assets until students add their own.
- `.nojekyll` at the root tells Pages to serve files as they are.
