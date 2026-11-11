# MIRA QUEST — Opportunity Chapter

A fully playable browser-based cinematic visual-novel / historical discovery experience, built from the assets supplied by the project owner.

## Launch

**Quick start:** Unzip the archive and double-click `index.html` in a modern browser. The game is built as plain HTML, CSS, and JavaScript, so no build process or dependencies are required. If your browser restricts locally loaded media, start a local HTTP server instead:

With Python 3 installed:

```bash
cd mira-quest-game
python3 -m http.server 8080
```

Then open http://localhost:8080. On a Mac, you can use Terminal and the same commands. No npm install, build, paid API, login, or internet connection is needed to play (Google Fonts optionally load online; local fallback fonts work offline).

## Features and progress

- Cinematic title screen using G01
- Multi-beat, click-to-advance grand opening
- One-point signal / mysterious transmission
- Three glowing points, with Opportunity as the fully playable mission (other signal cards clearly show that their chapters are not implemented)
- Interactive spacecraft-travel simulation, straight progress telemetry, and Mars appearing after 75% progress
- Realistic Mars environmental scan and accurate location labels
- Drag/swipe/keyboard/arrow navigation to discover Opportunity (a composite environment from the supplied G28 artwork)
- First conversation, unknown-identity reveal, branching choices and shared storyline
- Animated 90 vs 5,111-sol comparison
- Actual NASA route map with selectable milestones
- Actual Mars geology photograph, zoom and interactive observations
- Persistent Mission Gallery with actual NASA photographs and image credits
- Final mission timeline including historical ending, and return to signal selection
- Audio controls, volume settings, reduced-motion option, touch support, optional fullscreen, local save state

## Important visual limitation

The original PIA22909 pano supplied in the ZIP is only a small web preview (699 × 302). To avoid giving the impression of a detailed 360° NASA photographic view, this version uses a draggable *cinematic composite* built from the supplied generated Mars scene. This is real pointer/touch-controlled horizontal panning, but it is **not** a fully spherical 360° image or physically accurate 3D navigation. A higher-resolution stitched NASA panorama can replace the scene when acquired; full exterior rover portrayal would still require a labeled reconstruction.

## Structure

- `index.html` — app entry
- `styles.css` — layouts, cinematic styling, responsive interfaces and animation
- `src/game.js` — game scenes, interaction state, data and missions
- `assets/art/title/` — title-screen artwork (G01, G03)
- `assets/art/intro/` — starry cinematic opening (G04, G07)
- `assets/art/signals/` — subtle signal background (G14)
- `assets/art/selection/` — Opportunity selection portrait (G11)
- `assets/art/travel/` — Mars approach and star-travel images (G15, G17, G18, G21)
- `assets/art/opportunity/` — Opportunity rover and Mars composites (G24, G25, G28, G34)
- `assets/photos/` — original downloaded mission imagery with simplified descriptive filenames
- `assets/audio/` — audio supplied by the project owner
- `CREDITS.md` — provenance, publication review notes

## Event disclosure

This is an AI-assisted creative prototype. The images supplied as generated art must be visibly labeled as synthetic for the event's reported rules. The application adds on-screen source/reconstruction notes for the relevant scenes. Verify organizer requirements and any individual audio licenses before public release.

## Production notes

The exploration environment, visual effects and gallery photographs are replaceable without rebuilding the story system. For use in a real competition submission, validate each scientific image's caption against the original NASA page, replace low-resolution downloaded previews, review AI watermark handling, and test on actual phones/tablets. This is a playable Opportunity experience, not a completed Eagle/Ingenuity game.
