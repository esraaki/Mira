# MIRA QUEST · Opportunity & Apollo 11 Eagle

**Their missions ended. Their stories didn’t.** A cinematic, interactive NASA-mission story for curious young space enthusiasts. Polished November 14, 2026 from the supplied MIRA Quest archive; its chapter sequence, identity, story, interactions and original assets are retained.

## Run or deploy

This is a static, build-free HTML/CSS/JavaScript game. From the unzipped project root, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. You may also deploy the unzipped root as a static site (for Vercel, choose **Other**, no build command, and `.` as the output directory). Use a local/static HTTP server rather than opening `index.html` via `file://` so image, audio and video paths work consistently. No backend, package install, or build step is required.

## Playthrough

The original experience remains **Prologue → Opportunity → Eagle → Ending**. A name can be chosen for the astronaut/explorer. Both stories retain branching responses, cinematic travel and arrival, interactive memory scenes and mini-games, NASA photo unlocks, sound effects, and the finale.

- **Opportunity:** Follow the Mars signal, meet the rover at Perseverance Valley, and learn about its 90-sol plan, 5,111-sol mission, early crater geology, hematite-rich spherules, instruments, route-planning constraints, the Homestake vein, and the 2018 dust storm. The storm presentation remains a disclosed simulation; Opportunity’s internal fate after last contact is not invented as fact.
- **Eagle:** Find Apollo 11’s lunar-module descent stage at Tranquility Base. Explore the LM’s separate descent/ascent stages, the challenge of landing without an atmosphere, Apollo 11 surface science, the ascent-stage departure, and why the descent stage was deliberately left on the Moon.

Collected photographs, completed-chapter progress, the explorer name and selected sound/motion preferences are saved in this browser. Progress is local to the current browser profile; no account or cloud save is involved.

## Sound

Supplied audio remains in the project. Browsers generally require a user gesture before playing sound, so audio begins after the player starts the journey. Use the top-right settings control to mute or adjust it. The storm video is a simulation, not actual Opportunity footage or a recording of Martian wind. Audio playback and source licensing should be checked on the intended submission hardware before release.

## Sources and evidence

The collected-photo lightbox displays an image credit and direct NASA/NASA-hosted source link. The accompanying [`CREDITS.md`](CREDITS.md) contains the per-image record IDs, attribution, mission fact references, and production/media disclosures. Twelve gallery items were matched to official NASA records or the exact NASA science reference; the supplied retroreflector scene is preserved and visibly marked as lacking a confirmed frame-level citation. The Endurance route stop explicitly identifies its genuine Eagle Crater supporting image rather than claiming it is an Endurance photograph.

Narration is fictionalized personification, not a real transmission. Generated/AI-assisted cinematic backgrounds and engineering reconstructions are distinguished from NASA photographs. Scientific dialogue is based on NASA mission records and uses uncertainty where the evidence is uncertain.

## Project files

- `index.html` — deployable entry point.
- `src/story.js` — dialogue and science/history beats.
- `src/game-next.js` — scenes, interactions, saves, sound, photo archive and progression.
- `game-next.css` — cinematic responsive interface and accessible motion/input styling.
- `assets/art/` — supplied cinematic art and cutouts.
- `assets/photos/` — supplied NASA photographs, technical illustrations and references.
- `assets/audio/` and `assets/video/mars-sandstorm.mp4` — supplied sound and storm simulation.
- `assets/source-originals/` — supplied provenance files; not required at runtime.
- `assets/ASSET-MANIFEST.json` — file inventory. All 115 listed asset paths and byte counts were checked against the packaged files.

## Validation and remaining release checks

Both complete chapters, their endings, the collectible archive, branching dialogue and the final epilogue were played through in the browser. The updated archive modal/settings focus and Escape behavior, saved completed-chapter/gallery progress, JavaScript syntax and all manifest paths were also checked. The game remains client-side and the provided files load from a static local server.

The browser test was not a full screen-reader audit or device-matrix test: verify mobile behavior on target phones/tablets, test audio on the submission device, and confirm event rules, supplied-media licenses and AI-disclosure requirements before public release. See [`CREDITS.md`](CREDITS.md) for the remaining photo-attribution caveat.
