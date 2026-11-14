# Deploying MIRA Quest

MIRA Quest is a static HTML/CSS/JavaScript browser game. It requires no package installation, build command or backend.

## Vercel

Deploy the **root of this extracted ZIP** with these settings:

- Framework Preset: **Other**
- Build Command: empty
- Install Command: empty
- Output Directory: `.`
- Root Directory: the folder containing `index.html`

The included `vercel.json` uses the static project configuration. Upload the complete folder, not just `index.html`: the page loads `game-next.css`, `src/story.js`, `src/game-next.js`, and the relative `assets/` tree.

## Local play

Run `python3 -m http.server 8000` from the project root and open <http://localhost:8000>. Serving the folder over HTTP is recommended over `file://`, because the game uses relative photo, audio and video assets.

For deployment context and QA notes, see `README.md`; for image credits and sources, see `CREDITS.md`.
