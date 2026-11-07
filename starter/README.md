# Cover Story starter

Your Project 2 cover page, as a website. Six files, all short enough to read in one sitting.

```
index.html           the cover: masthead, hero, headline, six words, two quotes, byline
css/tokens.css       your design system as custom properties (Figma Variables, in text)
css/base.css         reset, type, and the cover layout
css/components.css   reusable pieces; one so far, the theme toggle
js/app.js            behavior; one thing so far, the theme toggle
img/hero.svg         a placeholder image to replace
```

Every line marked `edit` in `index.html` is yours to change. Start with the masthead and the headline.

## Publish it (once)

1. On GitHub, open the starter and choose **Use this template → Create a new repository**. Name it in lowercase with hyphens (`cover-story`). Keep it public. Create.
2. In your new repo: **Settings → Pages**. Under *Build and deployment*, set Source to **Deploy from a branch**, Branch to **main** and **/ (root)**. Save.
3. Wait a minute, refresh that page, and your site is live at `https://YOUR-USERNAME.github.io/cover-story/`. Bookmark it.

## Edit it (every time)

1. **Code → Download ZIP** once, unzip, and open the folder in VS Code (File → Open Folder).
2. Also open `index.html` in your browser (double-click it). Edit, save, refresh. That's the loop.
3. To publish: on your repo page, **Add file → Upload files**, drag in the files you changed (drag whole folders, like `css`, so they land in the right place), then **Commit changes**. The live page updates within a minute; hard-refresh (Shift + reload) if it looks stale.

## Three rules that save an afternoon

- Paths are relative: `css/tokens.css`, never `/css/tokens.css`. The site lives in a subfolder.
- Filenames are lowercase, no spaces, exact extension. `hero.jpg` and `Hero.JPG` are different files online.
- `index.html` keeps that exact name. It's the file the URL opens.
