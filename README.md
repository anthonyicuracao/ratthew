# Matthew Leahy — portfolio

A single static page. No build step, no framework, nothing to install or update.

| File | What it is |
| --- | --- |
| `index.html` | All the content: text, projects, links |
| `styles.css` | Layout and colours |
| `main.js` | Click-to-play video and click-to-enlarge images |
| `img/` | Artwork, already resized for the web |

## Preview it

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Common edits (all in `index.html`)

- **Name, intro line, About text, email**: search for the text and change it.
- **Swap the lead video for a demo reel**: in the `hero` section, replace the YouTube ID `qP2YcaGqF14` (it appears twice) and change the poster image and caption.
- **Add a project**: copy one whole `<article class="project">…</article>` block and edit it. The first project on the page gets the most attention, so order them best-first.
- **Add an image**: export it as `.webp` or `.jpg` at about 1600px wide, put it in `img/`, and copy an existing `<a class="zoom c6" …>` line. `c12` is full width, `c6` half, `c4` a third.
- **Put images of different shapes side by side**: wrap them in `<div class="row">` and give each one `style="--r:0.75"`, where the number is its width divided by its height. The row then sizes them so their tops and bottoms line up.
- **Add a résumé**: put `resume.pdf` next to `index.html` and add `<a href="resume.pdf">Résumé ↗</a>` to the `links` paragraph in the contact section.

## Tailoring a link to a job

Each section has its own address, so an application can open on the relevant work:
`#animation`, `#projection`, `#live-visuals`, `#motion`, `#design`, `#illustration`.
For a design role, for example, send `https://www.ratthew.org/#design`.

## Hosting

Any static host works for free: GitHub Pages, Cloudflare Pages or Netlify. Upload this folder as it is.
To use `ratthew.org`, point the domain's DNS at the new host, then cancel the Webflow site plan.
